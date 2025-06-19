function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  estoque = estoque;
  console.log(estoque); //vai exibir 10, ou seja, o valor de estoquye está privado.
  //método
  this.mostraPreco = function () {
    return console.log(this.preco);
  };
}

const p1 = new Produto("camisa", 40, 10);
console.log(p1); //não vai exibir estoque por estar privado.
