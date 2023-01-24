//Promises
const myPromise = new Promise((resolve, reject) => {
    const saldo = 800;
    
    if (saldo >= 2000) {
        resolve (`Seu saldo de ${saldo} está pronto para sacar!`)
    } 
    else if (saldo < 2000) {
        resolve (`Seu saldo de ${saldo} não e o suficiente para sacar!`)
    }
    else if (saldo < 1000){
        resolve (`Seu saldo de ${saldo} está muito baixo para sacar!`)
    }
    else {
        reject ("Conta não cadastrada!")
    }
})

myPromise.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
});

