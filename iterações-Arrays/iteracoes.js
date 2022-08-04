//some() retorna true se alguma das condições for verdadeira.
const numb = [68,45,24,18,7,12,15];
const result = numb.some(myfunction01);

function myfunction01(value) {
    return value > 18;
}

//every() retorna true se todas as condições forem verdadeiras.

const numb1 = [68,45,24,18,7,12,15];
const result1 = numb1.every(myfunction02);

function myfunction02(value) {
    return value > 18;
}

//reduce() retorna um valor único.

const numb2 = [68,45,24,18,7,12,15];
const result2 = numb2.reduce(myfunction03);

function myfunction03(total, value) {
    return total + value;
}

//map() retorna um array com os valor transformados.

const numb3 = [68,45,24,18,7,12,15];
const result3 = numb3.map(myfunction04);

function myfunction04(value) {
    return value * 2;
}

//filter() retorna um array com os valor filtrados.

const numb4 = [68,45,24,18,7,12,15];
const result4 = numb4.filter(myfunction05);

function myfunction05(value) {
    return value > 18;
}

//forEach() executa uma função em cada elemento do array.

const numb5 = [68,45,24,18,7,12,15];
let txt = "";
numb5.forEach(myfunction06);

function myfunction06(value) {
    txt += value + "<br>";
}