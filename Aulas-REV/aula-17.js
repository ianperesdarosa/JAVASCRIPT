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
    constructor (name) {
        this._cidadao = name
    }

    get name () {
        return this._cidadao
    }

    set age (age) {
        this._idade = age 
    }

    set data (data) {
        this._nascimento = data 
    }
}

let card = new identificacao("Ian Peres Da Rosa")
identificacao.age = 18
identificacao.data = 2004
console.log(card.name, identificacao.age, identificacao.data)

//Herança
class myCard extends identificacao {
    constructor (cidadao, data, age) {
        super(cidadao)
        this._data = data
        this._age = age
    }

    display () {
        return `Nome: ${this._cidadao} Nascimento: ${this._data} Idade:${this._age}`
    }
}

let inf = new myCard ("Ian", 2004, 18)
console.log(inf.display())
