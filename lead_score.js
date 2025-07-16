const attrs = $json;

// Extrai os campos com o nome correto
const segmento = attrs.segmento_da_empresa || "";
const cargo = attrs.job_title || "";
const licencas = attrs.quantidade_de_licenças || "";

const segmentos = {
  "Software e Cloud": 15,
  "Comércio": 13,
  "Serviços em geral": 11,
  "Serviços e Estética": 9,
  "Indústria Geral": 7,
  "Financeiro e Serviços Relacionados": 5
};

const cargos = {
  "Gerente": 15,
  "Diretor": 13,
  "Analista": 11,
  "Coordenador": 9,
  "Supervisor": 7,
  "Assistente": 5
};

const licencasPontuacao = {
  "1 a 3": 10,
  "4 a 8": 30,
  "9 a 15": 50,
  "Acima de 15": 70
};

// Pesos
const pesos = {
  segmento: 0.15,
  cargo: 0.15,
  licencas: 0.70
};

const segScore = segmentos[segmento] || 3;
const cargoScore = cargos[cargo] || 3;
const licencaScore = licencasPontuacao[licencas] || 10;

// Cálculo do score total
const scoreTotal = (
  (segScore / 15) * pesos.segmento  +
  (cargoScore / 15) * pesos.cargo +
  (licencaScore / 70) * pesos.licencas * 100
);

let classificacao;
if (scoreTotal <= 20) {
  classificacao = "Lead Frio";
} else if (scoreTotal <= 50) {
  classificacao = "Lead Morno";
} else if (scoreTotal <= 80) {
  classificacao = "Lead Quente";
} else {
  classificacao = "Lead Muito Quente";
}

// Retorna o resultado para o n8n
return {
  lead_score: Number(scoreTotal.toFixed(2)),
  classificacao
};
