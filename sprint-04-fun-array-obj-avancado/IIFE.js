// IIFE - Immediately invoked function expression
//Criada para não sair para o escopo global

(function (
  idade,
  peso,
  altura //pode receber parâmetros
) {
  const sobreNome = "Aleixo";
  function criaNome(nome) {
    return nome + " " + sobreNome;
  }
  function falaNome() {
    console.log(criaNome("Mends"));
  }
  falaNome();
  console.log(idade, peso, altura);
})(43, 76, 1.67); //argumentos

const nome = "Outro nome";
