//Função que retorna função anônima
function retornaFuncao() {
  const nome = "Mends";
  return function () {
    return nome;
  };
}
//a função anônima acima tem acesso a 3 escopos, o dela,o da função pai (acima), e do escopo global.

const funcao = retornaFuncao();
//closure é a habilidade da funcão em acessar seu escopo lexico (acessar a variável nome fora dela), fechar o escopo.
