let segundos = 0;
let minutos = 0;
let horas = 0;
let timerId = null;

const display = document.querySelector("#timer");
const btnIniciar = document.querySelector("#start");
const btnPausar = document.querySelector("#pause");
const btnZerar = document.querySelector("#reset");

function atualizarDisplay() {
  const s = String(segundos).padStart(2, "0");
  const m = String(minutos).padStart(2, "0");
  const h = String(horas).padStart(2, "0");
  display.innerHTML = `${h}:${m}:${s}`;
}

function iniciarTimer() {
  if (timerId) return; // Evita múltiplos timers rodando ao mesmo tempo

  timerId = setInterval(() => {
    segundos++;

    if (segundos === 60) {
      segundos = 0;
      minutos++;
    }

    if (minutos === 60) {
      minutos = 0;
      horas++;
    }

    atualizarDisplay();
  }, 1000);
}

function pausarTimer() {
  clearInterval(timerId);
  timerId = null;
}

function resetarTimer() {
  clearInterval(timerId);
  timerId = null;
  segundos = 0;
  minutos = 0;
  horas = 0;
  atualizarDisplay();
}

// Eventos dos botões
btnIniciar.addEventListener("click", iniciarTimer);
btnPausar.addEventListener("click", pausarTimer);
btnZerar.addEventListener("click", resetarTimer);

// Exibir valor inicial no display
atualizarDisplay();
