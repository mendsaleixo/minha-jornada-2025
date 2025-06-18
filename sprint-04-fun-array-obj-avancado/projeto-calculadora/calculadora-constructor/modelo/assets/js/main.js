function Calculadora() {
  (this.display = document.querySelector(".display")),
    (this.btnClear = document.querySelector(".btn-clear")),
    (this.inicia = function () {
      this.cliqueBotoes(); //sempre que se referir a uma chave que está dentro do objeto, tem que usar o this.
      this.pressionaBackSpace();
      this.pressionaEnter();
    });

  this.pressionaBackSpace = function () {
    this.display.addEventListener("keydown", (e) => {
      if (e.keyCode === 8) {
        e.preventDefault();
        this.clearDisplay();
      }
    });
  };

  this.pressionaEnter = function () {
    this.display.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        this.realizaConta();
      }
    });
  };

  this.realizaConta = function () {
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
  };

  this.clearDisplay = function () {
    this.display.value = "";
  };

  this.apagaUm = function () {
    this.display.value = this.display.value.slice(0, -1);
  };

  (this.cliqueBotoes = function () {
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
  }),
    (this.btnParaDisplay = function (valor) {
      this.display.value += valor;
    });
}

const calculadora = new Calculadora();
calculadora.inicia();
