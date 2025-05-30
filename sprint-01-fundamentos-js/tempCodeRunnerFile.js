function falaOi() {
  return "Oi!";
}

const chamaOi = false;

console.log(chamaOi && falaOi())
console.log(falaOi() && chamaOi)
console.log(chamaOi || falaOi())
console.log(falaOi() || chamaOi)

console.log(chamaOi && NaN)