const pokemonList = document.querySelector("#pokemon-list");
const searchBar = document.querySelector("#search-bar");
const counter = document.querySelector("#counter");

let allPokemon = [];

// De API geeft een object terug met een 'results' array
// Elk item heeft een 'name' property
// Gebruik console.log(data) om de structuur te bekijken

// De afbeelding van een Pokémon staat op:
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{id}.png
// Sla het id op via de index bij het laden: { ...pokemon, id: index + 1 }

fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then(response => response.json())
  .then(data => {
    console.log(data.results); // Bekijk de structuur
    for (pokemon of data.results){
      pokemonList.innerHTML += `
      <h2>${pokemon.name}</h2>
      <img src="${pokemon.image}" alt="${pokemon.name}">`
    }

allPokemon = data.results.map ((pokemon, index) => {
  return{
  ...pokemon,
  id: index + 1
  };
});

function renderPokemon(pokemonArray) {
    pokemonList.innerHTML = "";

    pokemonArray.forEach(pokemon => {
        pokemonList.innerHTML += `
            <div>
                <h2>${pokemon.name}</h2>
                <img 
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"
                    alt="${pokemon.name}"
                >
            </div>
        `;
    });

    counter.textContent = pokemonArray.length + " Pokémon gevonden";
}

searchBar.addEventListener("input", () =>{
  const searchValue = searchBar.value.toLowerCase();

  const filteredPokemon = allPokemon.filter(pokemon =>
    pokemon.name.includes(searchValue)
  );
  renderPokemon(filteredPokemon)
});
    // Sla data.results op in allPokemon, voeg het id toe via de index
    // Toon alle Pokémon in #pokemon-list met naam en afbeelding
    // Toon het aantal in #counter
  })
  .catch(error => console.error('Fout:', error));

// Voeg een event listener toe aan #search-bar
// Filter allPokemon op naam en herrender de lijst
