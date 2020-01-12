// FizzBuzz algoritmo
/**
 * Divisible entre 3 => Fizz
 * Divisible entre 5 => Buzz
 * Divisible entre 3 y 5 => FizzBuzz
 * No ivisible entre 3 o 5 => input
 * No es un numero => 'Not es un numero'
 * 
 */
function analizar(number){
    result = number / 3;
    result2 = number / 5;
    if (typeof(number) !== 'number'){
        console.log("No es un numero");
    }
    if (number % 3 == 0){
        result = number / 3;
        console.log("FIZZ el numero es divisible entre 3");
    }
    if (number % 5 == 0){
        result = number / 5;
        console.log("FIZZ el numero es divisible entre 5");
    }
    if (number % 3 == 0 && number % 5 == 0){
        result = number / 3;
        result = number / 5;
        console.log("FIZZ el numero es divisible entre 3 y 5");
    }
};
analizar("a");



 // limite de velocidad
 /**
  * Limite de velocidad = 70
  * 5 -> 1 point
  * Math.Floor
  * 12 point -> licencia suspendida
  */
 let valor = undefined;
 function velocimetro(valor){
     if (valor > 70){
        if (valor > 70 && valor < (70 + 5)) {
            console.log("Tienes 1 advertencia de velocidad");
        } 
        if (valor > (70 + 12)) {
                console.log("Tu licencia ha sido suspendida");
        }      
     }
    else {
            console.log ("Continua moderando la velocidad")
        }  
     }
     velocimetro(72);




  // Par or non
  /**
   * Funcion que reciba un numero e imprima desde 0 
   * hasta el numero dado y espacifique sies par o non
   * example: n = 3
   * 0 par
   * 1 non
   * 2 par
   * 3 non
   */
let num = undefined;
function numeroo(num){
    for(i=0;i<=num;i++) {
        if (num % i != 0){
             console.log (i, " Es un número par.");
        }
        if (num % i == 0) {
            console.log (i, " Es un número impar.");
        }
    }
}
numeroo(15);




   // Suma de multiplos de 3  y 5
   /**
    *  sum(10)
    *  3 -> 3, 6, 9
    *  5 -> 5, 10
    *  sum(10) = 33
    */
   function sumaa (numerodado) {
        let numerodado3 = numerodado % 3;
        let numerodado5 = numerodado % 5;
        let residuos = numerodado3 + numerodado5;

        if (numerodado )
   
        console.log ("sum(" + numerodado + ")  = " + residuos);
   }
   sumaa (10);
    // Show the stars
    // Print Primes  