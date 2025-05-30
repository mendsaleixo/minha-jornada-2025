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
  let status = 0;

  if (resultadoFinal <= 18.5) {
    status = `(Abaixo do peso)`;
  } else if (resultadoFinal > 18.5 && resultadoFinal <= 24.9) {
    status = `(Peso normal)`;
  } else if (resultadoFinal >= 25 && resultadoFinal <= 29.9) {
    status = `(Sobrepeso)`;
  } else if (resultadoFinal >= 30 && resultadoFinal <= 34.9) {
    status = `(Obesidade grau 1)`;
  } else if (resultadoFinal >= 35 && resultadoFinal <= 39.9) {
    status = `(Obesidade grau 2)`;
  } else if (resultadoFinal >= 40) {
    status = `(Obesidade grau 3)`;
  }

  // Atualiza o conteúdo do resultado
  const resultElement = document.getElementById("resultado");
  resultElement.innerHTML = `<p>Seu IMC é <strong>${resultadoFinal}</strong> ${status}</p>`;
}
// Adiciona evento no formulário
document.getElementById("imcForm").addEventListener("submit", calcularIMC);
