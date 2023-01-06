const obj = {
    nome: "Ian",
    sname: "Peres",
    meuNome: function () {
        console.log(`${this.nome} ${this.sname}`)
    }
}
obj.meuNome()