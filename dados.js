// dados.js — Pitstop Imports | Atualizado: 04/06/2026
// ⚠️ FORNECEDOR NÃO IDENTIFICADO: lista "🚨 LACRADOS 🚨" (21:40:56)
//    mensagem seguinte apagada — confirmar nome do fornecedor antes de incluir.
// Ausentes neste chat: Cristiano, Revel, LC Fone, FMATA, MP Imports, BK Phones, Chiq Cell.

const DADOS = {
  config: { d:300, s300:false, scusto:true, iav:550, ipc:650, mav:1200, mpc:1300 },
  bateria: [],
  tela: [],
  produtos: [

// ══════════════════════════════════════════════════════
// IPHONES — LACRADOS
// ══════════════════════════════════════════════════════

{n:"iPhone 13 128GB CPO",f:"Charles",l:"Méier — RJ",c:"iPhone",t:"Lacrado",
 cs:[{n:"Preto",h:"#1c1c1e",v:2800},{n:"Branco",h:"#f5f0e8",v:2850}]},
{n:"iPhone 13 128GB CPO",f:"Quality",l:"Barra da Tijuca — RJ",c:"iPhone",t:"Lacrado",
 cs:[{n:"Preto",h:"#1c1c1e",v:2950},{n:"Branco",h:"#f5f0e8",v:2999}]},

{n:"iPhone 15 128GB",f:"Charles",l:"Méier — RJ",c:"iPhone",t:"Lacrado",
 cs:[{n:"Azul",h:"#2c4f8c",v:3600},{n:"Preto",h:"#1c1c1e",v:3600},{n:"Rosa",h:"#f2b8c6",v:3650}]},
{n:"iPhone 15 128GB",f:"M Apple",l:"Campo Grande — RJ",c:"iPhone",t:"Lacrado",
 cs:[{n:"Azul",h:"#2c4f8c",v:3650}]},
{n:"iPhone 15 128GB",f:"Quality",l:"Barra da Tijuca — RJ",c:"iPhone",t:"Lacrado",
 cs:[{n:"Rosa",h:"#f2b8c6",v:3799},{n:"Azul",h:"#2c4f8c",v:3799},{n:"Preto",h:"#1c1c1e",v:3799}]},

{n:"iPhone 15 Pro Max 256GB CPO",f:"Charles",l:"Méier — RJ",c:"iPhone",t:"Lacrado",
 cs:[{n:"Azul",h:"#2c4f8c",v:5500},{n:"Branco",h:"#f5f0e8",v:5500},{n:"Natural",h:"#b0a99c",v:5500}]},
{n:"iPhone 15 Pro Max 256GB CPO",f:"Quality",l:"Barra da Tijuca — RJ",c:"iPhone",t:"Lacrado",
 cs:[{n:"Branco",h:"#f5f0e8",v:5650},{n:"Azul",h:"#2c4f8c",v:5650},{n:"Natural",h:"#b0a99c",v:5650}]},

{n:"iPhone 16 128GB",f:"Charles",l:"Méier — RJ",c:"iPhone",t:"Lacrado",
 cs:[{n:"Verde",h:"#4e8a6e",v:3900},{n:"Azul",h:"#2c4f8c",v:3900},{n:"Preto",h:"#1c1c1e",v:4000},{n:"Rosa",h:"#f2b8c6",v:4150},{n:"Branco",h:"#f5f0e8",v:4150}]},
{n:"iPhone 16 128GB",f:"M Apple",l:"Campo Grande — RJ",c:"iPhone",t:"Lacrado",
 cs:[{n:"Azul",h:"#2c4f8c",v:4000},{n:"Branco",h:"#f5f0e8",v:4000}]},
{n:"iPhone 16 128GB",f:"Quality",l:"Barra da Tijuca — RJ",c:"iPhone",t:"Lacrado",
 cs:[{n:"Verde",h:"#4e8a6e",v:4050},{n:"Preto",h:"#1c1c1e",v:4150},{n:"Rosa",h:"#f2b8c6",v:4299},{n:"Branco",h:"#f5f0e8",v:4299}]},
{n:"iPhone 16 128GB",f:"Five Cell",l:"Caxias — RJ",c:"iPhone",t:"Lacrado",
 cs:[{n:"Branco",h:"#f5f0e8",v:4200},{n:"Rosa",h:"#f2b8c6",v:4200}]},

{n:"iPhone 16 Plus 256GB",f:"Charles",l:"Méier — RJ",c:"iPhone",t:"Lacrado",
 cs:[{n:"Preto",h:"#1c1c1e",v:5000},{n:"Rosa",h:"#f2b8c6",v:5150}]},
{n:"iPhone 16 Plus 256GB",f:"Quality",l:"Barra da Tijuca — RJ",c:"iPhone",t:"Lacrado",
 cs:[{n:"Preto",h:"#1c1c1e",v:5150},{n:"Rosa",h:"#f2b8c6",v:5299}]},

{n:"iPhone 16 Pro Max 256GB",f:"Charles",l:"Méier — RJ",c:"iPhone",t:"Lacrado",
 cs:[{n:"Desert",h:"#c4b098",v:6450},{n:"Preto",h:"#1c1c1e",v:6450}]},
{n:"iPhone 16 Pro Max 256GB",f:"Quality",l:"Barra da Tijuca — RJ",c:"iPhone",t:"Lacrado",
 cs:[{n:"Desert",h:"#c4b098",v:6599},{n:"Preto",h:"#1c1c1e",v:6650}]},

{n:"iPhone 17e 256GB",f:"Charles",l:"Méier — RJ",c:"iPhone",t:"Lacrado",
 cs:[{n:"Branco",h:"#f5f0e8",v:3600},{n:"Rosa",h:"#f2b8c6",v:3600}]},
{n:"iPhone 17e 256GB",f:"Real Fone",l:"Centro — RJ",c:"iPhone",t:"Lacrado",
 cs:[{n:"Branco",h:"#f5f0e8",v:3746}]},
{n:"iPhone 17e 256GB",f:"Quality",l:"Barra da Tijuca — RJ",c:"iPhone",t:"Lacrado",
 cs:[{n:"Branco",h:"#f5f0e8",v:3799},{n:"Rosa",h:"#f2b8c6",v:3799}]},

{n:"iPhone 17 256GB",f:"Charles",l:"Méier — RJ",c:"iPhone",t:"Lacrado",
 cs:[{n:"Branco",h:"#f5f0e8",v:4550},{n:"Preto",h:"#1c1c1e",v:4550},{n:"Lavanda",h:"#b8b0d0",v:4550}]},
{n:"iPhone 17 256GB",f:"Five Cell",l:"Caxias — RJ",c:"iPhone",t:"Lacrado",
 cs:[{n:"Lilás",h:"#c8b8d8",v:4600}]},
{n:"iPhone 17 256GB",f:"Quality",l:"Barra da Tijuca — RJ",c:"iPhone",t:"Lacrado",
 cs:[{n:"Azul",h:"#2c4f8c",v:4650},{n:"Preto",h:"#1c1c1e",v:4750},{n:"Branco",h:"#f5f0e8",v:4750},{n:"Lavanda",h:"#b8b0d0",v:4750}]},

{n:"iPhone 17 Air 256GB",f:"Charles",l:"Méier — RJ",c:"iPhone",t:"Lacrado",
 cs:[{n:"Azul",h:"#2c4f8c",v:5500},{n:"Branco",h:"#f5f0e8",v:5500}]},
{n:"iPhone 17 Air 256GB",f:"Quality",l:"Barra da Tijuca — RJ",c:"iPhone",t:"Lacrado",
 cs:[{n:"Azul",h:"#2c4f8c",v:5699},{n:"Branco",h:"#f5f0e8",v:5699}]},
{n:"iPhone 17 Air 256GB",f:"Real Fone",l:"Centro — RJ",c:"iPhone",t:"Lacrado",
 cs:[{n:"Branco",h:"#f5f0e8",v:5847}]},

{n:"iPhone 17 Pro 256GB",f:"Charles",l:"Méier — RJ",c:"iPhone",t:"Lacrado",
 cs:[{n:"Laranja",h:"#e86a33",v:6800},{n:"Silver",h:"#e0e0e5",v:6900},{n:"Azul",h:"#2c4f8c",v:6900}]},
{n:"iPhone 17 Pro 256GB",f:"Five Cell",l:"Caxias — RJ",c:"iPhone",t:"Lacrado",
 cs:[{n:"Laranja",h:"#e86a33",v:6950}]},
{n:"iPhone 17 Pro 256GB",f:"Quality",l:"Barra da Tijuca — RJ",c:"iPhone",t:"Lacrado",
 cs:[{n:"Laranja",h:"#e86a33",v:7099},{n:"Azul",h:"#2c4f8c",v:7199},{n:"Silver",h:"#e0e0e5",v:7199}]},
{n:"iPhone 17 Pro 256GB",f:"M Apple",l:"Campo Grande — RJ",c:"iPhone",t:"Lacrado",
 cs:[{n:"Branco",h:"#f5f0e8",v:7150}]},
{n:"iPhone 17 Pro 256GB",f:"LBR Importados",l:"Centro — Niterói/RJ",c:"iPhone",t:"Lacrado",
 cs:[{n:"Azul",h:"#2c4f8c",v:7600},{n:"Laranja",h:"#e86a33",v:7600}]},

{n:"iPhone 17 Pro 512GB",f:"Charles",l:"Méier — RJ",c:"iPhone",t:"Lacrado",
 cs:[{n:"Laranja",h:"#e86a33",v:8200}]},
{n:"iPhone 17 Pro 512GB",f:"Quality",l:"Barra da Tijuca — RJ",c:"iPhone",t:"Lacrado",
 cs:[{n:"Laranja",h:"#e86a33",v:8399}]},

{n:"iPhone 17 Pro 1TB",f:"Five Cell",l:"Caxias — RJ",c:"iPhone",t:"Lacrado",
 cs:[{n:"Azul",h:"#2c4f8c",v:9100}]},

{n:"iPhone 17 Pro Max 256GB",f:"Five Cell",l:"Caxias — RJ",c:"iPhone",t:"Lacrado",
 cs:[{n:"Laranja",h:"#e86a33",v:7200},{n:"Silver",h:"#e0e0e5",v:7550}]},
{n:"iPhone 17 Pro Max 256GB",f:"Charles",l:"Méier — RJ",c:"iPhone",t:"Lacrado",
 cs:[{n:"Azul",h:"#2c4f8c",v:7200},{n:"Laranja",h:"#e86a33",v:7200},{n:"Silver",h:"#e0e0e5",v:7500}]},
{n:"iPhone 17 Pro Max 256GB",f:"M Apple",l:"Campo Grande — RJ",c:"iPhone",t:"Lacrado",
 cs:[{n:"Laranja",h:"#e86a33",v:7250},{n:"Azul",h:"#2c4f8c",v:7350}]},
{n:"iPhone 17 Pro Max 256GB",f:"Real Fone",l:"Centro — RJ",c:"iPhone",t:"Lacrado",
 cs:[{n:"Laranja",h:"#e86a33",v:7349}]},
{n:"iPhone 17 Pro Max 256GB",f:"Quality",l:"Barra da Tijuca — RJ",c:"iPhone",t:"Lacrado",
 cs:[{n:"Laranja",h:"#e86a33",v:7499},{n:"Azul",h:"#2c4f8c",v:7599},{n:"Silver",h:"#e0e0e5",v:7699}]},
{n:"iPhone 17 Pro Max 256GB",f:"LBR Importados",l:"Centro — Niterói/RJ",c:"iPhone",t:"Lacrado",
 cs:[{n:"Azul",h:"#2c4f8c",v:7600},{n:"Laranja",h:"#e86a33",v:7600}]},

{n:"iPhone 17 Pro Max 512GB",f:"Charles",l:"Méier — RJ",c:"iPhone",t:"Lacrado",
 cs:[{n:"Laranja",h:"#e86a33",v:8650},{n:"Silver",h:"#e0e0e5",v:9400}]},
{n:"iPhone 17 Pro Max 512GB",f:"Quality",l:"Barra da Tijuca — RJ",c:"iPhone",t:"Lacrado",
 cs:[{n:"Laranja",h:"#e86a33",v:8999},{n:"Silver",h:"#e0e0e5",v:9599}]},

// ══════════════════════════════════════════════════════
// IPHONES — SEMINOVOS
// ══════════════════════════════════════════════════════

{n:"iPhone 11 64GB",f:"Júnior",l:"Recreio — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Branco",h:"#f5f0e8",v:1250},{n:"Lilás",h:"#c8b8d8",v:1250},{n:"Preto",h:"#1c1c1e",v:1250},{n:"Verde",h:"#4e8a6e",v:1250}]},

