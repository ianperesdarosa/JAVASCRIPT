let marca = "BMW";
let modelo = "E46";
let ano = "1998";
let cor = "Cinza";

let car = marca + " " + modelo + " " + ano + " " + cor;


function trocarCar(marc, model, age, cor){

    car = marc + " " + model + " " + age + " " + cor;
}
alert(car);
trocarCar("BMW", "E32", 1999, "Preto");
alert(car);

let n1 = 5;
let n2 = 5;

function soma(){
    alert( n1 + n2 );
}
