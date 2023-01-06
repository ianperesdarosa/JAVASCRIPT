const pesssoa = {
    saudacao: "Bom Dia!",
    falar () {
        console.log(this.saudacao)
    }   
}

const pessoaFalando = pesssoa.falar.bind(pesssoa)
pessoaFalando()