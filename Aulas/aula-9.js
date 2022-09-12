//Operadores Lógicos / Comparação

let n1 = 7; 
let n2 = 8;
let n3 = 5;
let n4 = 6;

let freq = 70;
let soma = n1 + n2 + n3 + n4;

function boletim(){
    if(soma >= 24 && freq >= 75){
        alert("Aprovado!")

    }else{
        alert("Reprovado!")
    }
}