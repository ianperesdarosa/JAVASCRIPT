//Async & Await
//Sitaxe
const myCalculator = function(n1, n2) {
        const res = n1 * n2;

        return res
}

const display = async function(n1, n2) {

    try { 
    const res = await myCalculator(n1, n2)

    console.log(`Resultado:${res}`)
    } catch(err) {
        console.log(`Valor não encotrado${err}`)
    }
}

display("Heelo")


//Prático
function getUser(id) {
    return fetch(`https://reqres.in/api/users?id=${id}`)
    .then(data => data.json())
    .catch(err => console.log(err))
}

async function database(id) {
    try {
        const user = await getUser(id)

        console.log(`User Name: ${user.data.first_name}`)
    } catch(err) {
        console.log(err)
    }
    
}
database(8)