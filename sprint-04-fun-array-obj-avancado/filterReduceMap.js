// Retorne a soma do dobro de todos os pares
// Filtrar pares
// Dobrar valores
// Reduzir (somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const pares = numeros.filter((valor) => {
//   if (valor % 2 === 0) return valor;
// });

// const dobro = pares.map((valor) => valor * 2);

// const somaTudo = dobro.reduce((acumulador, valor) => {
//   return (acumulador += valor);
// }, 0);
// console.log(somaTudo);

const somaDobroPares = numeros.filter((valor) => {
  if (valor % 2 === 0) return valor;
}).map((valor) => valor * 2).reduce((acumulador, valor) => {
  return (acumulador += valor);
}, 0);
console.log(somaDobroPares);