{n:"iPhone 11 128GB",f:"Quality",l:"Barra da Tijuca — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Vermelho",h:"#bf0000",v:1000},{n:"Preto",h:"#1c1c1e",v:1050}]},

{n:"iPhone 11 256GB",f:"Júnior",l:"Recreio — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Lilás",h:"#c8b8d8",v:1450}]},

{n:"iPhone 11 Pro 64GB",f:"Júnior",l:"Recreio — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Gold",h:"#c8a96e",v:1599},{n:"Grafite",h:"#54524f",v:1599},{n:"Verde",h:"#4e8a6e",v:1599},{n:"Silver",h:"#e0e0e5",v:1599}]},

{n:"iPhone 11 Pro 256GB",f:"Júnior",l:"Recreio — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Verde",h:"#4e8a6e",v:1750},{n:"Gold",h:"#c8a96e",v:1750}]},

{n:"iPhone 11 Pro 512GB",f:"Júnior",l:"Recreio — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Verde",h:"#4e8a6e",v:1899},{n:"Silver",h:"#e0e0e5",v:1899},{n:"Grafite",h:"#54524f",v:1899}]},

{n:"iPhone 11 Pro Max 64GB",f:"Júnior",l:"Recreio — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Grafite",h:"#54524f",v:1799},{n:"Gold",h:"#c8a96e",v:1799},{n:"Verde",h:"#4e8a6e",v:1799},{n:"Silver",h:"#e0e0e5",v:1799}]},

