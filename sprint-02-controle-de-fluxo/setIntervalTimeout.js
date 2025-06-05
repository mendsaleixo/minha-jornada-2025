function mostraHora() {
  let data = new Date();
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
  });
}

/*
//Forma classica:
function setHora() {
  console.log(mostraHora());
}

setInterval - faz uma ação de tempos em tempos

setInterval(setHora, 1000); //Executa a função que mostra no console a hora a cada 1000 milissegundos.
*/

//Com função Anônima:
// Armazena o ID do intervalo em uma variável
// Armazena o ID do intervalo em uma variável
const timer = setInterval(function () {
  console.log(mostraHora());
}, 1000);

// Usa a variável para cancelar o intervalo depois de 3 segundos
setTimeout(function () {
  clearInterval(timer);
}, 3000);

setTimeout(function () {
  console.log("Parou o relógio.");
}, 5000); //executa uma vez após um tempo definido
