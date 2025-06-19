/**
 * Reduce - Reduz o array a um único elemento (um unico valor).
 * Possui como parâmetro um (acumulador, valor, indice, array) e um valor inicial:
 * reduce((acumulador, valor, indice, array), 0)
 */

// Reduce como filter
// const pares = numeros.reduce(function (acumulador, valor) {
//   if (valor % 2 === 0) acumulador.push(valor);
//   return acumulador;
// }, []);
// console.log(pares);

// Reduce como map
// const dobro = numeros.reduce(function (acumulador, valor) {
//   acumulador.push(valor * 2);
//   return acumulador;
// }, []);
// console.log(dobro);

//Reduce - Soma tudo
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const somaTudo = numeros.reduce((acumulador, valor) => {
  acumulador += valor;
  return acumulador;
}, 0);
console.log(somaTudo);

//Reduce - Somar todos os pares
const somaPar = numeros.reduce(function (acumulador, valor) {
  if (valor % 2 === 0) {
    acumulador += valor;
  }
  return acumulador;
}, 0);
console.log(somaPar);

//Retornar a pessoa mais velha:
const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Letícia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];
const maisVelha = pessoas.reduce(function (acumulador, valor) {
  if (acumulador.idade > valor.idade) return acumulador;
  return valor;
}, 0);
console.log(maisVelha)
