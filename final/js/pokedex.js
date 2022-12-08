const requestURL = './data/data.json';

function displayPokemon(pokemon) {  // Create elements to add to the document
    let card = document.createElement('section');
    card.innerHTML = `
        <img src="${card.imageURL}" alt="character image">
        <p>${card.name} ${card.number}</p>
        <p>${card.type}</p>
        <p>${card.abilities}</p>
        <p><a href="${card.websiteURL}">${card.websiteURL}</a></p>`;
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