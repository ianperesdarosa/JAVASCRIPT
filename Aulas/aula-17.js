//Classes no Javascript

class person{
    constructor (name) {
        this._name = name;
    }

    complete () {
        return `Seu nome é ${this._name}`
    }
}

let dados = new person("Ian Peres Da Rosa")
console.log(dados.complete())

//Set / Get



//Herança