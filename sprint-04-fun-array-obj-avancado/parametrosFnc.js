//Argumentos - quando se usa a palavra function, funciona assim:
function funcao() {
  console.log(arguments); //guarda os argumentos passados
  console.log(arguments[0]); //acessa os argumentos por indice
}
funcao("valor", 1, 2, 3, 4, 5, 6, "outro valor"); //esses valores estão indo pra um objeto arguments quando se usa a palavra function.

function funcao1(a, b = 2) {
  //passando um valor padrão
  console.log(a + b);
}
funcao1(2); // apenas um argumento, pega o default (tem que entender como undefined)
funcao1(2, 6); // dois argumentos substitui o default

//Recebendo objetos como argumentos (por desestruturação)
function funcao2({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade);
}

funcao2({ nome: "Luiz", sobrenome: "Otávio", idade: 20 });
//ou
const obj = { nome: "Mendelson", sobrenome: "Aleixo", idade: 43 };
funcao2(obj);

function conta(operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    if (operador === "+") acumulador += numero;
    if (operador === "-") acumulador -= numero;
    if (operador === "/") acumulador /= numero;
    if (operador === "*") acumulador *= numero;
  }
  console.log(acumulador);
}

conta("*", 0, 10, 20, 30, 40);
