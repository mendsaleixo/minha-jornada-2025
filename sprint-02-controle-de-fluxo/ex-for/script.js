const elementos = [
  { tag: "p", texto: "Frase 1" },
  { tag: "div", texto: "Frase 2" },
  { tag: "footer", texto: "Frase 3" },
  { tag: "section", texto: "Frase 4" },
];

const div = document.createElement("div"); // Cria a nova div
let conteudo = ""; // Cria uma variável para acumular o HTML

// Monta o HTML via template string
for (let i = 0; i < elementos.length; i++) {
  const { tag, texto } = elementos[i];
  conteudo += `<${tag}>${texto}</${tag}>`;
}

div.innerHTML = conteudo; // Adiciona o conteúdo na nova div

// Adiciona a nova div ao container
const container = document.querySelector(".container");
container.appendChild(div);

// resolução professor:
// const elementos = [
//   { tag: "p", texto: "Frase 1" },
//   { tag: "div", texto: "Frase 2" },
//   { tag: "footer", texto: "Frase 3" },
//   { tag: "section", texto: "Frase 4" },
// ];

// const div = document.createElement("div");

// elementos.forEach(({ tag, texto }) => {
//   const el = document.createElement(tag);
//   el.textContent = texto;
//   div.appendChild(el);
// });

// const container = document.querySelector(".container");
// container.appendChild(div);
