const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

function criaLi() {
  const li = document.createElement("li");
  return li;
}

inputTarefa.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
});

//Função para limpar input
function limpaInput() {
  inputTarefa.value = "";
  inputTarefa.focus();
}

//Função que cria botão apagar junto com a tarefa
function criaBotaoApagar(li) {
  li.innerText += " "; //Espaço entre botão e tarefa
  const botaoApagar = document.createElement("button");
  botaoApagar.innerText = "Apagar";
  botaoApagar.setAttribute("class", "apagar");
  botaoApagar.setAttribute("title", "Apagar essa tarefa");
  li.appendChild(botaoApagar);
}

function criaTarefa(textoInput) {
  const li = criaLi();
  li.innerText = textoInput;
  tarefas.appendChild(li);
  limpaInput();
  criaBotaoApagar(li);
  salvarTarefas();
}

btnTarefa.addEventListener("click", function (e) {
  if (!inputTarefa.value) return; 
  criaTarefa(inputTarefa.value);
});

//Remover tarefas
document.addEventListener("click", function (e) {
  const el = e.target;
  if (el.classList.contains("apagar")) {
    el.parentElement.remove();
    salvarTarefas();
  }
});

function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll("li"); // Pega os li de dentro da ul tarefas.
  const listaDeTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace("Apagar", "").trim(); //remover o texto apagar, trim remove espaço em branco.
    listaDeTarefas.push(tarefaTexto);
  }
  const tarefasJSON = JSON.stringify(listaDeTarefas); //grava o array tarefas em um arquivo json de texto
  localStorage.setItem("tarefa", tarefasJSON);
}

//Função para obter tarefas do local storage
function adicionaTarefasSalvas() {
  const tarefas = localStorage.getItem("tarefa");
  const listaDeTarefas = JSON.parse(tarefas);
  for (let tarefa of listaDeTarefas) {
    criaTarefa(tarefa);
  }
}
adicionaTarefasSalvas();
