setInterval(relogio, 1000);

function relogio () {
    let data = new Date();
    console.log(data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds());
}
relogio();
