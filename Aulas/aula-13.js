//Elementos de descolamento (Array)

//Shift(): metodo remove o primeiro item de uma array 
const fruta = ["Banana", "Melão", "Abacaxi", "laranja", "Morango", "Uva"];
console.log(fruta.shift());

//unshift(): metodo que adiciona um novo elemento a uma array no (inicio)

const alunos = ["Érica", "lucas", "Guilherme", "João"];
console.log(unshift("Gabriel"));

//Exclusão de um arrays

//Delete

const x = [1,2,3,5,6,7,8,9,0];
console.log(delete x[2]);

//Mesclando concatenados arrays

const a = [1,2,3,4,5];
const b = [6,7,8,9,10];
const c = a.concat(b);
console.log(c);

//Mesclando concatenados arrays com valores

const z = [1,2,3];
const y = z.concat(" GO!!!");
console.log(y);

//Splice(): Método que adicinoa novos itens a uma arrays

const fruits = ["Banana", "Melão", "Abacaxi", "laranja", "Morango", "Uva"];
fruits.splice(3, 0 , "Limão", "Mamão", "Maçã")

//Slice(): Método que fatia uma array a
const fruit = ["Banana", "Melão", "Abacaxi", "laranja", "Morango", "Uva"];
fruit.slice(0, 2, 4);