// condição ? valorTrue : Outro valor

const userScore = 500;//1000
const userStatus = userScore >= 1000 ? "Usuário VIP" : "Usuário Normal";

//Set color
const userColor = null; //"Preto"
const Color = userColor || "Branco";

console.log(userStatus, Color);
