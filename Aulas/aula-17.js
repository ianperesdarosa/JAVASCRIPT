//Classes no Javascript
class Person{
    constructor (name) {
        this._name = name;
    }

    complete () {
        return `Seu nome é ${this._name}`
    }
}

let dados = new Person("Ian Peres Da Rosa")
console.log(dados.complete())


//Set / Get
class Carro {
    constructor (car){
        this._car = car
    }

    get car () {
        return `Name:${this._car}, Modelo:${this._model}, Year:${this._year}`
    }

    set model (model) {
        this._model = model
    }

    set year (year) {
        this._year = year
    }
}

let carName = new Carro ("BMW")
carName.model = "E36"
carName.year = 1996
console.log(carName.car)


//Herança
class Car {
    constructor (brand) {
        this._carName = brand
    }

    present() {
        return "i have a " + this._carName
    }
}

class Model extends Car {
    constructor (brand, mod){
        super(brand)
        this._model = mod
    }

    show() {
        return this.present() + " it is a " + this._model
    }
}

let myCar = new Car ("Ford", "Mustang")
console.log(myCar.show())