{n:"iPhone 12 64GB",f:"Quality",l:"Barra da Tijuca — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Branco",h:"#f5f0e8",v:1350}]},
{n:"iPhone 12 64GB",f:"M Apple",l:"Campo Grande — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Verde",h:"#4e8a6e",v:1350}]},
{n:"iPhone 12 64GB",f:"Júnior",l:"Recreio — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Branco",h:"#f5f0e8",v:1399},{n:"Lilás",h:"#c8b8d8",v:1399}]},
{n:"iPhone 12 64GB",f:"Davi/Fábio",l:"Bangu — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Azul",h:"#2c4f8c",v:1479},{n:"Preto",h:"#1c1c1e",v:1479},{n:"Verde",h:"#4e8a6e",v:1479},{n:"Roxo",h:"#7b6ea0",v:1479},{n:"Branco",h:"#f5f0e8",v:1479}]},

{n:"iPhone 12 128GB",f:"Quality",l:"Barra da Tijuca — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Preto",h:"#1c1c1e",v:1580},{n:"Lilás",h:"#c8b8d8",v:1580}]},
{n:"iPhone 12 128GB",f:"Davi/Fábio",l:"Bangu — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Preto",h:"#1c1c1e",v:1649},{n:"Branco",h:"#f5f0e8",v:1649},{n:"Azul",h:"#2c4f8c",v:1649},{n:"Vermelho",h:"#bf0000",v:1649},{n:"Roxo",h:"#7b6ea0",v:1649}]},
{n:"iPhone 12 128GB",f:"LBR Importados",l:"Centro — Niterói/RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Preto",h:"#1c1c1e",v:1700},{n:"Lilás",h:"#c8b8d8",v:1700}]},

{n:"iPhone 12 256GB",f:"Júnior",l:"Recreio — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Lilás",h:"#c8b8d8",v:1750},{n:"Azul",h:"#2c4f8c",v:1750},{n:"Preto",h:"#1c1c1e",v:1750}]},
{n:"iPhone 12 256GB",f:"Davi/Fábio",l:"Bangu — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Verde",h:"#4e8a6e",v:1899},{n:"Roxo",h:"#7b6ea0",v:1899}]},

{n:"iPhone 12 Pro 128GB",f:"Davi/Fábio",l:"Bangu — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Azul",h:"#2c4f8c",v:1849}]},
{n:"iPhone 12 Pro 128GB",f:"LBR Importados",l:"Centro — Niterói/RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Grafite",h:"#54524f",v:1850}]},
{n:"iPhone 12 Pro 128GB",f:"Júnior",l:"Recreio — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Azul",h:"#2c4f8c",v:1850},{n:"Grafite",h:"#54524f",v:1850}]},

{n:"iPhone 12 Pro 256GB",f:"Júnior",l:"Recreio — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Azul",h:"#2c4f8c",v:2050},{n:"Grafite",h:"#54524f",v:2050},{n:"Gold",h:"#c8a96e",v:2050},{n:"Silver",h:"#e0e0e5",v:2050}]},
{n:"iPhone 12 Pro 256GB",f:"Davi/Fábio",l:"Bangu — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Laranja",h:"#e86a33",v:2139}]},

{n:"iPhone 12 Pro 512GB",f:"Davi/Fábio",l:"Bangu — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Preto",h:"#1c1c1e",v:2279}]},

{n:"iPhone 12 Pro Max 128GB",f:"Davi/Fábio",l:"Bangu — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Azul",h:"#2c4f8c",v:2199}]},
{n:"iPhone 12 Pro Max 128GB",f:"Júnior",l:"Recreio — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Grafite",h:"#54524f",v:2199},{n:"Azul",h:"#2c4f8c",v:2199},{n:"Gold",h:"#c8a96e",v:2199},{n:"Silver",h:"#e0e0e5",v:2199}]},
{n:"iPhone 12 Pro Max 128GB",f:"M Apple",l:"Campo Grande — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Preto",h:"#1c1c1e",v:2300}]},

{n:"iPhone 12 Pro Max 256GB",f:"Júnior",l:"Recreio — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Grafite",h:"#54524f",v:2399},{n:"Azul",h:"#2c4f8c",v:2399},{n:"Gold",h:"#c8a96e",v:2399}]},

