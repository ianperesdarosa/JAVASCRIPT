//Async & Await
const display = async function() {
    let  myPromise2 = new Promise((resolve, reject) => {
        let sum = 2 + 1;
        if (sum >= 4) {
            resolve("True")
        }
        else {
            reject("False")
        }
    })
    console.log( await myPromise2)
}
display()