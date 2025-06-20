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

esperaAi("Oi!", rand(1, 3));
esperaAi("Ola!", rand(1, 3));
esperaAi("Joia?", rand(1, 3));

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