{n:"iPhone 13 128GB",f:"LBR Importados",l:"Centro — Niterói/RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Preto",h:"#1c1c1e",v:1850},{n:"Verde",h:"#4e8a6e",v:1850},{n:"Azul",h:"#2c4f8c",v:1850}]},
{n:"iPhone 13 128GB",f:"Davi/Fábio",l:"Bangu — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Branco",h:"#f5f0e8",v:1949},{n:"Rosa",h:"#f2b8c6",v:1949},{n:"Preto",h:"#1c1c1e",v:1949},{n:"Verde",h:"#4e8a6e",v:1949}]},
{n:"iPhone 13 128GB",f:"Júnior",l:"Recreio — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Preto",h:"#1c1c1e",v:1999},{n:"Azul",h:"#2c4f8c",v:1999},{n:"Branco",h:"#f5f0e8",v:1999},{n:"Rosa",h:"#f2b8c6",v:1999},{n:"Verde",h:"#4e8a6e",v:1999}]},
{n:"iPhone 13 128GB",f:"Quality",l:"Barra da Tijuca — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Azul",h:"#2c4f8c",v:2099},{n:"Branco",h:"#f5f0e8",v:2099},{n:"Preto",h:"#1c1c1e",v:2099}]},

{n:"iPhone 13 256GB",f:"Davi/Fábio",l:"Bangu — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Azul",h:"#2c4f8c",v:2049},{n:"Verde",h:"#4e8a6e",v:2049}]},
{n:"iPhone 13 256GB",f:"Júnior",l:"Recreio — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Preto",h:"#1c1c1e",v:2150},{n:"Azul",h:"#2c4f8c",v:2150},{n:"Rosa",h:"#f2b8c6",v:2150},{n:"Branco",h:"#f5f0e8",v:2150}]},
{n:"iPhone 13 256GB",f:"Quality",l:"Barra da Tijuca — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Branco",h:"#f5f0e8",v:2199}]},

{n:"iPhone 13 512GB",f:"Júnior",l:"Recreio — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Azul",h:"#2c4f8c",v:2399},{n:"Preto",h:"#1c1c1e",v:2399}]},

{n:"iPhone 13 Pro 128GB",f:"Júnior",l:"Recreio — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Verde",h:"#4e8a6e",v:2350},{n:"Grafite",h:"#54524f",v:2350},{n:"Silver",h:"#e0e0e5",v:2350},{n:"Azul",h:"#2c4f8c",v:2350}]},
{n:"iPhone 13 Pro 128GB",f:"Quality",l:"Barra da Tijuca — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Branco",h:"#f5f0e8",v:2650},{n:"Preto",h:"#1c1c1e",v:2650}]},

{n:"iPhone 13 Pro 256GB",f:"Júnior",l:"Recreio — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Grafite",h:"#54524f",v:2550},{n:"Dourado",h:"#c8a96e",v:2550},{n:"Azul",h:"#2c4f8c",v:2550},{n:"Verde",h:"#4e8a6e",v:2550},{n:"Silver",h:"#e0e0e5",v:2550}]},
{n:"iPhone 13 Pro 256GB",f:"LBR Importados",l:"Centro — Niterói/RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Azul",h:"#2c4f8c",v:3090},{n:"Gold",h:"#c8a96e",v:3090}]},

{n:"iPhone 13 Pro 512GB",f:"Júnior",l:"Recreio — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Grafite",h:"#54524f",v:2750},{n:"Dourado",h:"#c8a96e",v:2750},{n:"Azul",h:"#2c4f8c",v:2750}]},

{n:"iPhone 13 Pro Max 128GB",f:"Davi/Fábio",l:"Bangu — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Laranja",h:"#e86a33",v:2749},{n:"Azul",h:"#2c4f8c",v:2749}]},
{n:"iPhone 13 Pro Max 128GB",f:"Júnior",l:"Recreio — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Azul",h:"#2c4f8c",v:2750},{n:"Grafite",h:"#54524f",v:2750},{n:"Gold",h:"#c8a96e",v:2750}]},
{n:"iPhone 13 Pro Max 128GB",f:"M Apple",l:"Campo Grande — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Branco",h:"#f5f0e8",v:2800}]},
{n:"iPhone 13 Pro Max 128GB",f:"LBR Importados",l:"Centro — Niterói/RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Azul",h:"#2c4f8c",v:2890}]},

{n:"iPhone 13 Pro Max 256GB",f:"Júnior",l:"Recreio — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Verde",h:"#4e8a6e",v:2999},{n:"Grafite",h:"#54524f",v:2999},{n:"Azul",h:"#2c4f8c",v:2999}]},
{n:"iPhone 13 Pro Max 256GB",f:"LBR Importados",l:"Centro — Niterói/RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Azul",h:"#2c4f8c",v:3090},{n:"Gold",h:"#c8a96e",v:3090}]},

{n:"iPhone 13 Pro Max 512GB",f:"Júnior",l:"Recreio — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Gold",h:"#c8a96e",v:3150},{n:"Silver",h:"#e0e0e5",v:3150},{n:"Grafite",h:"#54524f",v:3150},{n:"Azul",h:"#2c4f8c",v:3150}]},

{n:"iPhone 14 128GB",f:"LBR Importados",l:"Centro — Niterói/RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Azul",h:"#2c4f8c",v:2090},{n:"Lilás",h:"#c8b8d8",v:2090},{n:"Preto",h:"#1c1c1e",v:2090}]},
{n:"iPhone 14 128GB",f:"Davi/Fábio",l:"Bangu — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Preto",h:"#1c1c1e",v:2099},{n:"Azul",h:"#2c4f8c",v:2099},{n:"Branco",h:"#f5f0e8",v:2099},{n:"Roxo",h:"#7b6ea0",v:2099}]},
{n:"iPhone 14 128GB",f:"Quality",l:"Barra da Tijuca — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Lilás",h:"#c8b8d8",v:2299},{n:"Preto",h:"#1c1c1e",v:2299},{n:"Branco",h:"#f5f0e8",v:2299},{n:"Roxo",h:"#7b6ea0",v:2299}]},

