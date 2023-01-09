//Promises
let myPromise = new Promise((resolve, reject) => {
    const user = "Ian" ;

    if (user === "Ian") {
        resolve("Valido!")
    }
    else {
        reject("Error!")
    }

});

myPromise.then((data) => {
    console.log(data)
})

//Encadeamento de then's
let myPromise2 = new Promise((resolve, reject) => {
    const user = "Ian" ;

    if (user === "Ian") {
        resolve("Valido!")
    }
    else {
        reject("Error!")
    }

});

myPromise2.then((data) => {
    return data.toLowerCase()
})
.then((stringmodificada) => {
    console.log(stringmodificada)
})

