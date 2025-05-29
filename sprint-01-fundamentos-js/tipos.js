/*
Primitivos - string, number, boolean, undefined, null (bigint, symbol).
e valor por referência (Array e Object)
*/

//Atribuição em valores de referência
let a = [1, 2, 3];
let b = a;
console.log(a, b);

a.push(5)
console.log(a, b);//modifica a e b porque a referencia foi mantida.  

// //Sobre atribuições em pŕimitivos
// let a = "A";
// let b = a;
// console.log(a, b)
// a = 'outra coisa'
// console.log(a, b) //Leitura de cima pra baixo, a reatribuição de a não modifica b após a primeira atribuição por ser um valor primitivo.

// let nome = "Mendelson";
// nome = "Aleixo"; //reatribuição e não modificação
// console.log(nome);
// console.log(nome[0]);
// nome[0] = "R"; //valores primitivos são imutáveis
// console.log(nome[0]);
