//Typeof
const tipo = (valor) => {
    const tipe = typeof valor;

    if (tipe == "number") {
        return `Isso é um ${tipe}`
    }
    else if (tipe == "boolean") {
        return `Isso é um ${tipe}`
    }
    else if (tipe == "string") {
        return `Isso e uma ${tipe}`
    }
    else {
        return `Valor não reconhecido`
    }
}

console.log(tipo(2))


//Loops de repetição

//Método For
const repetição = ( index ,value) => {
    for (let i = 0; i < value; i++) {
        console.log(index)
    }
}

repetição("Hello", 2)


//Método For in
const Mycard = {
    Name: "Ian",
    SobreNome: "Peres",
    Idade: 18,
    Nascimento: 2004,
    Estado: "Solteiro" 
}

for (let index in Mycard) {
    console.log(index, Mycard[index])
}

//Método For of
const list =  ["Ford", "Bmw", "Toyota", "Subaru", "Honda", "Nissan", "Dodge"];
list.sort()

for (let i of list) {
    console.log(i)
}

//Método While
/*let num = 0;

while (num < 10) {
    console.log("Number",num)
    i++;
}

//Método Do while
let x = 0;

do {
    console.log(x)
    i++;
} while (x < 5)
*/

//Classes
class car {
    constructor (name, model) {
        this._name = name
        this._mod = model
    }

    present () {
        return `Carro:${this._name} Modelo:${this._mod}`
    }
}

let forSale = new car ("Ford", "Mustang")
console.log(forSale.present())

//Getters & Setters
class aluno {
    constructor (nome, idade, sexo) {
        this._name = nome
        this._age = idade
        this._sex = sexo
    }

    get dados () {
        return `Nome:${this._name}, Idade:${this._age}, Sexo:${this._sex},Turma:${this._turma}, Código:${this._code}`
    }

    set sala (turma) {
        this._turma = turma
    }

    set codigo (code) {
        this._code = code
    }
}

let myCard = new aluno ("Ian", 18, "Masculino")
myCard.sala = 403 ;
myCard.codigo = 2358;
console.log(myCard.dados)


//Herança de classe
class ida extends aluno {
    constructor (nome, idade, sexo, turma, code, humor, notas, aprovacao) {
        super(nome, idade, sexo, turma, code)
        this._humor = humor
        this._notas = notas
        this._aprovacao = aprovacao
    }

    information () {
        return `Nome:${this._name}, Idade:${this._age}, Sexo:${this._sex}, Turma:${this._turma}, Código:${this._code}, $Humor:${this._humor}, Notas:${this._notas}, Aprovação:${this._aprovacao}`
    }
}

let info = new ida ("Ian", 18, "Masculino", 303, 8944, "Feliz", "Boas", "Aprovado")
console.log(info.information())
