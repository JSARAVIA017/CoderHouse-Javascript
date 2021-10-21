/*

function pedirNombre() {
    let nombre = prompt("Ingrese un nombre")
    console.log(`Nombre ${nombre} ingresado`)
    console.log("Nombre " + nombre + " ingresado")
}

pedirNombre()
*/


/*
function suma(numero1,numero2) {
    let sumavar // variable local
    console.log(numero1+numero2)
}

let numero1 = parseFloat(prompt("Ingrese un numero"))
let numero2 = parseFloat(prompt("Ingrese un número"))

console.log(suma(numero1,numero2)) // Esto esta mal! el consolo log ya esta dentro de la función! 

suma(5,"10")

*/

// Forma correcta de declara la función 
/*
function suma(numero1,numero2){
    return numero1 + numero2
}
*/

/*  Función correcta
function suma(numero1,numero2){
    let numero3 = numero1 + numero2
    return numero3
}
let numero1 = parseFloat(prompt("Ingrese un número"))
let numero2 = parseFloat(prompt("Ingrese un número"))
*/
/* Declaración correcta! 
let resultado = suma(numero1,numero2) 
console.log(resultado)
*/

//console.log(numero3) // Error numero3 es variable local de la función

/*** EJEMPLO FUNCIONES ANIDADAS
const IVA = 1.21

function calcularIVA(producto, iva2) {
    return producto * iva2
}

function sumarIVA(producto) {
    const IVA2 = 1.30
    let resultado = calcularIVA(producto, IVA2)
    return resultado
}

console.log(sumarIVA(100))
console.log(IVA2)
*/


/********Funcinoes Anónimas  **********/

//const suma = function(numero1, numero2) { return numero1 + numero2}

/* 
const suma = (numero1,numero2) => numero1 + numero2 //Función abreviada, ahorro codigo Arrow function 

const resta = function(numero1, numero2) { return numero1 - numero2}
const division = function(numero1,numero2) { return numero1 / numero2}
const multiplicacion = function(numero1, numero2) { return numero1 * numero2}

console.log(suma(5,10))
console.log(resta(5,10))
console.log(division(5,10))
console.log(multiplicacion(5,10))
*/
