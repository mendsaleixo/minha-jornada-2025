/*
 * Map - Altera os valores do array (Logo o novo array é do tamanho do original)
 * Também recebe como parâmetro o valor, indice e array.
 * Executa uma ação em todos os valores do Array
 *
 */
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map((valor) => valor * 2);
// valor aqui é igual a objeto
console.log(numerosEmDobro);

const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Letícia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

const nomes = pessoas.map((valor) => valor.nome);
const idades = pessoas.map((valor) => ({ idade: valor.idade }));
console.log(nomes);
console.log(idades);

//Adicionar ids no objeto pessoas:
const comIds = pessoas.map((valor, indice) => {
  const newObj = { ...valor }; //necessário criar um novo objeto para não alterar o original.
  newObj.id = indice + 1;
  return newObj;
});
console.log(comIds);
