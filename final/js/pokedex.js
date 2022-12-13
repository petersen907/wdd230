const requestURL = './data/data.json';

function displayPokemon(pokemon) {  // Create elements to add to the document
    let card = document.createElement('section');
    card.innerHTML = `
        <img src="${pokemon.imageURL}" alt="character image">
        <div class="cardinfo">
          <p>${pokemon.name} ${pokemon.number}</p>
          <p>Type: ${pokemon.type}</p>
          <p>Ability: ${pokemon.abilities}</p>
          <p>Resource: <a href="${pokemon.websiteURL}">${pokemon.websiteURL}</a></p>
        </div>`;
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    let pokemon = jsonObject["pokemon"];
    pokemon.forEach(displayPokemon);
  });