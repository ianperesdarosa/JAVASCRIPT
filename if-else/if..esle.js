let idade = 17;
let maiorIdade = 18;

function verificaIdade(idade) {
  if (idade >= maiorIdade) {
    return "Maior de idade";
  } else {
    return "Menor de idade";
  }
}
console.log(verificaIdade(idade));

// Exercício 2

let bomDia = "6:00";
let boaTard = "12:00";
let boaNoite = "19:00";
let hora;

function horaio(hora) {
  if (hora >= bomDia && hora <= boaTard) {
    return "Bom dia";
  } else if (hora >= boaTard && hora <= boaNoite) {
    return "Boa tarde";
  } else {
    return "Boa noite";
  }
}