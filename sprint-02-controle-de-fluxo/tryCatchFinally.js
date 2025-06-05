try {
  // Tenta executar este bloco externo. Se ocorrer erro, para aqui e vai para o catch externo.
  console.log("Abri um arquivo");
  console.log("Manipulei o arquivo sem erro");

  //console.log(a); // Se essa linha for ativada, pularia direto para o catch externo.

  console.log("Fechei o arquivo");

  // Início de um bloco try interno (aninhado)
  try {
    console.log(b); // Como 'b' não foi declarada, gera erro aqui.
    console.log("Ação no bloco interno");
  } catch (e) {
    // Executado quando há erro no try interno
    console.log("Deu erro no bloco interno.");
  } finally {
    // Executado sempre após o try interno, tendo erro ou não.
    console.log("Sou finally do bloco interno.");
  }
} catch (e) {
  // Executado quando há erro no try externo
  console.log("Tratando o erro no bloco externo.");
} finally {
  // Executado sempre após o try externo, tendo erro ou não.
  // Ideal para limpar recursos, fechar conexões, encerrar processos etc.
  console.log("Sou finally do bloco externo.");
}


/**Exemplo */
function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError("Esperando instancia de Date.");
  }
  if (!data) {
    data = new Date();
  }
  return data.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}
try {
const data = new Date("01-01-1970 12:58:12");
const hora = retornaHora();
console.log(hora);
} catch (e) {
  //tratar erro
  //console.log(e)
} finally {
  console.log("Tenha um bom dia.")
}

