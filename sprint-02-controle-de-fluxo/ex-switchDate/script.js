const diaSemana = function (diaSemana) {
  let diaSemanaTexto;
  switch (diaSemana) {
    case 0:
      diaSemanaTexto = "Domingo";
      break;
    case 1:
      diaSemanaTexto = "Segunda-feira";
      break;
    case 2:
      diaSemanaTexto = "Terça-feira";
      break;
    case 3:
      diaSemanaTexto = "Quarta-feira";
      break;
    case 4:
      diaSemanaTexto = "Quinta-feira";
      break;
    case 5:
      diaSemanaTexto = "Sexta-feira";
      break;
    case 6:
      diaSemanaTexto = "Sábado";
      break;
    default:
      diaSemanaTexto = "";
  }
  return diaSemanaTexto;
};

const mesAno = function (mesAno) {
  let mesTexto;
  switch (mesAno) {
    case 0:
      mesTexto = "janeiro";
      break;
    case 1:
      mesTexto = "fevereiro";
      break;
    case 2:
      mesTexto = "março";
      break;
    case 3:
      mesTexto = "abril";
      break;
    case 4:
      mesTexto = "maio";
      break;
    case 5:
      mesTexto = "junho";
      break;
    case 6:
      mesTexto = "julho";
      break;
    case 7:
      mesTexto = "agosto";
      break;
    case 8:
      mesTexto = "setembro";
      break;
    case 9:
      mesTexto = "outubro";
      break;
    case 10:
      mesTexto = "novembro";
      break;
    case 11:
      mesTexto = "dezembro";
      break;
    default:
      mesTexto = "";
  }
  return mesTexto;
};

function formataData(data) {
  const diaDaSemana = diaSemana(data.getDay()); 
  const diaDoMes = data.getDate();
  const mes = mesAno(data.getMonth());
  const ano = data.getFullYear();
  const hora = data.getHours();
  const min = data.getMinutes();

  return `${diaDaSemana}, ${diaDoMes} de ${mes} de ${ano} ${hora}:${min}`;
}

// Pega a data atual
const data = new Date();
const dataBrasil = formataData(data);

// Atualiza o conteúdo do resultado
const resultElement = document.getElementById("data");
resultElement.innerHTML = `<p><strong>${dataBrasil}</strong></p>`;