{n:"iPhone 14 256GB",f:"Júnior",l:"Recreio — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Preto",h:"#1c1c1e",v:2299},{n:"Azul",h:"#2c4f8c",v:2299}]},
{n:"iPhone 14 256GB",f:"Davi/Fábio",l:"Bangu — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Preto",h:"#1c1c1e",v:2299},{n:"Branco",h:"#f5f0e8",v:2299},{n:"Roxo",h:"#7b6ea0",v:2299}]},

{n:"iPhone 14 Plus 128GB",f:"M Apple",l:"Campo Grande — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Roxo",h:"#7b6ea0",v:2200},{n:"Preto",h:"#1c1c1e",v:2200},{n:"Azul",h:"#2c4f8c",v:2200}]},
{n:"iPhone 14 Plus 128GB",f:"Júnior",l:"Recreio — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Lilás",h:"#c8b8d8",v:2350},{n:"Azul",h:"#2c4f8c",v:2350},{n:"Branco",h:"#f5f0e8",v:2350}]},
{n:"iPhone 14 Plus 128GB",f:"Quality",l:"Barra da Tijuca — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Lilás",h:"#c8b8d8",v:2350}]},
{n:"iPhone 14 Plus 128GB",f:"LBR Importados",l:"Centro — Niterói/RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Preto",h:"#1c1c1e",v:2390}]},

{n:"iPhone 14 Plus 256GB",f:"M Apple",l:"Campo Grande — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Roxo",h:"#7b6ea0",v:2300},{n:"Preto",h:"#1c1c1e",v:2300},{n:"Azul",h:"#2c4f8c",v:2300}]},
{n:"iPhone 14 Plus 256GB",f:"Davi/Fábio",l:"Bangu — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Preto",h:"#1c1c1e",v:2399},{n:"Amarelo",h:"#f5e642",v:2399}]},
{n:"iPhone 14 Plus 256GB",f:"Júnior",l:"Recreio — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Preto",h:"#1c1c1e",v:2599}]},

{n:"iPhone 14 Pro 128GB",f:"Júnior",l:"Recreio — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Roxo",h:"#7b6ea0",v:2750},{n:"Preto",h:"#1c1c1e",v:2750},{n:"Gold",h:"#c8a96e",v:2750},{n:"Silver",h:"#e0e0e5",v:2750}]},
{n:"iPhone 14 Pro 128GB",f:"Davi/Fábio",l:"Bangu — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Roxo",h:"#7b6ea0",v:2750},{n:"Preto",h:"#1c1c1e",v:2750},{n:"Gold",h:"#c8a96e",v:2750},{n:"Silver",h:"#e0e0e5",v:2750}]},
{n:"iPhone 14 Pro 128GB",f:"M Apple",l:"Campo Grande — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Preto",h:"#1c1c1e",v:2800},{n:"Amarelo",h:"#f5e642",v:2800}]},

{n:"iPhone 14 Pro 256GB",f:"M Apple",l:"Campo Grande — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Preto",h:"#1c1c1e",v:2900},{n:"Amarelo",h:"#f5e642",v:2900}]},
{n:"iPhone 14 Pro 256GB",f:"Júnior",l:"Recreio — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Roxo",h:"#7b6ea0",v:2950},{n:"Preto",h:"#1c1c1e",v:2950}]},
{n:"iPhone 14 Pro 256GB",f:"Davi/Fábio",l:"Bangu — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Roxo",h:"#7b6ea0",v:2950},{n:"Preto",h:"#1c1c1e",v:2950}]},

{n:"iPhone 14 Pro 512GB",f:"LBR Importados",l:"Centro — Niterói/RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Roxo",h:"#7b6ea0",v:3150},{n:"Preto",h:"#1c1c1e",v:3150}]},
{n:"iPhone 14 Pro 512GB",f:"Júnior",l:"Recreio — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Roxo",h:"#7b6ea0",v:3350}]},
{n:"iPhone 14 Pro 512GB",f:"Davi/Fábio",l:"Bangu — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Roxo",h:"#7b6ea0",v:3350}]},

{n:"iPhone 14 Pro 1TB",f:"Júnior",l:"Recreio — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Preto",h:"#1c1c1e",v:3499}]},
{n:"iPhone 14 Pro 1TB",f:"Davi/Fábio",l:"Bangu — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Preto",h:"#1c1c1e",v:3499}]},

{n:"iPhone 14 Pro Max 128GB",f:"Júnior",l:"Recreio — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Roxo",h:"#7b6ea0",v:3199},{n:"Preto",h:"#1c1c1e",v:3199}]},
{n:"iPhone 14 Pro Max 128GB",f:"LBR Importados",l:"Centro — Niterói/RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Roxo",h:"#7b6ea0",v:3200},{n:"Preto",h:"#1c1c1e",v:3200}]},
{n:"iPhone 14 Pro Max 128GB",f:"Davi/Fábio",l:"Bangu — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Roxo",h:"#7b6ea0",v:3299}]},

{n:"iPhone 14 Pro Max 256GB",f:"Júnior",l:"Recreio — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Roxo",h:"#7b6ea0",v:3399},{n:"Preto",h:"#1c1c1e",v:3399}]},
{n:"iPhone 14 Pro Max 256GB",f:"Davi/Fábio",l:"Bangu — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Preto",h:"#1c1c1e",v:3399},{n:"Roxo",h:"#7b6ea0",v:3399}]},

{n:"iPhone 14 Pro Max 512GB",f:"M Apple",l:"Campo Grande — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Roxo",h:"#7b6ea0",v:3400}]},
{n:"iPhone 14 Pro Max 512GB",f:"Davi/Fábio",l:"Bangu — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Roxo",h:"#7b6ea0",v:3549},{n:"Preto",h:"#1c1c1e",v:3549}]},

{n:"iPhone 14 Pro Max 1TB",f:"Júnior",l:"Recreio — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Roxo",h:"#7b6ea0",v:3999}]},

