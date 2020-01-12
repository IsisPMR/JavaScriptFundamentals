let a = 10;
let b = 7;
let resultado;

console.log("suma",a+b);
console.log("resta",a-b);
console.log("multiplicación",a*b);
console.log("división",a/b);
console.log("residuo",a%b);

a += b
console.log(a);

a=10;
b=7;
console.log(a += b); // a + b = 

a=10;
b=7;
console.log(a -= b); // a - b =

a=10;
b=7;
console.log(a *= b); // a * b =

a=10;
b=7;
console.log(a /= b); // a / b =

a=10;
b=7;
console.log(a %= b); // a % b =


//Segunda parte del ejercicio Operadores de comparación
//Operadores Racionales
let num1 = 4;
let num2 = 5;

console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);

//Operadores de Igualdad
let x = true;
let y = 1;
console.log("comparación ==",x == y);
console.log("comparación ===",x === y);

console.log("comparación !=",x != y);
console.log("comparación !==",x !== y);

//Operador ternario (va a hacer una pregunta o comparación)?
let var1 = 6;
let var2 = 2;

let result = var1 > var2 ? "var1 mayor" : "var2 mayor"  // var1 es mayor que var2, ?= si sí, impirme var1mayor : si no imprime var2mayor
console.log(result);

//Ejercició de cambio de variables
let color1 = "Red";
let color2 = "Blue";

console.log(color1);
console.log(color2);

console.log("Cambio de variables");
let color3 = color1;
color1 = color2;
color2 = color3;

console.log(color2);
console.log(color1);

//Operadores Lógicos     AND &&  , OR ||  , NOT !
console.log(true || "ana");
console.log(undefined || "ana");
console.log(undefined || "" || null || 10);

let color = "yellow";
let defaultcolor = color || "blue";
console.log(defaultcolor);

//Estructuras de control
// if   /  if else
let hora =  21;
let mensaje = " ";
function saludo(hora){
    if ((hora >= 6) && (hora < 12))
    mensaje = "Buenos días";
    else if ((hora >= 12) && (hora < 20)) 
    mensaje = "Buenas tardes";
    else 
    mensaje = "Buenas noches";
}
saludo(hora);
console.log(mensaje);

//Ejercicio
function isalandscapes(wi,he){
    if (wi>he)
    return true;
    else if (wi<he) 
    return false;
}
console.log(isalandscapes(400, 500));

//Switch Case
let expr = "Uva";
switch (expr) {
    case 'Naranja':
      console.log('El kilogramo de Naranjas cuesta $0.59.');
      break;
    case 'Manzana':
      console.log('El kilogramo de Manzanas cuesta $0.32.');
      break;
    case 'Banana':
      console.log('El kilogramo de Bananas cuesta $0.48.');
      break;
    case 'Cereza':
      console.log('El kilogramo de Cerezas cuesta $3.00.');
      break;
    case 'Mango':
    case 'Papaya':
      console.log('El kilogramo de Mangos y Papayas cuesta $2.79.');
      break;
    default:
      console.log('Lo lamentamos, por el momento no disponemos de ' + expr + '.');
  }
  

function deptosaludo(role) {
      switch(role){
          case "RH":
              console.log("Hola RH Teammate");
          break;
          case "IT":
            console.log("Hola IT Teammate");
          break;
          case "Contabilidad":
              console.log("Hola Conta Teammate");
          break;
          default:
            console.log("Hola Enfermera!");
      }
  }
  let role = "Taquillas";
  deptosaludo("Contabilidad");

  function getpage () {
      //Request
      const responsecode = 404;

      switch(responsecode){
          case 200:
              console.log("OK");
          break;
          case 404:
              console.log("NOT FOUND");
          break;
          case 500:
              console.log("SERVER ERROR");
          break;
          default:
              console.log("We can't resolve the request");
      }
  }
  getpage();

  // FOR
  for(let i = 1; i <= 10; i++)
  {
      console.log("Index: ", i);
  }
 // FOR.....IN          
 let someone = {
     name: "Isis",
     age: 28,   
 }

//EJEMPLO
 let naranja = {
    color: "amarilla",
    tamaño: "chicamediana",
    peso: 0.10,
    }
console.log("Mi manzana es: ")
for (let propiedad in naranja){
   console.log(propiedad, " es ", naranja[propiedad], "miomi!")
}

//EJEMPLO
let manzana = {
    color: "roja",
    tamaño: "chica",
    peso: 0.3,
    }
 for(let propiedad in manzana) {
     if (propiedad !== "peso")
        console.log(propiedad, " es ", manzana [propiedad], " miomi! ")
    else
    console.log(propiedad, " es ", manzana [propiedad], "kg", " miomi! ")
 }

 
 //FOR.....OF
 //EJEMPLO
 let numeros = [12, 34, 56, 8, 90]

 for (let numero in numeros)
        console.log("Index", numero);

for (let numero of numeros)
    console.log(numero);


//WHILE LOOP
let consumo = 6
while (consumo > 2.5){
    cheking(consumo)
    -- consumo;
}
cheking(consumo)
function cheking(trafic){
    console.log("cheking trafic..", trafic);
    if (trafic > 2.5){
        console.log("there is some trafic")
    }
    else {
        console.log("you can stop checking")
    }  
}


//DO WHILE LOOP
let consumoMG = 6
do {
    cheking(consumoMG);
    consumoMG--;
}
while (consumoMG > 2.5)

//EJEMPLOS
for (let q = 0; q < 10; q++){
    if(q === 5)
    break;

    console.log("Index; ",q)
}

for (let ul= 0; ul < 10; ul ++){
    console.log("Estoy en el if", ul);
    continue
}
