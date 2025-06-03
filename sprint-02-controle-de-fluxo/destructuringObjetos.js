const pessoa = {
  nome: "mends",
  sobrenome: "Aleixo",
  idade: 30,
  endereco: {
    rua: "Av Brasil",
    numero: 320,
  },
};
//const nome = pessoa.nome; //atribuição convencional
//const {nome} = pessoa //atribuição por desestruturação.
const { nome, sobrenome, idade, carro = "sandero" } = pessoa;

console.log(nome, sobrenome, idade);
console.log(pessoa);
console.log(carro); //foi criada um const carros no mesmo momento da atribuição.

const { name, ...resto } = pessoa; //Usando parâmento rest
console.log(resto)

