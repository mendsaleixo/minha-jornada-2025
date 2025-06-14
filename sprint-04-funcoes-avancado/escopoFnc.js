//Escopo léxico - É a busca que a function faz nos escopos acima de onde a variável ou função é chamada caso nao a encontre em seu escopo.
const nome = "mends";

function falaOi() {
  //const nome = "Aleixo"
  console.log(`Oi, ${nome}!`);
}

//Com função
function usaFalaOi() {
  const nome = "Aleixo";
  falaOi();//A função vai procurar onde ela foi declarada, e depois seus vizinhos acima. Não usa o "Aleixo"
}
usaFalaOi();
