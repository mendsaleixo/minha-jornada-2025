/**1 - Escreva uma função que recebe 2 números e retorna o maior deles.
 */
// const maior = function(num1, num2){
//   let result = 0
//   if (num1 > num2) {
//     result = num1
//   } else {
//     result = num2
//   }
//   return console.log(result)
// }
// maior(9,13)

//Forma mais performática:
const maior = (num1, num2) => console.log(num1 > num2 ? num1 : num2);

maior(9, 13);

/**2 - Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number).
Retorne true se a imagem estiver no modo paisagem 
*/
const ePaisagem = (largura, altura) => largura > altura;

console.log(ePaisagem(1920, 1080)); // true
console.log(ePaisagem(800, 1200)); // false

/**
 Escreva uma função que recebe um número e retorne o seguinte:
 Número é divisivel por 3 = Fizz
 Número é divisivel por 5 = Buzz
 Número é divisivel por 3 e 5 = FizzBuzz
 Número não é divisível por 3 e 5 = Retorna o próprio número
 Use na função números de 0 a 100
 */
//número aleatório
function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

const min = 0;
const max = 100;

for (let i = 0; i < 10; i++) {
  const numero = random(min, max);

  if (numero % 3 === 0 && numero % 5 === 0) {
    console.log(`FizzBuzz`);
  } else if (numero % 3 === 0) {
    console.log(`Fizz`);
  } else if (numero % 5 === 0) {
    console.log(`Buzz`);
  } else {
    console.log(numero);
  }
}