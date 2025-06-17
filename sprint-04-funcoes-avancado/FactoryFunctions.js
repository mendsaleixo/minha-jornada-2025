//Factory Function
// function criaPessoa(nome, sobrenome) {
//   return {
//     nome,
//     sobrenome,
//     falaAlgo(mensagem){
//       return `${this.nome} ${this.sobrenome} está dizendo ${mensagem}`
//     }
//   };
// }

// const p1 = criaPessoa("mends", "aleixo");
// console.log(p1);
// console.log(p1.falaAlgo("olá, mundo!"))

function criaPessoa(nome, sobrenome, peso, altura) {
  return {
    nome,
    sobrenome,
    falaAlgo(mensagem) {
      return `${this.nome} ${this.sobrenome} está dizendo ${mensagem}`;
    },
    peso,
    altura,
    get imc() {
      //o get faz a função se comportar como um atributo (Getter)
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
}

const p1 = criaPessoa("mends", "aleixo", 76, 1.67);
// console.log( p1.imc());//sem getter é uma função
console.log(p1.imc)//está sem () pq é entendido como atributo devido ao get. 
console.log(p1.falaAlgo("olá, mundo!"));
