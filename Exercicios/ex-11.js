//faça uma itereção onde Some todos os item da array
const num = [2,5,64,21,6,8,24,1,44,2,32];
const num2 = num.reverse(açao);

function açao(total, value, index, array){
    return total + value;
}


//Faça uma chama de funçao para uma array
const alunos = ["Ian", "Guilerme", "Érica", "Wiilian", "Lucas"];
let list = "";

alunos.forEach(myFunction);

function myFunction(value, index, array){
    list += value + "<br>";
}

//Dobre o valor de uma array mantendo sua origem
const valores = [2,5,64,21,6,8,24,1,44,2,32];
const dobro = valores.map(dobro);

function dobro(value, index, array){
    return value * 2 + " ";
}

//Faça um filtro onde so acima de 18 apareceram os item
const pts = [2,5,64,21,6,8,24,1,44,2,32];
const max18 = pts.filter(filtraçao);

function filtraçao(value, index, array){
    return value > 18 + "<br>";
}