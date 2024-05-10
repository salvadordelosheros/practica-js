function rectangulo(altura, ancho){
    return altura * ancho
}
let num1 = 3;
let num2 = 2;
let area = rectangulo(num1 , num2)
console.log(area)

function triangulo(base, altura1){
    return base * altura1
}

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