{n:"iPhone 15 128GB",f:"LBR Importados",l:"Centro — Niterói/RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Preto",h:"#1c1c1e",v:2790},{n:"Rosa",h:"#f2b8c6",v:2790}]},
{n:"iPhone 15 128GB",f:"Davi/Fábio",l:"Bangu — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Azul",h:"#2c4f8c",v:2799},{n:"Rosa",h:"#f2b8c6",v:2799}]},
{n:"iPhone 15 128GB",f:"Júnior",l:"Recreio — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Preto",h:"#1c1c1e",v:2850},{n:"Azul",h:"#2c4f8c",v:2850},{n:"Rosa",h:"#f2b8c6",v:2850},{n:"Verde",h:"#4e8a6e",v:2850}]},

{n:"iPhone 15 256GB",f:"LBR Importados",l:"Centro — Niterói/RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Preto",h:"#1c1c1e",v:2990}]},
{n:"iPhone 15 256GB",f:"Júnior",l:"Recreio — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Preto",h:"#1c1c1e",v:2999},{n:"Rosa",h:"#f2b8c6",v:2999}]},

{n:"iPhone 15 Plus 128GB",f:"M Apple",l:"Campo Grande — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Roxo",h:"#7b6ea0",v:2850},{n:"Azul",h:"#2c4f8c",v:2850}]},
{n:"iPhone 15 Plus 128GB",f:"Davi/Fábio",l:"Bangu — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Preto",h:"#1c1c1e",v:2899}]},
{n:"iPhone 15 Plus 128GB",f:"Júnior",l:"Recreio — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Verde",h:"#4e8a6e",v:3199},{n:"Rosa",h:"#f2b8c6",v:3199}]},

{n:"iPhone 15 Plus 256GB",f:"M Apple",l:"Campo Grande — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Roxo",h:"#7b6ea0",v:3000},{n:"Azul",h:"#2c4f8c",v:3000}]},

{n:"iPhone 15 Pro 128GB",f:"Júnior",l:"Recreio — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Preto",h:"#1c1c1e",v:3350},{n:"Branco",h:"#f5f0e8",v:3350},{n:"Azul",h:"#2c4f8c",v:3350}]},

{n:"iPhone 15 Pro 256GB",f:"Júnior",l:"Recreio — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Azul",h:"#2c4f8c",v:3499},{n:"Preto",h:"#1c1c1e",v:3499},{n:"Branco",h:"#f5f0e8",v:3499},{n:"Natural",h:"#b0a99c",v:3499}]},

{n:"iPhone 15 Pro Max 256GB",f:"M Apple",l:"Campo Grande — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Preto",h:"#1c1c1e",v:3950},{n:"Azul",h:"#2c4f8c",v:3950}]},
{n:"iPhone 15 Pro Max 256GB",f:"Júnior",l:"Recreio — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Natural",h:"#b0a99c",v:3999},{n:"Azul",h:"#2c4f8c",v:3999},{n:"Preto",h:"#1c1c1e",v:3999}]},
{n:"iPhone 15 Pro Max 256GB",f:"LBR Importados",l:"Centro — Niterói/RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Preto",h:"#1c1c1e",v:4030}]},

{n:"iPhone 15 Pro Max 512GB",f:"M Apple",l:"Campo Grande — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Preto",h:"#1c1c1e",v:4150},{n:"Azul",h:"#2c4f8c",v:4150}]},
{n:"iPhone 15 Pro Max 512GB",f:"Júnior",l:"Recreio — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Azul",h:"#2c4f8c",v:4199},{n:"Preto",h:"#1c1c1e",v:4199},{n:"Branco",h:"#f5f0e8",v:4199}]},

{n:"iPhone 16 128GB",f:"M Apple",l:"Campo Grande — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Roxo",h:"#7b6ea0",v:3650},{n:"Preto",h:"#1c1c1e",v:3650}]},
{n:"iPhone 16 128GB",f:"LBR Importados",l:"Centro — Niterói/RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Rosa",h:"#f2b8c6",v:3750},{n:"Preto",h:"#1c1c1e",v:3750}]},
{n:"iPhone 16 128GB",f:"Quality",l:"Barra da Tijuca — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Preto",h:"#1c1c1e",v:3899},{n:"Branco",h:"#f5f0e8",v:3899},{n:"Rosa",h:"#f2b8c6",v:3899}]},

{n:"iPhone 16 Plus 128GB",f:"M Apple",l:"Campo Grande — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Roxo",h:"#7b6ea0",v:3800},{n:"Preto",h:"#1c1c1e",v:3800}]},

{n:"iPhone 16 Pro 128GB",f:"M Apple",l:"Campo Grande — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Natural",h:"#b0a99c",v:4300},{n:"Preto",h:"#1c1c1e",v:4300},{n:"Desert",h:"#c4b098",v:4300}]},
{n:"iPhone 16 Pro 128GB",f:"LBR Importados",l:"Centro — Niterói/RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Desert",h:"#c4b098",v:4390}]},
{n:"iPhone 16 Pro 128GB",f:"Quality",l:"Barra da Tijuca — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Desert",h:"#c4b098",v:4499}]},
{n:"iPhone 16 Pro 128GB",f:"Júnior",l:"Recreio — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Preto",h:"#1c1c1e",v:4550},{n:"Branco",h:"#f5f0e8",v:4550},{n:"Natural",h:"#b0a99c",v:4550}]},

{n:"iPhone 16 Pro 256GB",f:"M Apple",l:"Campo Grande — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Natural",h:"#b0a99c",v:4650},{n:"Preto",h:"#1c1c1e",v:4650},{n:"Desert",h:"#c4b098",v:4650}]},
{n:"iPhone 16 Pro 256GB",f:"Júnior",l:"Recreio — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Preto",h:"#1c1c1e",v:4799}]},

