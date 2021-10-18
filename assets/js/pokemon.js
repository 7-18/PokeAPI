const API = "https://pokeapi.co/api/v2/pokemon?limit=1&offset=149";

const getData = (api) => {
return fetch(api)
    .then((response) => response.json())
    .then((data) => {
    fillData(data);
    })
    .catch((error) => {
console.log("Error", error);
    });
};

const fillData = (data) => {
let html = "";

data.results.forEach((pokemon) => {
    return fetch(pokemon.url)
    .then((response) => response.json())
    .then((data) => {
        html += '<a href="album.html" style="text-decoration: none;">';
        html += '<div class="card bg-dark mb-3" style="width: 30rem;">';
        html += `<div class="card-header"><img src="${data.sprites.other.dream_world.front_default}" class="card-img-top" widht= "190" height="240" alt="${data.name}"></img></div>`;
        html += `<h3 class="card-title card-header text-white text-center" style="font-size: 40px;">${data.name}</h3>`;
        html += '<div class="card-body text-primary text-white d-inline-flex justify-content-around text-center" style="opacity: 0.8;">';
        html += `<p class="card-text"><span style="font-size: 20px;">HP</span><br>${data.stats[0].base_stat}</p>`;
        html += `<p class="card-text"><span style="font-size: 20px;">Ataque</span><br>${data.stats[1].base_stat}</p>`;
        html += `<p class="card-text"><span style="font-size: 20px;">Defensa</span><br>${data.stats[2].base_stat}</p>`;
        html += "</div>";
        html += "</div>";
        html += "</div>";
        html += "</a>";
        document.getElementById("dataPokemon").innerHTML = html;
});
});
};

getData(API);
