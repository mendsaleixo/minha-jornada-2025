/*Atribuir uma variável para cada indice de um Array*/
// let a = "A";
// let b = "B";
// let c = "C";

// const numeros = [1, 2, 3];
// [a, b, c] = numeros; //desestruturação, um valor pra cada indice.
// console.log(a, b, c);


/*REST OPERATOR*/
//               0  1  2  3  4  5  6  7  8
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [primeiro, segundo, terceiro, ...resto] = numeros; //resto é o nome da variável que pegarṕa o resto.
console.log(primeiro, segundo, terceiro); //são pegos como const
console.log(resto); //pegos como array

//valores vazios
