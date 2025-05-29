// Função que calcula o IMC
const calc = (peso, altura) => peso / (altura * altura);

// Função que pega os valores, calcula e exibe o resultado
function calcularIMC(event) {
  event.preventDefault(); // Impede o envio do form e o refresh da página (conteúdo mais avançado)

  const nome = document.getElementById("nome").value;
  const sobrenome = document.getElementById("sobrenome").value;
  const peso = Number(document.getElementById("peso").value);
  const altura = Number(document.getElementById("altura").value);

  if (!nome || !sobrenome || !peso || !altura) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const IMC = calc(peso, altura);
  const resultadoFinal = IMC.toFixed(2);

  // Atualiza o conteúdo do resultado
  const resultElement = document.getElementById("resultado");
  resultElement.innerHTML = `<p>${nome} ${sobrenome}, seu IMC é <strong>${resultadoFinal}</strong></p>`;
}

// Adiciona evento no formulário
document.getElementById("imcForm").addEventListener("submit", calcularIMC);
