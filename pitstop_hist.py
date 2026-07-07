#!/usr/bin/env python3
# pitstop_hist.py · Pitstop Imports
# Motor do histórico do scanner de ofertas.
#
# O QUE FAZ
#   Le o dados.js, tira o snapshot do dia (menor custo por modelo+tipo, sem
#   acessorio), guarda em historico.json e, quando pedido, recalcula os sinais
#   hist/hot para o dia mais recente e grava o campo op no dados.js.
#   (O sinal comp, comparativo entre fornecedores, continua sendo calculado ao
#   vivo dentro do index.html; aqui so tratamos hist e hot, que dependem do
#   historico acumulado.)
#
# USO
#   python pitstop_hist.py dados.js 2026-06-30              # so registra o snapshot do dia
#   python pitstop_hist.py dados.js 2026-06-30 --write-op   # registra e grava op no dados.js
#
# SEMEAR COM LISTAS ANTIGAS (do mais antigo para o mais novo)
#   python pitstop_hist.py dados_16jun.js 2026-06-16
#   python pitstop_hist.py dados_19jun.js 2026-06-19
#   ...
#   python pitstop_hist.py dados.js       2026-06-30 --write-op   # o atual, ja com op

import json, re, sys, statistics
from datetime import date, timedelta

HIST_PATH = "historico.json"
JANELA    = 14      # dias da janela movel
MIN_OBS   = 4       # observacoes minimas na janela (incluindo o dia) p/ hist
LIM_HIST  = 0.06    # hist dispara com >= 6% abaixo da mediana dos dias anteriores

def carregar_dados(caminho):
    txt = open(caminho, encoding="utf-8").read()
    m = re.search(r"\{.*\}", txt, re.S)           # do primeiro { ao ultimo }
    if not m:
        raise ValueError("nao achei o objeto DADOS em " + caminho)
    return json.loads(m.group(0))

def cm(p):                                         # custo minimo do produto
    if p.get("cs"):
        return min(x["v"] for x in p["cs"])
    return p.get("v", 0) or 0

def snapshot(dados):                               # menor custo por modelo|tipo, sem acessorio
    snap = {}
    for p in dados["produtos"]:
        if p.get("c") == "Acessório":
            continue
        c = cm(p)
        if c <= 0:
            continue
        k = p["n"] + "|" + p["t"]
        if k not in snap or c < snap[k]:
            snap[k] = c
    return snap

def carregar_hist():
    try:
        return json.load(open(HIST_PATH, encoding="utf-8"))
    except FileNotFoundError:
        return {"v": 1, "janela_dias": JANELA, "min_obs": MIN_OBS, "snapshots": []}

def upsert(hist, data_str, snap):                  # 1 snapshot por data (substitui se repetir)
    hist["snapshots"] = [s for s in hist["snapshots"] if s["data"] != data_str]
    hist["snapshots"].append({"data": data_str, "precos": snap})
    hist["snapshots"].sort(key=lambda s: s["data"])
    return hist

def calc_op(hist, data_str):                       # sinais hist/hot p/ o dia data_str
    d   = date.fromisoformat(data_str)
    ini = d - timedelta(days=JANELA)
    jan = [s for s in hist["snapshots"] if ini < date.fromisoformat(s["data"]) <= d]
    hoje = next((s for s in jan if s["data"] == data_str), None)
    if not hoje:
        return {}
    ant = [s for s in jan if s["data"] != data_str]
    ops = {}
    for k, hv in hoje["precos"].items():
        prev = [s["precos"][k] for s in ant if k in s["precos"]]
        # hot: novo minimo do periodo (custo mais baixo que qualquer dia anterior)
        if prev and hv < min(prev):
            p = round((min(prev) - hv) / min(prev) * 100)
            if p >= 1:
                ops[k] = {"k": "hot", "p": p}
                continue
        # hist: janela com >=4 obs (incl. hoje) e hoje >=6% abaixo da mediana anterior
        if len(prev) >= MIN_OBS - 1:
            med = statistics.median(prev)
            if med > 0 and hv <= med * (1 - LIM_HIST):
                p = round((med - hv) / med * 100)
                if p >= 1:
                    ops[k] = {"k": "hist", "p": p}
    return ops

def escrever_op(dados, ops):                        # grava op no fornecedor mais barato de cada grupo
    grupos = {}
    for i, p in enumerate(dados["produtos"]):
        p.pop("op", None)                           # limpa op antigo
        if p.get("c") == "Acessório":
            continue
        c = cm(p)
        if c <= 0:
            continue
        k = p["n"] + "|" + p["t"]
        if k not in grupos or c < grupos[k][1]:
            grupos[k] = (i, c)
    n = 0
    for k, op in ops.items():
        if k in grupos:
            dados["produtos"][grupos[k][0]]["op"] = op
            n += 1
    return n

def salvar_dados(dados, caminho):
    hdr = "// dados.js · Pitstop Imports · op (hist/hot) gravado por pitstop_hist.py\n"
    corpo = json.dumps(dados, ensure_ascii=False, indent=1)
    open(caminho, "w", encoding="utf-8").write(hdr + "const DADOS = " + corpo + ";\n")

def main():
    if len(sys.argv) < 3:
        print("uso: python pitstop_hist.py <dados.js> <YYYY-MM-DD> [--write-op]")
        sys.exit(1)
    caminho, data_str = sys.argv[1], sys.argv[2]
    write_op = "--write-op" in sys.argv
    dados = carregar_dados(caminho)
    hist  = upsert(carregar_hist(), data_str, snapshot(dados))
    json.dump(hist, open(HIST_PATH, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print("snapshot %s: %d modelos | historico.json com %d dia(s)"
          % (data_str, len(hist["snapshots"][-1]["precos"]), len(hist["snapshots"])))
    if write_op:
        ultima = hist["snapshots"][-1]["data"]
        ops = calc_op(hist, ultima)
        n = escrever_op(dados, ops)
        salvar_dados(dados, caminho)
        hot = sum(1 for o in ops.values() if o["k"] == "hot")
        his = sum(1 for o in ops.values() if o["k"] == "hist")
        print("op gravado em %d produto(s): %d hot, %d hist (dia %s)" % (n, hot, his, ultima))
        print("comp (entre fornecedores) segue calculado ao vivo no index.html")

if __name__ == "__main__":
    main()
