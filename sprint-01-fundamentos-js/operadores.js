/* 
Operadores de comparação 
> maior que
>= maior ou igual a
< menor que
<= menor ou igual a
== igualdade (valor)
=== igualdade estrita (valor e tipo)
!= diferente (valor)
!== diferente estrito (valor e tipo)
*/

console.log(10 >= 5); //retorna um valor boleano

/*
Operadores Lógicos
&& -> AND -> E
|| -> OR -> OU
! -> NOT -> NÂO
*/

console.log(true && true); //true
console.log(true || false); //true
console.log(!false); //true

const usuario = "mends";
const senha = 123456;
const loginOK = usuario === "mends" && senha === 123456;
console.log(loginOK);

/* 
**Short Circuit (Curto circuito)
  && -> todas true = true // retorna o primeiro falsy ou se todas true o ultimo true;
  || -> todas false = false // para no primeiro truthy e retorna ele, se todas false retorna o ultimo falsy;
  ! -> inverte o valor 

**Valores FALSY
  false //valor literal
  0
  ' ', " ", ` ` //delimitadores vazios. 
  null / undefined
  NaN
*/

//

console.log("mends" && null); //retorna o primeiro false.
console.log(null && "Mends"); //retorna o primeiro false.
console.log("mends" && 24); //todos valores true, retorna o último true.

console.log(null || 0 || "mends"); //primeiro true
console.log("mends" || 0 || null); //primeiro true
console.log(null || false || 0); //ultimo falsy

/**Short circuit */
function falaOi() {
  return "Oi!";
}

const chamaOi = false;

console.log(chamaOi && falaOi())
console.log(falaOi() && chamaOi)
console.log(chamaOi || falaOi())
console.log(falaOi() || chamaOi)

console.log(chamaOi && NaN) //false
