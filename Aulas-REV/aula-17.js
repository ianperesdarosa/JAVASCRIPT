//Class 
class estado {
    constructor (status) {
        this._status = status   
    }

    display () {
        return `Seu estado terminal está: ${this._status}`
    }
}

let dados = new estado ("Morto")
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

