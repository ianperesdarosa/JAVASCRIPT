/*
setInterval(myFunction, 1000)

function myFunction() {
    let d = new Date()
    console.log( d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds())

}
*/

class Identificacao  {
    constructor (name, sobreNome, age) {
        this.name = name
        this.sobreNomeobreNome = sobreNome
        this.age = age
    }

    display() {
        return `${this.name}, ${this.sobreNome}, ${this.age}`
    }
}

let card = new Identificacao("Ian", "Peres", 18)
console.log(card.display())