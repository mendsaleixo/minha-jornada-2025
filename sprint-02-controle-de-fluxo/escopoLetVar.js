const verdadeira = true;

let nome = "Mends"; //criando um let
var nome2 = "Aleixo";
//let nome = "Silva" //Erro - não permite sobrescrever
//var nome2 = "Silva";//sobrescreve o var

//Let tem escopo de bloco { ...bloco}
//Var tem escopo de função

if (verdadeira) {
  let nome = "Silva"; //criando no bloco, != de reatribuir.
  var nome2 = "Sobrenome fora"
  console.log(nome, nome2); //Silva Aleixo
  if (verdadeira) {
    let nome = "Outra coisa";
    var nome2 = "Sobrenome dentro";
    console.log(nome, nome2);
  }
}
console.log(nome, nome2); //Mends Aleixo
//O let vai dar prefência para o escopo em que for chamado, caso não encontre, vai para o escopo acima (escopo de bloco do let).
//O var vai redeclarar, então ele expressa a ultima atribuição
