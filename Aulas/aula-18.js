//Callbacks
const display = (valor) => {
    console.log(`O valor atribuido foi ${valor}`)
}

const myCalculator = (n1 ,n2 , callback) => {
    let soma = n1 + n2;
    callback(soma);
}   

myCalculator(2,2,display)

//SetTimeout

setTimeout(()=>{
    myFun();
}, 1000);
const myFun = function () {
    console.log("Hello");
}

//SetInterval

setInterval(() => {
    myCalback();
},1000)

const myCalback = () => {
    console.log("Hello de novo!")
}
