//b
let nombre = prompt("Ingrese su nombre");
console.log(nombre);
//c
let edad = prompt("Ingrese su edad");
console.log(edad);
//d
let fanDeportes = confirm("¿Te gutan los deportes?");
console.log(fanDeportes);
//e
let leyenda = alert(`Muchas gracias ${nombre} por responder nuestras preguntas`);
//f
let usuario = {
    nombre: nombre,
    edad: edad,
    fanDeportes: fanDeportes,
    deportistaProfesional: function() {
        if(this.fanDeportes == true) {
            return "Si, soy fan de los deportes";
        } else{ 
        return "No soy tan fan de los deportes";
    }
}
};
console.log(usuario.deportistaProfesional());

