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
class carro {
    constructor (car){
        this._car = car
    }

    get car () {
        return this._car  
    }

    set model (model) {
        this._model = model
    }

    set year (year) {
        this._year = year
    }
}

let carName = new carro ("BMW")
carro.model = "E36"
carro.year = 1996
console.log(carName.car, carro.model, carro.year)


//Herança
