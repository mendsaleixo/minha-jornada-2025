// IIFE - Immediately invoked function expression
//Criada para não sair para o escopo global

(function () {
  const sobreNome = "Aleixo";
  function criaNome(nome) {
    return nome + " " + sobreNome;
  }
  function falaNome() {
    console.log(criaNome("Mends"));
  }
  falaNome();
})();

const nome = "Aleixo";
