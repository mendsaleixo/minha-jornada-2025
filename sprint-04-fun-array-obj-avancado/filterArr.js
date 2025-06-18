/*
 *Filter(valor, indice, array) - Ou seja, podemos utilizar o valor, o indice ou o array inteiro.
 *Utilizamos callback para criar condição de filtragem. Se aquela condição for atendida (true) o valor é incluído no novo array (filtrado).
 *Retorna um array com a mesma quantidade de elementos do original ou menos.
 */
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

/*   função retorna maior que 10
function callbackFilter(valor) {
  return valor > 10;
}
  const numerosFiltrados = numeros.filter(callbackFilter);
*/
const numerosFiltrados = numeros.filter((valor) => valor > 10);
console.log(numerosFiltrados);

const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Letícia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

const pessoasComNomeGrande = pessoas.filter((valor) => valor.nome.length > 5);
console.log(pessoasComNomeGrande);
const pessoasAcimaCinquenta= pessoas.filter((valor) => valor.idade > 50);
console.log(pessoasAcimaCinquenta);