{n:"iPhone 16 Pro Max 256GB",f:"M Apple",l:"Campo Grande — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Preto",h:"#1c1c1e",v:5100},{n:"Branco",h:"#f5f0e8",v:5100},{n:"Natural",h:"#b0a99c",v:5100},{n:"Desert",h:"#c4b098",v:5100}]},
{n:"iPhone 16 Pro Max 256GB",f:"Júnior",l:"Recreio — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Branco",h:"#f5f0e8",v:5199},{n:"Desert",h:"#c4b098",v:5199},{n:"Preto",h:"#1c1c1e",v:5199},{n:"Natural",h:"#b0a99c",v:5199}]},
{n:"iPhone 16 Pro Max 256GB",f:"Quality",l:"Barra da Tijuca — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Desert",h:"#c4b098",v:5199},{n:"Branco",h:"#f5f0e8",v:5199},{n:"Preto",h:"#1c1c1e",v:5199}]},
{n:"iPhone 16 Pro Max 256GB",f:"Davi/Fábio",l:"Bangu — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Preto",h:"#1c1c1e",v:5199}]},
{n:"iPhone 16 Pro Max 256GB",f:"LBR Importados",l:"Centro — Niterói/RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Desert",h:"#c4b098",v:5250},{n:"Preto",h:"#1c1c1e",v:5250},{n:"Natural",h:"#b0a99c",v:5250}]},

{n:"iPhone 16 Pro Max 512GB",f:"M Apple",l:"Campo Grande — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Preto",h:"#1c1c1e",v:5300},{n:"Branco",h:"#f5f0e8",v:5300},{n:"Natural",h:"#b0a99c",v:5300},{n:"Desert",h:"#c4b098",v:5300}]},
{n:"iPhone 16 Pro Max 512GB",f:"Júnior",l:"Recreio — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Preto",h:"#1c1c1e",v:5799}]},

{n:"iPhone 16 Pro Max 1TB",f:"M Apple",l:"Campo Grande — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Preto",h:"#1c1c1e",v:5300},{n:"Branco",h:"#f5f0e8",v:5300},{n:"Natural",h:"#b0a99c",v:5300},{n:"Desert",h:"#c4b098",v:5300}]},

{n:"iPhone 17 Pro Max 256GB",f:"Davi/Fábio",l:"Bangu — RJ",c:"iPhone",t:"Seminovo",
 cs:[{n:"Azul",h:"#2c4f8c",v:6999},{n:"Laranja",h:"#e86a33",v:6999}]},

// ══════════════════════════════════════════════════════
// MACBOOK — LACRADOS
// ══════════════════════════════════════════════════════

{n:"MacBook Neo 8/256GB 13\"",f:"Charles",l:"Méier — RJ",c:"MacBook",t:"Lacrado",
 cs:[{n:"Cítrus",h:"#d4e040",v:4200},{n:"Rosa",h:"#f5c2d8",v:4250}]},
{n:"MacBook Neo 8/256GB 13\"",f:"Five Cell",l:"Caxias — RJ",c:"MacBook",t:"Lacrado",
 cs:[{n:"Rosa",h:"#f5c2d8",v:4300}]},

{n:"MacBook Neo 8/512GB 13\"",f:"Charles",l:"Méier — RJ",c:"MacBook",t:"Lacrado",
 cs:[{n:"Silver",h:"#e0e0e5",v:4800}]},
{n:"MacBook Neo 8/512GB 13\"",f:"LBR Importados",l:"Centro — Niterói/RJ",c:"MacBook",t:"Lacrado",
 cs:[{n:"Blush",h:"#f5c2d8",v:5400},{n:"Silver",h:"#e0e0e5",v:5400},{n:"Índigo",h:"#3b4a8c",v:5400}]},
{n:"MacBook Neo 8/512GB 13\"",f:"Real Fone",l:"Centro — RJ",c:"MacBook",t:"Lacrado",
 cs:[{n:"Silver",h:"#e0e0e5",v:5400},{n:"Blush",h:"#f5c2d8",v:5400}]},

{n:"MacBook Air M4 13\" 16/256GB",f:"Real Fone",l:"Centro — RJ",c:"MacBook",t:"Lacrado",
 cs:[{n:"Sky Blue",h:"#a8cce0",v:6494}]},

{n:"MacBook Air M5 13\" 16/512GB",f:"Real Fone",l:"Centro — RJ",c:"MacBook",t:"Lacrado",
 cs:[{n:"Midnight",h:"#2c3547",v:6631},{n:"Starlight",h:"#f5f2e8",v:6674}]},
{n:"MacBook Air M5 13\" 16/512GB",f:"LBR Importados",l:"Centro — Niterói/RJ",c:"MacBook",t:"Lacrado",
 cs:[{n:"Midnight",h:"#2c3547",v:6680},{n:"Sky Blue",h:"#a8cce0",v:6780}]},
{n:"MacBook Air M5 13\" 16/512GB",f:"Charles",l:"Méier — RJ",c:"MacBook",t:"Lacrado",
 cs:[{n:"Midnight",h:"#2c3547",v:6800}]},
{n:"MacBook Air M5 13\" 16/512GB",f:"Five Cell",l:"Caxias — RJ",c:"MacBook",t:"Lacrado",
 cs:[{n:"Sky Blue",h:"#a8cce0",v:7000}]},

{n:"MacBook Air M5 15\" 16/512GB",f:"LBR Importados",l:"Centro — Niterói/RJ",c:"MacBook",t:"Lacrado",
 cs:[{n:"Midnight",h:"#2c3547",v:8879}]},

{n:"MacBook Pro M5 14\" 16/512GB",f:"Five Cell",l:"Caxias — RJ",c:"MacBook",t:"Lacrado",
 cs:[{n:"Preto",h:"#1c1c1e",v:10300}]},

{n:"MacBook Pro M5 Pro 14\" 24/2TB",f:"LBR Importados",l:"Centro — Niterói/RJ",c:"MacBook",t:"Lacrado",
 cs:[{n:"Silver",h:"#e0e0e5",v:18400}]},

{n:"Mac Mini M4 16/256GB",f:"LBR Importados",l:"Centro — Niterói/RJ",c:"MacBook",t:"Lacrado",v:5999},
{n:"Mac Mini M4 16/512GB",f:"LBR Importados",l:"Centro — Niterói/RJ",c:"MacBook",t:"Lacrado",v:7499},

// ══════════════════════════════════════════════════════
// iPAD — LACRADOS
// ══════════════════════════════════════════════════════

