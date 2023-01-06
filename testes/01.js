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

class dados extends car {
    constructor (name, model, year) {
        super(name, model)
        this._year = year
    }

    display () {
        return `Nome:${this._name} Modelo:${this._mod} Ano:${this._year}`
    }
}

let d = new dados("Toyota", "Supra MK4", 1993)
console.log(d.display())

