//Função Construtora - Retorna objetos (como as factorys)
//Construtora começa com letra maiúscula -> Pessoa (new)
//Menos codigo, não preciso de return

function Pessoa(nome, sobrenome) {
  //Privados (sem o this)
  const ID = 282828;
  const metodoInterno = function () {};

  //Publicos
  //atributos
  this.nome = nome; //cria a chave do objeto, recebendo o valor pelo parâmetro
  this.sobrenome = sobrenome;

  //metodos
  this.falaOi = function () {
    console.log(this.nome + "Fala oi!");
  };
}

const p1 = new Pessoa("Mends", "Aleixo");
const p2 = new Pessoa("Luana", "Tocchio");

console.log(p1.nome, p2.nome);
