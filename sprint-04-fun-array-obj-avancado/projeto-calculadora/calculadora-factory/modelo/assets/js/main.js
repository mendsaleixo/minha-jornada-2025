function criaCalculadora() {
  return {
    display: document.querySelector(".display"),
    btnClear: document.querySelector(".btn-clear"),

    inicia() {
      this.cliqueBotoes(); //sempre que se referir a uma chave que está dentro do objeto, tem que usar o this.
      this.pressionaBackSpace();
      this.pressionaEnter();
    },

    pressionaBackSpace() {
      this.display.addEventListener("keydown", (e) => {
        if (e.keyCode === 8) {
          e.preventDefault();
          this.clearDisplay();
        }
      });
    },

    pressionaEnter() {
      this.display.addEventListener("keyup", (e) => {
        if (e.keyCode === 13) {
          this.realizaConta();
        }
      });
    },

    realizaConta() {
      let conta = this.display.value;

      try {
        conta = eval(conta);

        if (!conta) {
          alert("Conta inválida");
          return;
        }

        this.display.value = String(conta);
      } catch (e) {
        alert("Conta inválida");
        return;
      }
    },

    clearDisplay() {
      this.display.value = "";
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },

    cliqueBotoes() {
      document.addEventListener("click", (e) => {
        //arrow function permite "segurar" o this sem conflitar com o objeto document
        const el = e.target;
        if (el.classList.contains("btn-num")) {
          this.btnParaDisplay(el.innerText);
        }

        if (el.classList.contains("btn-clear")) {
          this.clearDisplay();
        }

        if (el.classList.contains("btn-del")) {
          this.apagaUm();
        }

        if (el.classList.contains("btn-eq")) {
          this.realizaConta();
        }

        this.display.focus();
      });
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    },
  };
}
const calculadora = criaCalculadora();
calculadora.inicia();