{n:"iPad 11\" 128GB (A16)",f:"M Apple",l:"Campo Grande — RJ",c:"iPad",t:"Lacrado",
 cs:[{n:"Branco",h:"#f5f0e8",v:2150}]},
{n:"iPad 11\" 128GB (A16)",f:"LBR Importados",l:"Centro — Niterói/RJ",c:"iPad",t:"Lacrado",
 cs:[{n:"Silver",h:"#e0e0e5",v:2180}]},
{n:"iPad 11\" 128GB (A16)",f:"Charles",l:"Méier — RJ",c:"iPad",t:"Lacrado",
 cs:[{n:"Silver",h:"#e0e0e5",v:2200},{n:"Rosa",h:"#f2b8c6",v:2200},{n:"Azul",h:"#2c4f8c",v:2200}]},
{n:"iPad 11\" 128GB (A16)",f:"Five Cell",l:"Caxias — RJ",c:"iPad",t:"Lacrado",
 cs:[{n:"Silver",h:"#e0e0e5",v:2300}]},

{n:"iPad Air M4 11\" 128GB",f:"LBR Importados",l:"Centro — Niterói/RJ",c:"iPad",t:"Lacrado",
 cs:[{n:"Space Gray",h:"#3a3a3c",v:3990}]},
{n:"iPad Air M4 11\" 128GB",f:"Charles",l:"Méier — RJ",c:"iPad",t:"Lacrado",
 cs:[{n:"Space Gray",h:"#3a3a3c",v:4000}]},

{n:"iPad Pro M5 11\" 256GB",f:"Real Fone",l:"Centro — RJ",c:"iPad",t:"Lacrado",
 cs:[{n:"Space Black",h:"#1c1c1e",v:6370}]},

{n:"iPad Pro M5 13\" 256GB",f:"LBR Importados",l:"Centro — Niterói/RJ",c:"iPad",t:"Lacrado",
 cs:[{n:"Space Black",h:"#1c1c1e",v:7990}]},

// ══════════════════════════════════════════════════════
// APPLE WATCH — LACRADOS
// ══════════════════════════════════════════════════════

{n:"Apple Watch SE2 44mm",f:"Charles",l:"Méier — RJ",c:"Apple Watch",t:"Lacrado",
 cs:[{n:"Midnight",h:"#2c3547",v:1350}]},

{n:"Apple Watch SE2 44mm GPS+CELL",f:"Charles",l:"Méier — RJ",c:"Apple Watch",t:"Lacrado",
 cs:[{n:"Midnight",h:"#2c3547",v:1500}]},

{n:"Apple Watch SE3 40mm",f:"Real Fone",l:"Centro — RJ",c:"Apple Watch",t:"Lacrado",
 cs:[{n:"Midnight",h:"#2c3547",v:1697},{n:"Starlight",h:"#f5f2e8",v:1899}]},
{n:"Apple Watch SE3 40mm",f:"Charles",l:"Méier — RJ",c:"Apple Watch",t:"Lacrado",
 cs:[{n:"Midnight",h:"#2c3547",v:1700}]},

{n:"Apple Watch SE3 44mm",f:"Charles",l:"Méier — RJ",c:"Apple Watch",t:"Lacrado",
 cs:[{n:"Starlight",h:"#f5f2e8",v:1900}]},

{n:"Apple Watch S11 42mm",f:"LBR Importados",l:"Centro — Niterói/RJ",c:"Apple Watch",t:"Lacrado",
 cs:[{n:"Jet Black",h:"#1c1c1e",v:2180}]},
{n:"Apple Watch S11 42mm",f:"Charles",l:"Méier — RJ",c:"Apple Watch",t:"Lacrado",
 cs:[{n:"Preto",h:"#1c1c1e",v:2200},{n:"Rose Gold",h:"#f5c2a0",v:2300}]},
{n:"Apple Watch S11 42mm",f:"Five Cell",l:"Caxias — RJ",c:"Apple Watch",t:"Lacrado",
 cs:[{n:"Space Gray",h:"#3a3a3c",v:2400}]},

{n:"Apple Watch S11 46mm",f:"Charles",l:"Méier — RJ",c:"Apple Watch",t:"Lacrado",
 cs:[{n:"Space Gray",h:"#3a3a3c",v:2400},{n:"Rose Gold",h:"#f5c2a0",v:2400},{n:"Jet Black",h:"#1c1c1e",v:2400}]},
{n:"Apple Watch S11 46mm",f:"Five Cell",l:"Caxias — RJ",c:"Apple Watch",t:"Lacrado",
 cs:[{n:"Rose Gold",h:"#f5c2a0",v:2600}]},

{n:"Apple Watch Ultra 2",f:"Charles",l:"Méier — RJ",c:"Apple Watch",t:"Lacrado",
 cs:[{n:"Natural",h:"#b0a99c",v:4200}]},

{n:"Apple Watch Ultra 3",f:"Charles",l:"Méier — RJ",c:"Apple Watch",t:"Lacrado",
 cs:[{n:"Black",h:"#1c1c1e",v:4700}]},
{n:"Apple Watch Ultra 3",f:"Real Fone",l:"Centro — RJ",c:"Apple Watch",t:"Lacrado",
 cs:[{n:"Black",h:"#1c1c1e",v:4950}]},
{n:"Apple Watch Ultra 3",f:"Five Cell",l:"Caxias — RJ",c:"Apple Watch",t:"Lacrado",
 cs:[{n:"Black",h:"#1c1c1e",v:5100}]},

// ══════════════════════════════════════════════════════
// ACESSÓRIOS — LACRADOS
// ══════════════════════════════════════════════════════

{n:"AirPods Pro 3",f:"Real Fone",l:"Centro — RJ",c:"Acessório",t:"Lacrado",
 cs:[{n:"Branco",h:"#f5f0e8",v:1500}]},

{n:"AirTag (pack 4)",f:"Charles",l:"Méier — RJ",c:"Acessório",t:"Lacrado",v:600},
{n:"AirTag (pack 4)",f:"LBR Importados",l:"Centro — Niterói/RJ",c:"Acessório",t:"Lacrado",v:650},

{n:"AirTag",f:"Charles",l:"Méier — RJ",c:"Acessório",t:"Lacrado",v:200},

{n:"Apple Pencil USB-C",f:"LBR Importados",l:"Centro — Niterói/RJ",c:"Acessório",t:"Lacrado",v:660},

  ]
};
