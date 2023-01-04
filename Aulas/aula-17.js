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
class car {
    constructor (brand) {
        this._carName = brand
    }

    present () {
        return "i have a " + this._carName
    }
}

class model extends car {
    constructor (brand, mod){
        super(brand)
        this._model = mod
    }

    show () {
        return this.present() + " it is a " + this._model
    }
}

let myCar = new car ("Ford", "Mustang")
console.log(myCar.show())