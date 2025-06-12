const inputTarefa = document.querySelector(".input-tarefa"); // Seleciona o elemento HTML com a classe 'input-tarefa' e armazena na variável inputTarefa
const btnTarefa = document.querySelector(".btn-tarefa"); // Seleciona o elemento HTML com a classe 'btn-tarefa' e armazena na variável btnTarefa
const tarefas = document.querySelector(".tarefas"); // Seleciona o elemento HTML com a classe 'tarefas' (ul) e armazena na variável tarefas

// Função que cria e retorna um elemento <li>
function criaLi() {
  const li = document.createElement("li"); // Cria um elemento HTML <li>
  return li; // Retorna o elemento criado
}

// Adiciona evento para enviar tarefa ao pressionar a tecla Enter no input
inputTarefa.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) { // Verifica se a tecla pressionada é a Enter (código 13)
    if (!inputTarefa.value) return; // Se o input estiver vazio, não faz nada
    criaTarefa(inputTarefa.value); // Chama a função criaTarefa passando o valor digitado no input
  }
});

// Função para limpar o input após adicionar a tarefa
function limpaInput() {
  inputTarefa.value = ""; // Limpa o conteúdo do input
  inputTarefa.focus(); // Mantém o cursor ativo no input
}

// Função que cria e adiciona o botão "Apagar" em cada tarefa
function criaBotaoApagar(li) {
  li.innerText += " "; // Adiciona um espaço entre o texto da tarefa e o botão
  const botaoApagar = document.createElement("button"); // Cria o elemento <button>
  botaoApagar.innerText = "Apagar"; // Define o texto do botão como "Apagar"
  botaoApagar.setAttribute("class", "apagar"); // Adiciona a classe "apagar" ao botão
  botaoApagar.setAttribute("title", "Apagar essa tarefa"); // Define o título (tooltip) do botão
  li.appendChild(botaoApagar); // Adiciona o botão como filho da <li>
}

// Função que cria a tarefa, adiciona à lista e executa as funções auxiliares
function criaTarefa(textoInput) {
  const li = criaLi(); // Cria um novo elemento <li>
  li.innerText = textoInput; // Define o texto da tarefa no <li>
  tarefas.appendChild(li); // Adiciona o <li> na <ul> com a classe 'tarefas'
  limpaInput(); // Limpa o input e mantém o foco
  criaBotaoApagar(li); // Adiciona o botão "Apagar" à tarefa
  salvarTarefas(); // Salva a lista de tarefas atual no localStorage
}

// Adiciona tarefa ao clicar no botão "Adicionar Tarefa"
btnTarefa.addEventListener("click", function (e) {
  if (!inputTarefa.value) return; // Se o input estiver vazio, não faz nada
  criaTarefa(inputTarefa.value); // Chama a função criaTarefa passando o valor digitado no input
});

// Evento para apagar tarefas ao clicar no botão "Apagar"
document.addEventListener("click", function (e) {
  const el = e.target; // Captura o elemento clicado
  if (el.classList.contains("apagar")) { // Verifica se o elemento possui a classe "apagar"
    el.parentElement.remove(); // Remove o elemento pai (a <li> correspondente)
    salvarTarefas(); // Atualiza a lista de tarefas salva no localStorage
  }
});

// Função para salvar as tarefas no localStorage
function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll("li"); // Seleciona todos os <li> dentro da <ul> .tarefas
  const listaDeTarefas = []; // Inicializa array para armazenar as tarefas

  for (let tarefa of liTarefas) { // Itera sobre cada <li> da lista
    let tarefaTexto = tarefa.innerText; // Obtém o texto da tarefa
    tarefaTexto = tarefaTexto.replace("Apagar", "").trim(); // Remove o texto "Apagar" e os espaços extras
    listaDeTarefas.push(tarefaTexto); // Adiciona o texto limpo ao array listaDeTarefas
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas); // Converte o array para JSON (string)
  localStorage.setItem("tarefa", tarefasJSON); // Salva a string JSON no localStorage com a chave 'tarefa'
}

// Função para carregar e exibir as tarefas salvas do localStorage
function adicionaTarefasSalvas() {
  const tarefas = localStorage.getItem("tarefa"); // Recupera as tarefas salvas no localStorage
  const listaDeTarefas = JSON.parse(tarefas); // Converte a string JSON de volta para array

  for (let tarefa of listaDeTarefas) { // Itera sobre cada tarefa salva
    criaTarefa(tarefa); // Cria e adiciona a tarefa na tela
  }
}

// Chama a função para carregar as tarefas salvas quando a página é carregada
adicionaTarefasSalvas();
