//Laços de repetição

//Método For

for (let i = 1; i < 11; i++) {
    console.log(i, "hello!")
}

//Método For (In) mostra o indice do objeto ou array

//obejeto 
const pessoa = {
    name: "Ian",
    sname: "Peres",
    age: 18,
    year: 2004
}

for (i in pessoa) {
    console.log(i, pessoa[i])
}

//array
const alunos = ["Ana", "Rafaela", "Erica", "Pamela", "Eduarda"];

for (list in alunos) {
    console.log(list, alunos[list])
}

//Método for (of) usado exclusivamente em arrays

const cars = ["BMW", "Honda", "Toyota", "Subaru"];

for (let lista of cars) {
    console.log(lista)
}