//Loops For: Percore um bloco de código varias vezes

//Sintaxe
/* 
For (let i = 0; i < 5; i++) {
    txt += "The number is " + i + "<br>";
}
*/

//pratica
for (let i = 0; i < 5; i++) {
    console.log("Olá, mundo!");
}

//Loops For in: iterra sobre elementos de uma Array ou Objeto

//Sintaxe
/*
for (key in object) {

    text += perosn[x];

}
*/

//pratica
const pessoa = {
    nome: "ian",
    idade: 18
}

for (let key in pessoa){
    console.log(key, pessoa[key],);
}

const cores = ["Red", "Blue", "Green", "Black"];

for (let indi in cores) {
    console.log(indi, cores[indi]);
}

//For of: muito mais facil de fazer iteraçoes "Unica difereça entre o de cima e que nao declara o indice da array/objeto"

for (let cor of cores) {
    console.log(cor)
}


//Loop while
let i = 5;

while (i >= 1) {
    if (i % 2 !== 0){
        console.log(i);
    }
    i--;
}

//Loop Do while "Quase nunca usa essa bosta!!!"

let x = 0;

do{
    console.log("Digiando");
    x++;
} while (x < 10) 

