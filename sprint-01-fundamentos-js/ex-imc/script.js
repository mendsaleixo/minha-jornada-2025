//função para receber

const name = document.getElementById(name);
const lastname = "lAleixo";
const weight = 78;
const height = 1.67;
const result = function (a, b) {
  return a / (b * b);
};
const calc = result(weight, height);
console.log(calc.toFixed());
