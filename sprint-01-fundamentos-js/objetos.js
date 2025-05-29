//Objetos básico

//Métodos - Usando métodos com valores do objeto (this)
const pessoa1 = {
  nome: "Mendelson",
  sobreNome: "Aleixo",
  idade: 42,
  fala() {
    console.log(`${this.nome} ${this.sobreNome} está dando oi... Ele tem ${this.idade} anos.`);
  },
};

console.log(pessoa1.fala());


//Métodos - Funções dentro de objetos
// const pessoa1 = {
//   nome: "Mendelson",
//   sobreNome: "Aleixo",
//   idade: 42,
//   fala() {
//     console.log("Olá, mundo!");
//   },
// };

// console.log(pessoa1.nome);
// console.log(pessoa1.fala());

//Criando objetos com funções (factory - função que cria objetos)
//Quando o nome da chave é o mesmo do parâmetro, o js entende e não precisa repetir:
// function criaPessoa(nome, sobrenome, idade) {
//   return { nome, sobrenome, idade,};
// }
// const pessoa1 = criaPessoa("Mendelson", "Aleixo", 42);
// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);

//forma classica
// function criaPessoa(nome, sobrenome, idade) {
//   return {
//     nome: nome,
//     sobrenome: sobrenome,
//     idade: idade,
//   };
// }

// const pessoa1 = criaPessoa("Mendelson", "Aleixo", 42);
// const pessoa2 = criaPessoa("Carlos", "Alberto", 40);
// const pessoa3 = criaPessoa("Tiago", "Marques", 35);
// const pessoa4 = criaPessoa("Felipe", "Augusto", 26);
// const pessoa5 = criaPessoa("Renato", "Vieira", 41);
// const pessoa6 = criaPessoa("Alisson", "Santos", 42);
// console.log(pessoa1, pessoa2, pessoa3, pessoa4, pessoa5, pessoa6);
// console.log(pessoa4.idade, pessoa2.nome)

//Criando e acessando - classico
// const pessoa1 = {
//   nome: "Mendelson",
//   sobreNome: "Aleixo",
//   idade: 42,
// };

// console.log(pessoa1.nome)
// console.log(pessoa1.sobreNome)
