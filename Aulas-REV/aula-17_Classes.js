//Class 
class Estado {
    constructor (status) {
        this.status = status   
    }

    display() {
        return `Seu estado terminal está: ${this._status}`
    }
}

let dados = new Estado("Vivo")
console.log(dados.display())


//Getters & Setters
class Identificacao  {
    constructor (name, sobreNome, age) {
        this.name = name
        this.obreNome = sobreNome
        this.age = age
    }

    set name(name) {
        this.name = name
    }

    set sobreNome(sobreNome) {
        this.sobreNome = sobreNome
    }

    set age (age) {
        this._idade = age 
    }

    get display() {
        return `${this.name}, ${this.sobreNome}, ${this.age}`
    }
}

let card = new Identificacao()
card.name = "Ian"
card.sobreNome = "Peres"
card.age = 18



//Herança
class MyCard extends Identificacao {
    constructor (name, sobreNome, age, data) {
        super(name, sobreNome)
        this.age = age
        this.data = data
    }

    display () {
        return `Nome:${this._name} Sobre Nome:${this._sobreNome} Nascimento:${this._data} Idade:${this._age}`
    }
}

let inf = new MyCard("Ian", "Peres", 18, 2004)
console.log(inf.display())
