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
