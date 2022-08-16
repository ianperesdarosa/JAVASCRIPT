let nota1 = 7;
let nota2 = 8;
let nota3 = 6;
let nota4 = 5;

let media = (nota1 + nota2 + nota3 + nota4);

function calcularMedia(media){
    if(media > 24){
        return "Aprovado!";
    }
    else {
        return "Reprovado!";
    }
}

console.log(media);
console.log(calcularMedia(media));