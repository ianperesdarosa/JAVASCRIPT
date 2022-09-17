//Métodos de iteração (ForEach(), Flter(), Map(), Reduce());

//ForEach(): Método que chama uma função
const number = [2,5,64,21,6,8,24,1,44,2,32];
let txt = "";
number.forEach(myFunction);

function myFunction(value, index, array){
    txt += value + "<br>";
}

//Map(): Método chama e executa uma função mas não altera o valor da array original, criando um nova array
const num = [2,5,64,21,6,8,24,1,44,2,32];
const num2 = num.map(myFunction2);

function myFunction2(value, index, array){
    return value * 2;
}
//Filter(): Método cria um filtro nos elemtnos arrays onde vão passar por testes
const notas = [18,27,24,30,12,10,13,9];
const overN = notas.filter(aprovado);

function aprovado(value, index, array){
    return value > 24;
    
}

//Reduce(): Método faz os elementos se tornarem um único valor (soma todos os elemtenos)
const numbers = [2,5,64,21,6,8,24,1,44,2,32];
const redu = numbers.reduce(myFunction3)

function myFunction3(total, value, index, array){
    return total + value;
}