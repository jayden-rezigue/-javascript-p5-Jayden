const karakters = document.querySelector ('#characters')

fetch('https://rickandmortyapi.com/api/character')
  .then(r => r.json())
  .then(data => {
    console.log(data.results); // Bekijk de structuur
    for (character of data.results){
      karakters.innerHTML += `
      <h2>${character.name}</h2>
      <img src="${character.image}" alt="${character.name}">`
    }
    // De karakters zitten in data.results
    // Elk karakter heeft een 'name' en 'image' property
    // Toon de naam en afbeelding van elk karakter als <article> in #characters
  })
  .catch(error => console.error('Fout:', error));
