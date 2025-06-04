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
// const nome = "Mendelson Aleixo";
// for (let valor of nome) {
//   console.log(valor);
// } //retorna o valor

/**While e Do While*/
//Enquanto a condição for verdadeira, faça
// let i = 0;

// while (i <= 10) {
//   console.log(i)
//   i++
// }

//número aleatório
function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r); //arredonda pra baixo com o floor
}

const min = 1;
const max = 50;
let rand = random(min, max);

while (rand !== 10) {
  rand = random(min, max);
  console.log(rand);
}

/**Do While */
//faça primeiro algo e depois verifique a condição
do {
  rand = random(min, max);
  console.log(rand);
} while (rand !== 10);

/**Break Continue*/
