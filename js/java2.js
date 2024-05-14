const misDatos = {
    nombre: "Salvador",
    apellido: "deLosHeros",
    dni: "46000001",
    comidasFavoritas: ["Asado", "Milanesa", "Sushi"],
    edad: "19",
    saludar: function() {
        return `Hola, mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años. Mi primer comida favorita es ${this.comidasFavoritas[0]}.`;
    }
}
console.log(misDatos.saludar());

const auto = {
 marca: "Ford",
 modelo: "Mustang",
 anio: "1965",
 color: "negro",
 posicion: 0,
 avanzar: function(n){
    this.posicion += n;
 },
 retroceder: function(n) {
    this.posicion -= n;
 }
}
auto.avanzar(22);
auto.retroceder(5);
console.log(auto.posicion);

const nuevoAuto = {
    marca: "Ford",
    modelo: "Mustang",
    anio: "1965",
    color: "negro",
    posicion: 0,
    moverse: function(n){
        this.posicion += n;
    }
}
nuevoAuto.moverse(10);
nuevoAuto.moverse(-2);
console.log(nuevoAuto.posicion);

const ironMan = {
    nombre: "Iron Man",
    equipo: "Avengers",
    poderes: ["Volar", "Lanzar misiles", "Disparar laser"],
    energia: 100,
    getPoder: function(Fn){
        this.energia -= 10;
        return `Poder Elegido de ${this.nombre}: ${this.poderes[0]}. Energía restante: ${this.energia}.`;
    }
}
console.log(ironMan.getPoder());

const Hulk = {
    nombre: "Hulk",
    equipo: "Avengers",
    poderes: ["Aplastar", "Gritar", "Golpear"],
    energia: 100,
    getPoder: function(Fn){
        this.energia -= 10;
        return `Poder Elegido de ${this.nombre}: ${this.poderes[2]}. Energía restante: ${this.energia}.`;
    }
}
console.log(Hulk.getPoder());

console.log(ironMan.getPoder(0));
console.log(Hulk.getPoder(2));
