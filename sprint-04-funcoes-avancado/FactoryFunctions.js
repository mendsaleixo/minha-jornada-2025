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
    //Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
    //Setter - Permite receber valores e setar dentro da função/atributo nomeCompleto com valores que vem de fora da factory.
    set nomeCompleto(valor) {
      valor = valor.split(" "); //transforma o valor recebido pelo setter num array.
      this.nome = valor.shift(); //pega o primeiro item do array e joga no atributo nome.
      this.sobrenome = valor.join(" "); //pega os demais itens do array e joga no atributo sobrenome
      console.log(valor);
    },

    falaAlgo(mensagem = "olá") {
      //olá é valor padrão
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


// console.log( p1.imc());//sem getter é uma função
//console.log(p1.imc); //está sem () pq é entendido como atributo devido ao get.
//console.log(p1.falaAlgo("olá, mundo!"));
//p1.nomeCompleto = "Luana Jaime Tocchio"; //manda essa valor pro setter e retorna pelo console.log de lá.
// console.log(p1.nomeCompleto);
// console.log(p1.nome);
// console.log(p1.sobrenome);
// console.log(p1.falaAlgo());

const p1 = criaPessoa("Mends", "Aleixo", 76, 1.67);
const p2 = criaPessoa("Luana", "Tocchio", 64, 1.67);
const p3 = criaPessoa("Caio", "Tocchio", 35, 1.28);
const p4 = criaPessoa("mends", "aleixo", 28, 1.18);

console.log(p1.imc)
console.log(p2.imc)
console.log(p3.imc)
console.log(p4.imc)