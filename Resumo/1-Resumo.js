//Usando alert ou console.log para mostrar comandos 
alert("Olá, Amigo!");//Abre uma janela na parte de cima da tela com a mensagem escrita.

console.log("Olá, Amigo!");//Mostra a mensagem no console do browser.


//Variável:
let c = "oi";

console.log(c);

//Operadores Aritméticos:
let soma = 1+1;
let sub = 2-2;
let div = 10/2;
let mult = 5*2;
let modulo = 15%3; 

//If...Else/Else if:
let num = 10;
let num2 = 15;

if(num == num2){
    return true;
}else{
    return false;
}

//Operadores de Comparação:
//Maior que: (>)
//Menor que: (<)
//Maior que igual a: (>=)
//Menor que igual a: (<=)
//Inverso: (!=)
//Igual: (==)
//Atribui: (+=)

//Funções:
let carro = "Ford";
let ano = 2009;

function trocarCar(car, age){
    carro = car;
    ano = age; 
}

console.log(carro, ano);
trocarCar("BMW", 2020);
console.log(carro, ano);

//Objetos:
let person = {
    fName: "Ian",
    lName: "Peres",
    idade: 18
};

person.fName;

//Array:
const aluno = ["João", "Ana", "Gabi", "Jonathan"];

aluno[2];



