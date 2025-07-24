const attrs = {
  "SEGMENTO_EMPRESA": "Indústria Geral",
  "JOB_TITLE": "Analista",
  "QUANTIDADE_LICENÇAS": "4 a 8"
};

const pontos_segmentos = {
    "Software e Cloud" : 15,
    "Comércio" : 13,
    "Serviços em geral" : 11,
    "Serviços e Estética" : 9,
    "Indústria Geral" : 7,
    "Financeiro e Serviços Relacionados" : 5,
    "Outros" : 3
};

const pontos_cargos = {
    "Gerente" : 15,
    "Diretor" : 13,
    "Analista" : 11,
    "Coordenador" : 9,
    "Supervisor" : 7,
    "Assistente" : 5,
    "Outros" : 3
};

const pontos_licencas = {
  "1 a 3": 10,
  "4 a 8": 30,
  "9 a 15": 50,
  "16+": 70
};

const segmento = attrs["SEGMENTO_EMPRESA"] || "";
const cargo = attrs["JOB_TITLE"] || "";
const licencas = attrs["QUANTIDADE_LICENÇAS"] || "";

// Calcula a pontuação
const segmento_score = pontos_segmentos[segmento] || 3;
const cargo_score = pontos_cargos[cargo] || 3;
const qtd_licencas_score = pontos_licencas[licencas] || 10;

const pesos = {
  segmentos: 0.15,
  cargos: 0.15,
  quantidade_licencas: 0.70
};

const score_total = (
  (segmento_score / 15) * pesos.segmentos +
  (cargo_score / 15) * pesos.cargos +
  (qtd_licencas_score / 70) * pesos.quantidade_licencas
) * 100;

let classificacao = "Lead Frio";
if (score_total >= 70) {
  classificacao = "Lead Muito Quente";
} else if (score_total >= 50) {
  classificacao = "Lead Quente";
} else if (score_total >= 20) {
  classificacao = "Lead Morno";
} else {
  classificacao = "Lead Frio";
}

console.log("Score Total:", score_total.toFixed(2));
console.log("Classificação:", classificacao);

