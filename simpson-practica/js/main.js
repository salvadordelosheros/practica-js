// completar las variables para que el programa funcione

window.addEventListener('load', function() {


    let titulo = document.querySelector('#titulo');
    let saludo = document.querySelector('#saludo');
    let span = document.querySelector('.bienvenida span');
    titulo.addEventListener("mouseover", function(){
        let nombre = prompt("¿CÓMO TE LLAMÁS?");
        if(nombre == ''){
            saludo.innerText = `BIENVENID@`
        } 
        else{
            saludo.innerText = `BIENVENID@ ${nombre}`
        }
        saludo.style.textTransform= 'uppercase';
        titulo.style.display = 'none';
        span.style.display = 'inline';
        });

     
    
    
   

 
 
    /* Capturar pesonajes + Asignarles a cada uno su evento correspondiente, 
    así como también su funcionalidad */
    

    /* Asignarle evento a la variable boton */
   // let boton = ;
 
 
 }) 