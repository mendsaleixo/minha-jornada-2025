// Função que calcula o IMC
const calc = (peso, altura) => peso / (altura * altura);

// Função que pega os valores, calcula e exibe o resultado
function calcularIMC(event) {
  event.preventDefault();

  const peso = Number(document.getElementById("peso").value);
  const altura = Number(document.getElementById("altura").value);

  console.log(peso, altura);
  const IMC = calc(peso, altura);
  const resultadoFinal = IMC.toFixed(2);

  // Atualiza o conteúdo do resultado
  const resultElement = document.getElementById("resultado");
  resultElement.innerHTML = `<p>Seu IMC é <strong>${resultadoFinal}</strong></p>`;
}

// Adiciona evento no formulário
document.getElementById("imcForm").addEventListener("submit", calcularIMC);
