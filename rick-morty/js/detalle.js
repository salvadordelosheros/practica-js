let queryString = location.search;
let ricky = new URLSearchParams(location.search);
let id = ricky.get("id");
console.log(id)
let section = document.querySelector(".detalles");
let url = `https://rickandmortyapi.com/api/character/${id}`;
fetch(url)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    section.innerHTML = `<article>
    <h1 class="status"> Name: ${data.name}</h1>
    <p class="status">Status:${data.status}</p> 
    <p class="species">Especie:${data.species}</p>
    <img src="${data.image}" alt="">
</article>`
})
.catch(function(error){
    console.log("El error es: " + error);
})
