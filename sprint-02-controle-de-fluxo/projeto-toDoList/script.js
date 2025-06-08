const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

function criaLi() {
  const li = document.createElement("li");
  return li;
}

//Função para enviar terefa com tecla enter
inputTarefa.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return; //Não há returno se o input estiver vazio
    criaTarefa(inputTarefa.value);
  }
}); //Escuta quando uma tecla é pressionada.

//Função para limpar input
function limpaInput() {
  inputTarefa.value = "";
  inputTarefa.focus(); //manter o cursor no input
}

//Função que cria botão apagar junto com a tarefa
function criaBotaoApagar(li) {
  li.innerText += " "; //Espaço entre botão e tarefa
  const botaoApagar = document.createElement("button");
  botaoApagar.innerText = "Apagar";
  botaoApagar.setAttribute("class", "apagar"); //cria classe no botão, com o nome apagar
  botaoApagar.setAttribute("title", "Apagar essa tarefa"); //cria esse title quando ocorrer um hover
  li.appendChild(botaoApagar); //cria botão com o texto "Apagar"
}

function criaTarefa(textoInput) {
  const li = criaLi();
  li.innerText = textoInput;
  tarefas.appendChild(li);
  limpaInput();
  criaBotaoApagar(li);
}

btnTarefa.addEventListener("click", function (e) {
  if (!inputTarefa.value) return; //Não há returno se o input estiver vazio
  criaTarefa(inputTarefa.value);
});

//Remover tarefas
document.addEventListener("click", function (e) {
  const el = e.target;
  if (el.classList.contains("apagar")) {
    el.parentElement.remove();
  }
});
