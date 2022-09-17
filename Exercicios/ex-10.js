//Me mostre quantos elementos tem dentro dessa array
const cars = ["Saab", "Volvo", "BMW", "Subaru", "Toyota", "Nissan", "Lexus", "Ford", "Audi",];
cars.length();

console.log(cars);

//Adicione dois novo itens na array em ultima posição 
const x = ["Guilerme", "Lucas", "Abner", "Gabriel"];
x.push("Érica", "Wiilian");

console.log(x);

//Remova dois itens de uma array
const y = ["Guilerme", "Lucas", "Abner", "Gabriel"];
y.slice(1,3);
//or
y.pop(y[1],y[3])

console.log(y);

//Deixe em ordem alfabetica essa arrays
const alfa = ["C", "V", "F", "G", "A", "H", "I", "J", "L", "B", "E", "D"];
alfa.sort();

console.log(alfa);

//Remova o primeiro item da arrays
const n = ["Guilerme", "Lucas", "Abner", "Gabriel"];
n.shift();

console.log(n);

//Adicione um item na arrau na primeira posição na array
const num = [1,2,3,4,5,6,7,8,9];
num.unshift(10);

console.log(num);