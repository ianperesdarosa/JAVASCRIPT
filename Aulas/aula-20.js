//Async & Await
const fun = async function () {
    let myPromise = new Promise((resolve, reject) => {
        resolve("Abner gay");
        reject("Ele não e gay!");
    }) 

    console.log(await myPromise)
}

fun()

//Async & Await com tempo limite
const fun2 = async function () {
    let myPromise = new Promise((resolve, reject) => {
        setInterval(()=> {
            resolve("Abner gay");
        }, 1000)
    })

    console.log(await myPromise)
}