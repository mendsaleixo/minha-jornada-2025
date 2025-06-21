function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}
/*
//Dessa forma a ordem de execussão é aleatória.
function esperaAi(msg, tempo) {
  setTimeout(() => {
    console.log(msg);
  }, tempo);
}

esperaAi("Frase1", rand(1, 3));
esperaAi("Frase2!", rand(1, 3));
esperaAi("Frase3", rand(1, 3));

*/

//Resolvendo com callback (método antigo)
/*
function esperaAi(msg, tempo, cb) {
  setTimeout(() => {
    console.log(msg);
    if (cb) cb();
  }, tempo);
}

esperaAi("Oi!", rand(1, 3), function () {
  esperaAi("Ola!", rand(1, 3), function () {
    esperaAi("Joia?", rand(1, 3));
  });
});

Problema de aninhar várias funções (árvore de natal)
*/

//Usando Promisse
function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject("BAD VALUE");

    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

esperaAi("Conectando com BD", rand(1, 3))
  .then((resposta) => {
    console.log(resposta);
    return esperaAi("Buscando dados da BASE", rand(1, 3));
  })
  .then((resposta) => {
    console.log(resposta);
    return esperaAi("Tratando os dados", rand(1, 3));
  })
  .then((resposta) => {
    console.log(resposta);
  })
  .then(() => {
    console.log("Exibindo dados na tela");
  })
  .catch((e) => {
    console.log("ERRO: ", e);
  });

console.log("Exibido antes das promises - Ex: Tela de loading");
