// Função que calcula o IMC
const calc = (peso, altura) => peso / (altura * altura);

// Função que pega os valores, calcula e exibe o resultado
function calcularIMC() {
  const name = document.getElementById("name").value;
  const lastname = document.getElementById("lastname").value;
  const weight = Number(document.getElementById("weight").value);
  const height = Number(document.getElementById("height").value);

  if (!name || !lastname || !weight || !height) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const IMC = calc(weight, height);
  const result = IMC.toFixed(2);

  // Atualiza o conteúdo da <p id="result">
  const resultElement = document.getElementById("result");
  resultElement.textContent = `${name} ${lastname}, seu IMC é ${result}`;
}

// Adiciona evento no botão
document.getElementById("button").addEventListener("click", calcularIMC);
