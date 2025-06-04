/**For Clássico */
//Geralmente utilizado com iteráveis
// const frutas = ["pera", "maça", "uva"];

// for (let i = 0; i < frutas.length; i++) {
//   console.log(frutas[i]);
// }

/**For in*/
//Retorna o indice ou chaves (arrays ou objetos)
// for (let i in frutas) {
//   console.log(frutas[i]);
// } //retorna indices ou chaves

// const pessoa = {
//   nome: "mends",
//   sobrenome: "aleixo",
//   idade: 43,
// };
// for (let keys in pessoa) {
//   console.log(keys)
// }
// for (let chave in pessoa) {
//   console.log(chave, pessoa[chave]);
// }

/**For of */
//Retorna valores
const nome = "Mendelson Aleixo";
for (let valor of nome) {
  console.log(valor);
} //retorna o valor
