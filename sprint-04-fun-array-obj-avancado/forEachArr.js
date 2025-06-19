//Forma mais performática de iteração
const a1 = [1, 2, 5, 33, 46, 12, 8];

//For of
// for (let valor of a1) {
//   console.log(valor);
// }

//Recebe valor, indice e array
/* 
const mostra = a1.forEach((valor, indice, array) => {
  console.log(valor, indice, array);
 });
console.log(mostra);
*/

let total = 0;
a1.forEach((valor) => {
  total += valor;
});
console.log(total)


