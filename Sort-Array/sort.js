//Array em ordem alfabética
const arr1 = ["Banada", "Cachorro", "Gato", "Leão", "Macaco", "Ovelha", "Papagaio", "Tartaruga"];
arr1.sort();

//array em ordem alfabética inversa
const arr2 = ["Banada", "Cachorro", "Gato", "Leão", "Macaco", "Ovelha", "Papagaio", "Tartaruga"];
arr2.reverse();

//Array em ordem crescente os números
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr3.sort(function(a, b) {
  return a - b;
});

//Array em ordem decrescente os números
const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr4.sort(function(a, b) {
  return b - a;
});

//Array encontrando o maior número
const arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    function myArrayMax(arr5){
    return Math.max(null,arr5);
}

//Array encontrando o menor número
const arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    function myArrayMin(arr6){
        return Math.min(null,arr6);
}