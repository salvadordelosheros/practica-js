//a
let usuario = prompt("Ingrese su nacionalidad");
let usuario2 = prompt("¿Cual es su profesion?");
let kmUsuario = prompt("¿Cuantos kms camina por dia?");

//b
function filosofoHipster(usuario, usuario2, kmUsuario){
    if(usuario == "Argentino" && usuario2 == "Musico" && kmUsuario >= 2){
        return "Soy un filosofo hipster";
} else{
    return "Aun no soy filosofo hipster";
}
}
console.log(filosofoHipster(usuario, usuario2, kmUsuario));
