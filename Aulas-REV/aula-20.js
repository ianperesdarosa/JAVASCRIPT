//Async & Await

const estado = async function() {
    const myPromise = new Promise((resolve, reject) => {

        const  value = 12;

        if (value > 18) {
            resolve(`${value} você está com a pressão muito alta!!!`)
    }
        else if (value >= 18) {
            resolve(`${value} você está com a pressão alta!!!`)
    }
        else if (value >= 15) {
            resolve(`${value} você está com a pressão normal...`)
    }
        else if (value <=  10 ) {
            reject(`${value} você está com a pressão muito baixa!!!`)
    }
    })

    console.log(await myPromise)
}

estado()
