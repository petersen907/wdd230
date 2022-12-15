const requestURL = './data/data.json';

// First check to see if we need to initialize local storage with an empty array
const LIKES_KEY = "pokemon-likes";

function initPokemonLikes(){
    let likes_string = localStorage.getItem(LIKES_KEY);
    if (likes_string==null){
        likes_string="[]";
        localStorage.setItem(LIKES_KEY, likes_string);
    }
}

function displayPokemon(pokemon) {  // Create elements to add to the document
    let card = document.createElement('section');
    card.innerHTML = `
        <a href="${pokemon.websiteURL}" target="_blank"><img src="${pokemon.imageURL}" alt="character image"></a>
        <div class="cardinfo">
          <p>${pokemon.name} ${pokemon.number}</p>
          <p>Type: ${pokemon.type}</p>
          <p>Ability: ${pokemon.abilities}</p>
          <p>Resource: <a href="${pokemon.websiteURL}">${pokemon.websiteURL}</a></p>
          <input class="mycheck" id="${pokemon.number}" type="checkbox" onclick="likePokemon(this);"> Like This Pokemon!
        </div>`;
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }

// This function handles when a user checks an individual checkbox
// First, it updates the list of "liked" temples by either adding or removing it
// depending on if the box is checked or unchecked.
// push adds an item to a list
// splice removes an item from a list.
// Finally, the new list is put into local storage for later use. 
function likePokemon(item){
  let likes_string = localStorage.getItem(LIKES_KEY);
  let likeslist = JSON.parse(likes_string);
  if (item.checked){
      if (!likeslist.includes(item.id)){
          likeslist.push(item.id);
      }
  }
  else{
      if (likeslist.includes(item.id)){
          likeslist.splice(likeslist.indexOf(item.id), 1);
      }
  }
  localStorage.setItem(LIKES_KEY, JSON.stringify(likeslist));
}

// This function checks an individual box for a like
function displayLike(item){
  let obj = document.getElementById(item);
  obj.checked = true;
}
initPokemonLikes();

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    let pokemon = jsonObject["pokemon"];
    pokemon.forEach(displayPokemon)
  })
    .then(() => {
      // Turn the string value from local storage into a Java array
      let likes_string = localStorage.getItem(LIKES_KEY);
      let likeslist = JSON.parse(likes_string);            

      // Set the likes
      likeslist.forEach(displayLike);
  });
  