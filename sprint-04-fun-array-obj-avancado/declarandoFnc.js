//Declarando funções (Function hoisting)
//falaOi()//hoisting - elevação das declarações de funções e dos var pro topo do script.
function falaOi() {
  console.log("Oi");
}
//falaOi();

//First-class objects - Pode ser tratada como dado.
//Function expression:
const souUmDado = function () {
  console.log("Sou um dado.");
};
//souUmDado();

function executaFuncao(funcao) {
  //espera uma função como parâmetro
  console.log("Vou executar sua função abaixo.");
  funcao(); //executa a função recebida
}
//executaFuncao(falaOi);

//Arrow functions
const funcaoArrow = () => {
  console.log("Sou uma arrow function");
};
funcaoArrow();

//Dentro de objeto
const obj = {
  nome: "mendelson",
  idade: 43,
  falar() {
    console.log("Estou falando...");
  },
};
obj.falar();
