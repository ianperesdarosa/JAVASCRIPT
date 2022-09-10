//Funções usado os parametros

let car = "volvo";

function trocarCar(car, ano){
    car = car + " " + ano;
}

alert(car);
trocarCar("BMW", 2014)
alert(car);

//Funções sem parametros

let fName = "Ian";
let lName = "Peres";

function nomeComplet (){
    return fName + " " + lName;
}

alert(nomeComplet)