// Obtém o número digitado pelo usuário e converte para tipo Number
const numero = Number(prompt("Digite um número: "));

// Seleciona os elementos HTML onde os resultados serão exibidos
const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");
const raiz = document.getElementById("raiz");
const inteiro = document.getElementById("inteiro");
const isNaNResult = document.getElementById("isNaN");
const arredondaBaixo = document.getElementById("arredondaBaixo");
const arredondaCima = document.getElementById("arredondaCima");
const duasDecimais = document.getElementById("duasDecimais");

// Exibe o número informado pelo usuário no título da página
numeroTitulo.innerHTML = numero;

// Exibe a raiz quadrada do número
raiz.innerHTML = `<p>A raiz quadrada de <strong>${numero}</strong> é <strong>${
  numero ** 0.5
}</strong>.</p>`;

// Verifica se o número é inteiro
inteiro.innerHTML = `<p><strong>${numero}</strong> é inteiro: <strong>${Number.isInteger(
  numero
)}</strong>.</p>`;

// Verifica se o valor é NaN (Not a Number)
isNaNResult.innerHTML = `<p>É NaN: <strong>${isNaN(numero)}</strong>;</p>`;

// Arredonda o número para baixo
arredondaBaixo.innerHTML = `<p>Arredondado para baixo: <strong>${Math.floor(
  numero
)}</strong>.</p>`;

// Arredonda o número para cima
arredondaCima.innerHTML = `<p>Arredondado para cima: <strong>${Math.ceil(
  numero
)}</strong>.</p>`;

// Exibe o número com duas casas decimais
duasDecimais.innerHTML = `<p>Com duas casas decimais: <strong>${numero.toFixed(
  2
)}</strong></p>`;
