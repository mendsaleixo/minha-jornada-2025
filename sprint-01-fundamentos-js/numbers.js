const nome = "Mendelson";
const hora = new Date();

console.log(
  `Meu nome é ${nome} e estou aprendendo JavaScript agora às ${hora.getHours()} horas e ${hora.getMinutes()} minutos.`
);

const num1 = Number(prompt("Digite um número"));
const num2 = Number(prompt("Digite outro número"));

const result = num1 + num2

alert(`O resultado da soma é ${result}.`);