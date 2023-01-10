//Callbacks

const display  = function(result) {
    console.log(result)
    
}

const control = function(value, Callback) {
    const x =  value;

    Callback(value);
}

control("Heelo", display)

//setTimeout

setTimeout(myFun, 2000);

function myFun() {
    console.log("OWO")
}

//setInterval

setInterval(relogio, 1000);

function relogio() {
    const d = new Date();

    console.log(
        d.getHours()+":"+
        d.getMinutes()+":"+
        d.getSeconds()
    )
}