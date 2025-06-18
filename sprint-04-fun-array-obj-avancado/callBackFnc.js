/*São funções muito utilizadas em situações que precisamos garantir uma ordem de execussão de funções, por exemplo em consumo de banco de dados ou APIs. Situação comum no desenvolvimento web.*/

//Função que chama as outras em ordem aleatória:
function rand(min = 1000, max = 3000) {
  const num = Math.random() * (max - min) + min;
  return Math.floor(num);
}

/* Abaixo eu tenho 3 funções que preciso que sejam executadas nessa ordem, porém vão ser chamadas em ordem aleatória */
function f1(callback) {
  setTimeout(function () {
    console.log("f1");
    if (callback) callback(); //se houver uma callback, executa a callback
  }, rand());
}

function f2(callback) {
  setTimeout(function () {
    console.log("f2");
    if (callback) callback();
  }, rand());
}

function f3(callback) {
  setTimeout(function () {
    console.log("f3");
    if (callback) callback();
  }, rand());
}

//Se eu quiser garantira ordem de execussão:
// f1(function () {
//   f2(function () {
//     f3(function () {
//       console.log("Ola, mundo!");
//     });
//   });
// });
//callbackHell - Várias callbacks chamando outras (fica confuso)

/**Evitando CallBack Hell */
f1(f1CallBack);

function f1CallBack() {
  f2(f2CallBack);
}

function f2CallBack() {
  f3(f3CallBack);
}

function f3CallBack() {
  console.log("Olá, mundo!");
}
