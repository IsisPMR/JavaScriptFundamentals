//Ejemplo
starts = ""
for (let i=0; i<=10; i++){
    console.log("Starts: ",i, starts)
    starts = starts + "*"
}

//Tarea tabla
for (i=1; i<=10; i++){
    for (j=0; j<= 10; j++)
    console.log(i, " x ", j, " = ", i * j);
}

function multi() {
    for (var i = 1; i <= 10; i++) {
        multi = num * i;
        console.log(num, " x ", i, " = ", multi);
    }
}
multi(num=3)

function producto(){
    for(let i=1; i<=10; i++){
        producto = numero * i;
        console.log(numero+"x"+i+"="+producto)
    }
}
producto(numero=9)

//Viernes 10 de Enero 2020
function saluda(){
    alert ("Hola mundo")
}
saluda();

let saludo = function hola() {
    console.log("Hola mundo con variable")
};
console.log(saludo)

let islegalage = (age) =>  {
    if (age >=18)
        console.log("Es mayor de esad");
    else 
        console.log("Es menor de edad");

};
islegalage(14);

//ARGUMENTOS
console.log("hola", 1, "hi!", 3.0, true, undefined, "...");

function suma(a,b){
    return a + b;
}
console.log(suma(1,2));

function sum(){
    console.log(arguments);
    let result = 0;
    for (let param of arguments){
        result += param;
    }
    return  result;
}
console.log(sum(1,2,3));


function sumaa(a,b){
    console.log(arguments);
    let result = 0;
    for (let param of arguments){
        result += param;
    }
    return  result;
}
console.log(sumaa(1,2,3));


function elevar(potencia, ...args){     //Los tres puntos indican los argumentos que sean la palabra "args" es opcional puedes poner bananas
    console.log(args);    //Rest operator solo para funciones, los parametros no usados los mete en un array
}
console.log(elevar(1,2,3));
//Spreal Oprerator ...    ejemplo anterior también aplica
let pepito = {
    gender: "hombre",
    eyes: "negros",
    estatura: 1.90,
    colorpiel: "brown",
};

console.log(pepito);
let pepita ={
    ... pepito,
    gender: "mujer",
};
console.log(pepita);


//Ejercicio practico. tener obligatoriamente un valor para empezar a sumar el resto
function ejercicio(numero, ...bananas){
    let result = numero;
    for (let value of bananas)
        result += value;
    return result;
};
console.log(ejercicio(3,4,1));

//Potencia (no estoy segura de que funcione)
function potenciacion(potencia =2,value=1,...rest){
    console.log(potencia);
    console.log(value);
    console.log(rest);
}
potenciacion(3,5,6,7);

//Ejemplo
let componentcolor = undefined;
let themecolor = "red";
let defaultcolor = componentcolor || themecolor;
console.log(defaultcolor);

//Ejemplo
function gettotalpaymentperyear(monto,interes=3.5,years=4){
    let montoofinterest = (monto * interes /100) + monto;
    let totalperyear = montoofinterest / years;
    return totalperyear;
}
gettotalpaymentperyear(1000);