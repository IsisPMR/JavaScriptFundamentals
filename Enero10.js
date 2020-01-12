//En este ejemplo "this" muestra lo que hay dentro del objeto
//This va a mostrar el valor de donde exista
console.log("hola mundo");
let persona = {
    name: "Isis",
    move: function (){
        console.log("I can move");
        console.log(this,name);
    }
}
persona.move();

//Ejemplo funciones anidadas
//This va a mostrar el valor de donde exista
function x(){
    let x="x";
    console.log(x,this);
    function y(){
        let y = "y";
        console.log(y,this);
        function z(){
            let z = "z";
            console.log(z,this);
        }
        z();
    }y();
}
x();

//This Ejemplo.  Donde se use this toma contexto diferente
var documentname = "javascript fundamentals"
function examplethis(){
    console.log(this,documentname);
}
examplethis();

//Scope and Clousures Ejemplos
//Scope global
var z = 5;
var y = 333;


function onefuncionscope(){
    //Function scope
    let z = 10;
    function loop(){
        console.log(x,"x");
        console.log(y,"y");

    }
    loop();
    console.log(z);
    
}
onefuncionscope();

//Declarar una funcion como parametro (fn)
//Callback a una función
let calculandoedad = function (birthyear, actualyear) {
    return actualyear - birthyear;
};

let ismayordeedad = function (fn) {
    let age = fn(1991, 2020);

    if(age > 18){
        console.log("Es mayor de edad");
    }
    else {
        console.log("Es menor de edad");
    }
};

ismayordeedad(calculandoedad);

//Ejemplo con prompt
//let age = prompt("Please enter your age");
//console.log(age);

//Ejercicio callback  ESTUDIAR
//En este ejemplo no importa el nombre de las funciones
function saludo (name) {
    alert("Hola "+ name);
}

function getnameysaludo(sfn) {
    let bananas = (prompt("Ingresa tu nombre para saludarte correctamente"));
    sfn(bananas);
}
getnameysaludo(saludo);












