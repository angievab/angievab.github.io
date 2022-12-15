function getJson(url) {
    return fetch(url)
    .then(function(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        } else {
            return response.json();
        }
    })
    .catch(function(error){
        console.log(error);
    });
}

function revealDetails(e) {
    getPokemonDetails(e.target.getAttribute("data-url"));
}

function pokemonFromApi() {
    getJson("https://pokeapi.co/api/v2/type/10/").then(function(data) {
        console.log(data);
        var type = data["name"];
        var pokelist = document.getElementById("pokelist");
        document.getElementById("type").innerHTML = type;
        data["pokemon"].forEach(function(value) {
            let item = document.createElement("li");
            item.innerHTML = `<li data-url='${value.pokemon.url}'>
                ${value.pokemon.name}</li>`;
            pokelist.appendChild(item);
        });
        pokelist.addEventListener("click", revealDetails);
    });
}

function getPokemonDetails(url) {
    getJson(url).then(function(data) {
        SelectPokemon(data);
    });
}

function LoadingData(){
    pokemonFromApi();
    
    document.getElementById("listbox").style.display  = "block";
    document.getElementById("detailsbox").style.display  = "none";
}

function SelectPokemon(data){
   
    document.getElementById("listbox").style.display  = "none";
    document.getElementById("detailsbox").style.display  = "block";
    document.getElementById("name").innerHTML = data.name;
    document.getElementById("idPoke").innerHTML = data.id;
    document.getElementById("pokeimg").src = data.sprites.front_default;
    
}

LoadingData();

const backButton = document.getElementById("back");
backButton.addEventListener("click", LoadingData);