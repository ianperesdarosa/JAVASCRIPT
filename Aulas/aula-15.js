//Switch case : e uma instrução usada para executar diferentes ações com base em diferentes condições.

//Sintaxe:
/*
switch (expression) {
    case x:
        //code-block
        break;

    case y:
        //code-block
        break;   

            default:
                //code-block 
}
*/


//Pratica: 
let usuario;
usuario = 5;

switch (usuario){
    case 0:
        console.log("Usúario Comum");
        break;
    case 1:
        console.log("Usúario Administrador");
        break;
    case 2:
        console.log("Usúario Developer");
        break;    
            default:
                console.log("Usúario não reconhecido!");    
}