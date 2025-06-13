//Retorno de funções

// return - Retorna um valor e termina uma função

// function soma(a, b) {
//   return a + b;
// }

// console.log(soma(5, 2));//retorna o valor 7 (pode ser armazenado)

// function soma(a, b) {
//   console.log(a + b);
// }
// soma(2, 5)
//exibe 7 mas não retorna valor. (alert é um tipo de função que não retorna valor)

//returnando estrutura de dados
// function criaPessoa(nome, sobrenome) {
//   return { nome, sobrenome };
// }

// const p1 = criaPessoa("Luiz", "Otávio"); //cria o objeto: {nome:"Luiz", sobrenome:"Otávio"}
// //Mesma coisa de criar assim:
// const p2 = {
//   nome: "Mendelson",
//   sobrenome: "Aleixo",
// };
// console.log(p1, p2);

function criaMultiplicador(multiplicador) {
  return function (n) {
    return n * multiplicador;
  };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadruplica(2));
