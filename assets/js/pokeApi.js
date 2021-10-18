const API = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=00";

const getData = (api) => {
  return fetch(api)
    .then((response) => response.json())
    .then((data) => {
      fillData(data.results);
    })
    .catch((error) => {
      console.log("Error", error);
    });
};

const fillData = (data) => {
  let html = "";

  data.forEach((pokemon) => {
    return fetch(pokemon.url)
      .then((response) => response.json())
      .then((data) => {
        html += '<div class="col">';
        html += '<div class="card h-100 style="width: 12rem;">';
        html += `<img src="${data.sprites.other.dream_world.front_default}" class="card-img-top" widht= "190" height="240" alt="${data.name}"></img>`;
        html += '<div class="card-body">';
        html += `<h5 class="card-title">${data.name}</h5>`;
        html += `<p class="card-text">Status: ${data.weight}</p>`;
        html += `<p class="card-text">Specie: ${data.height}</p>`;
        html += "</div>";
        html += "</div>";
        html += "</div>";
        document.getElementById("dataPoke").innerHTML = html;
      });
  });
};

getData(API);
