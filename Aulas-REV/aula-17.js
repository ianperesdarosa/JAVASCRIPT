//Class 
class estado {
    constructor (status) {
        this._status = status   
    }

    display () {
        return `Seu estado terminal está: ${this._status}`
    }
}

let dados = new estado ("Vivo")
console.log(dados.display())


//Getters & Setters
class identificacao  {
    constructor (name, sobreNome) {
        this._name = name
        this._sobreNome = sobreNome
    }

    get name () {
        return `${this._name} ${this._sobreNome}`
    }

    set age (age) {
        this._idade = age 
    }

    set data (data) {
        this._nascimento = data 
    }
}

let card = new identificacao("Ian", "Peres")
identificacao.age = 18
identificacao.data = 2004
console.log(card.name, identificacao.age, identificacao.data)

//Herança
class myCard extends identificacao {
    constructor (name, sobreNome, age, data) {
        super(name, sobreNome)
        this._age = age
        this._data = data
    }

    display () {
        return `Nome:${this._name} Sobre Nome:${this._sobreNome} Nascimento:${this._data} Idade:${this._age}`
    }
}

let inf = new myCard ("Ian", "Peres", 18, 2004)
console.log(inf.display())
