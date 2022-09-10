let nome = "Ian";
let id = 8674;
let ident = nome + " " +id;

function trocarUsu(nome, id){
ident = nome + " " + id;

}
alert(ident);
trocarUsu("John Doe", 9956);
alert(ident);

/////

let p = {
    fNome: "Ian",
    lNome: "Peres",
    fullName: function(){
    return this.fNome + " " + this.lNome;
    }
}

alert(p.fullName());