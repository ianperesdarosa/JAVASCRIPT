//Objeto
const person = {
    name: "John",
    age: 30,
    hobbies: "Sports"
};
let Text = "";

for (let x in person){
    Text += person[x] + "<br>";

}

//Array
const cars = ["BMW", "Mercedes", "Audi"];
let Txt = "";

for(let x in cars){
    Txt += cars[x] + "<br>";
}


