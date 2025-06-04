const paragrafos = document.querySelector(".paragrafos");
const pElement = document.querySelectorAll("p");

const estiloBody = getComputedStyle(document.body);
const backgroundColorBody = estiloBody.backgroundColor;

for (let p of pElement) {
  p.style.backgroundColor = backgroundColorBody;
  p.style.color = "#FFF";
}
