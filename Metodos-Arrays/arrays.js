//Mesclando arrays
const myBoys = ['Pedro', 'José', 'João'];
const myGirls = ['Maria', 'Júlia', 'Ana'];

const myChildren = myBoys.concat(myGirls);

//Adicionando um elemento no final do array
const cars = ['Fusca', 'Gol', 'Palio'];
cars.push('Celta');

//Adicionando um elemento no inicio do array
const cars2 = ['Fusca', 'Gol', 'Palio'];
const novo = cars2.unshift('Celta');

//Removendo um elemento do final do array
const cars3 = ['Fusca', 'Gol', 'Palio'];
const remove = cars3.pop("Palio");

//adicionando um elemento no final do array
const cars4 = ['Fusca', 'Gol', 'Palio'];
const novo2 = cars4.push("Celta");

//Removendo um elemento do inicio do array
const cars5 = ['Fusca', 'Gol', 'Palio'];
const remove2 = cars5.shift("Fusca");