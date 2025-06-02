//const data = new Date();
//console.log(data.toString())
// new Date();
// new Date(valor);
// new Date(dataString);
// new Date(ano, mês, dia, hora, minuto, segundo, milissegundo);
// var today = new Date();
// var birthday = new Date("December 17, 1995 03:24:00");
// var birthday = new Date("1995-12-17T03:24:00");
// var birthday = new Date(1995, 11, 17);
// var birthday = new Date(1995, 11, 17, 3, 24, 0);
// var data = new Date(98, 1); // Dom Fev 01 1998 00:00:00 GMT+0000 (GMT)

// // Métodos em desuso, 98 mapeia para 1998 aqui também
// data.setYear(98); // Dom Fev 01 1998 00:00:00 GMT+0000 (GMT)
// data.setFullYear(98); // Sab Fev 01 0098 00:00:00 GMT+0000 (BST)

// // usando objetos Date
// var inicio = Date.now();

// // o evento para o tempo vai aqui:
// facaAlgoPorUmLongoTempo();
// var fim = Date.now();
// var decorrido = fim - inicio; // tempo decorrido em milisegundos

// // utilizando métodos embutidos
// var inicio = new Date();

// // o evento para o tempo vai aqui:
// facaAlgoPorUmLongoTempo();
// var fim = new Date();
// var decorrido = fim.getTime() - inicio.getTime(); // tempo decorrido em milisegundos

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
} // Adiona zero a esquerda em números menores que 10.

function formataData(data) {
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth());
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  const seg = zeroAEsquerda(data.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);

// toLocaleDateString()
// Projeto simples, sem dependências	Intl.DateTimeFormat
// App moderno, SPA com React/Angular	Day.js
// Projeto mais robusto ou Node backend	date-fns
