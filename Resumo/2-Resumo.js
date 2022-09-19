//Método de Arrays:

//Método length(): Mostra o número de elemtnos dentro de uma array.
const alunos = ["Ian", "Guilerme", "Érica", "Wiilian", "Lucas"];
alunos.length();

//Método sort(): Deixa a array em ordem alfabetica
const cars = ["Subaru", "Ferrari", "BMW", "Toyota", "Ford"];
cars.sort();

//Método push(): Adiciona um novo elemento na array no final.
const car = ["Subaru", "Ferrari", "BMW", "Toyota", "Ford"];
car.push("Nissan");

//Método pop(): Remove o ultimo elemento da array.
const car2 = ["Subaru", "Ferrari", "BMW", "Toyota", "Ford"];
car2.pop();

//Método shift(): Remove o primeiro item da array.
const car3 = ["Subaru", "Ferrari", "BMW", "Toyota", "Ford"];
car3.shift();

//Método unshift(): Adiciona um novo elemento no começo da array.
const car4 = ["Subaru", "Ferrari", "BMW", "Toyota", "Ford"];
car4.unshift("Lexus");

//Método slice(): Ele fatia sua array e a msm coisa que o método pop() mas ele pode selecionar a posição de corte.
const car5 = ["Subaru", "Ferrari", "BMW", "Toyota", "Ford"];
car5,slice(0, 4);

//Método splice(): Ele faz o contraio do método slice() ele adiona.
const stds = ["Ian", "Guilerme", "Érica", "Wiilian", "Lucas"];
stds.splice(0, 3, "Andrei", "Wesley");


//Métodos de iteração de arrays:

//Método forEach(): Chama uma função para a array.
const num = [2,4,6,1,6,77,66,4,12,43,87,20];
let txt = "";

num.forEach(myFunction);

function myFunction(value, index, array){
    txt += value + "<br>";
}

//Método Reduce(): Soma todos os elementos da array formando um resultado só.
const num2 = [2,4,6,1,6,77,66,4,12,43,87,20];
let res = "";

num2.reduce(myFunction2);

function myFunction2(total,value, index, array){
    res += total + value;
}

//Método Filter(): Nesse método você cria teste para array passar.
const num3 = [2,4,6,1,6,77,66,4,12,43,87,20]; 
let maior = "";

num3.filter(açao);

function açao(value, index, array){
    maior += value >= 18 + " ,";
}

//Método map(): Esse método cria um clone da sua array pronto para ser modificada.
const cars2 = ["Subaru", "Ferrari", "BMW", "Toyota", "Ford"];
const newCars = cars2.map(myFunction3);

function myFunction3(value, index, array){
    
    return value.slice(2,4);

}
