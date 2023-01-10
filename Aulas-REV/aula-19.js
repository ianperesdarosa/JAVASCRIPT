//Promises

const myPromise = new Promise((resolve, reject) => {
    setTimeout(myCalculator, 2000);

    function myCalculator(n1, n2) {
        let soma = n1 * n2;

        if (soma >= 15) {
        resolve(`Valor estimado!`)
    }
        else {
        reject(`Valor não estimado! ${soma} não e maior que 15`)
    }
    }
    
    myCalculator(3, 3)
    
})

myPromise.then(
    (success) => {
        console.log(success)
    },
    (error) => {
        console.log(error)
    }
)