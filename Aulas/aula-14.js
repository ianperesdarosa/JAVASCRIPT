//Iteração de Arrays

//forEach(): Método que chama uma função

const num = [3,5,6,12,45,2];
let res = "";
num.everyforEach(myFunction);

function myFunction(value, index, array){
    res += value + "<br>";
}

//Map(): Método cria uma nova array executando uma função em cada elemento do array

const numb = [3,5,6,12,45,2];
const numb2 = numb.map(myFunction2);

function myFunction2(value, index, array){
    return value * 2;
}

//Filter(): Método cria uma nova array com elementos da array que passam do teste
const n = [3,5,6,12,45,2];
const over18 = n.filter(myFunction3);

function myFunction3(value, index, array){
    return value > 18;
}

//Reduce(): Método executa uma função em cada elemento da array para reduzir um único valor.

const numbers = [3,5,6,12,45,2];
const numbers2 = numbers.reduce(myFunction4);

function myFunction4(total ,value, index, array){
    return total + value;
}