class car {
    constructor (name, model) {
        this._name = name
        this._mod = model
    }

    present () {
        return `Carro:${this._name}, Modelo:${this._mod}`
    }
}

let forSale = new car ("Ford", "Mustang")
console.log(forSale.present())  