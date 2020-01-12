//1.- Crear una función que se llame doHomeWork, esta función va a recibir como parámetro una función. 
//2.- Dentro de la funcion doHomeWork cree un loop que imprima los números del 1 al 100, 
    //terminando el loop mande a llamar la funcion que recibe como parametro. 
//3.- La función que recibe como parámetro debe de enviar una alerta que diga: The homework has been done!

function dohomework (bienhecho){
    for (let i=0; i<=100; i++){
        console.log(i);
    } 
    bienhecho();
}

function mensaje(){
    alert("The homework has been done!");
}

dohomework(mensaje);

// Lo qué pasa es que después del loop tienes que mandar llamar el parámetro que estás recibiendo en 
//vez de llamar directamente a la función.