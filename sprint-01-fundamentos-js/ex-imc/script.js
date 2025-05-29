//função para receber

const name = "mends"; //document.getElementById("name");
const lastname = "Aleixo"; //document.getElementById("lastname");
const weight = 78; //Number(document.getElementById("weight".value));
const height = 1.67; //Number(document.getElementById("height".value));
const calc = (a, b) => a / (b * b);
const result = calc(weight, height);
console.log(result.toFixed(2));
