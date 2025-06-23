function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject("CAI NO ERRO");
        return;
      }
      resolve(msg.toUpperCase() + " - Passei pela promise");
    }, tempo);
  });
}

//Uso convencional da promise:
// esperaAi("Fase 1", rand(1, 3))
//   .then((valor) => {
//     console.log(valor);
//     return esperaAi("Fase 2", rand(1, 3));
//   })
//   .then((fase) => {
//     console.log(fase);
//     return esperaAi("Fase 3", rand(1, 3));
//   })
//   .then((fase) => {
//     console.log(fase);
//   })
//   .then((fase) => {
//     console.log("Terminamos na fase: ", fase);
//   })
//   .catch((e) => console.log(e));

//Com Async Await - Permite usar as promises de uma forma mais simples, parecida com a programação sincrona.
// async function executa() {
//   const fase1 = await esperaAi("Fase 1", rand(1,3));
//   console.log(fase1);
//   const fase2 = await esperaAi("Fase 2", rand(1,3));
//   console.log(fase2);
//   const fase3 = await esperaAi("Fase 3", rand(1,3));
//   console.log(fase3);
//   console.log("Terminamos na fase: ", fase3);
// }
// executa();

//Tratando erros:
async function executa() {
  try {
    const fase1 = await esperaAi("Fase 1", rand(1, 3));
    console.log(fase1);
    const fase2 = await esperaAi("Fase 2", rand(1, 3));
    console.log(fase2);
    const fase3 = await esperaAi("Fase 3", rand(1, 3));
    console.log(fase3);
    console.log("Terminamos na fase: ", fase3);
  } catch (e) {
    console.log(e); // Chama o reject
  }
}
executa();

//Estados da promise:
//pending -> Pendente (quando o valor dela é chamado sem está resolvida)
//fullfil -> Resolvida
//rejected -> Rejeitada - erro