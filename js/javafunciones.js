function rectangulo(altura, ancho){
    return altura * ancho
}
let num1 = 3;
let num2 = 2;
let area = rectangulo(num1 , num2)
console.log(area)

function triangulo(base, altura1){
    return base * altura1 / 2
}
let num3 = 3;
let num4 = 2;
const areaTr = triangulo(num3, num4)
console.log(areaTr)

function largoDelArray(array){
    return array.length
}

function cantidadDeLetras(palabra){
    return palabra.length
}
const letrasMessi = cantidadDeLetras("Messi")
console.log(letrasMessi)

function dolarHoy(precioEnPesosArgentinos){
    let factorDeCambio = 0.0011
        return precioEnPesosArgentinos * factorDeCambio
}
const resultado1 = dolarHoy(2)
console.log(resultado1)

function precioFinal(precio){
    let iva = 0.21
    return precio * iva
}
const resultado2 = precioFinal(86)
console.log(resultado2)

function mitad(numero){
    const mitimiti = 2
    return numero / mitimiti
}
const mitad1 = mitad(40)
console.log(mitad1)

function diaSegunNumero(array, numero){
    const array1 = array;
    const array2 = numero;
    return array1[array2]
}
const arrayDias = diaSegunNumero(["martes", "jueves", "sabado", "domingo"], 2)
console.log(arrayDias)

function siguiente(numero) {
    return numero + 1;
  }
  
  function doble(numero) {
    return 2 * numero;
  }
  
  function siguienteDelDoble(numero) {
     return siguiente(doble(numero));
  }

function anterior(numero){
    const numeroResta = numero - 1
    return numeroResta
}
const valores = anterior(5)
console.log(valores)

function triple(numero){
    const tripleta = numero * 3
    return tripleta
}
const multip = triple(9)
console.log(multip)

function anteriorDelTriple(numero){
    const triplete = anterior(triple(numero))
    return triplete
}
const hatTriki = anteriorDelTriple(6)
console.log(hatTriki)