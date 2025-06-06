function timer() {
  let seg = 0;
  while (seg <= 61) {
    console.log(seg);
    seg++;
  }
  if (seg > 60) {
    seg = 0;
    console.log(seg);
  }
}
const timer = setInterval(function () {
  console.log(timer());
}, 1000);