const Lucas = {
    name: "Lucas", 
    lastName: "Paró",
    age: 23
};

const Ana = {
    name: "Ana", 
    lastName: "Maria",
    age: 25
};

const Ian = {
    name: "Ian", 
    lastName: "Paeres",
    age: 18
};

const Fabio = {
    name: "Fabio", 
    lastName: "Feam",
    age: 23
};

const Rafaela = {
    name: "Rafaela", 
    lastName: "Martus",
    age: 20
};

const arr = [Rafaela, Ian, Ana, Lucas, Fabio];

const rota = async function() {
    setInterval(rota, 2000);

    try {
    const data = await display();

    console.log(data);
    } catch(err) {
        console.log(err)
    }
}

const display = function() {
    arr.map((value) => {
        console.log(`Nome:${value.name} Sobre nome:${value.lastName} Idade${value.age}`);
    });
}
rota()