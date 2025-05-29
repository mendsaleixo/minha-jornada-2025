const name = document.getElementById("name").value;
const lastname = document.getElementById("lastname").value;
const weight = Number(document.getElementById("weight").value);
const height = Number(document.getElementById("height").value);

const calc = (a, b) => a / (b * b);
const IMC = calc(weight, height);
const result = IMC.toFixed(2);
