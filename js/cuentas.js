//a
let numero = prompt("Ingrese su numero");
let numero2 = prompt("Ingresa otro numero");
//b
function multiplicar(numero, numero2){
 const resultado = numero * numero2;
    return `El resultado de multiplicar ${numero} y ${numero2} es: ${resultado}`;
}
console.log(multiplicar(numero, numero2));