// Pega o elemento HTML que tem a classe 'input-tarefa' e guarda na variável inputTarefa
const inputTarefa = document.querySelector(".input-tarefa");
// Pega o elemento HTML que tem a classe 'btn-tarefa' e guarda na variável btnTarefa
const btnTarefa = document.querySelector(".btn-tarefa");
// Pega o elemento HTML que tem a classe 'tarefas' e guarda na variável tarefas
const tarefas = document.querySelector(".tarefas");

//Cria função para inserir as tarefas como elementos html (li) dentro da lista (ul) do html. Retorna uma lista (li)
function criaLi() {
  const li = document.createElement("li");
  return li;
}

//Função para enviar terefa com tecla enter
//Escuta quando uma tecla é pressionada e joga essa ação na const inputTarefa
inputTarefa.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return; //Não há returno se o input estiver vazio
    criaTarefa(inputTarefa.value);
  }
}); 

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
  salvarTarefas();
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
