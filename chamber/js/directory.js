
let cardselector = document.querySelector("#cardselect");
let listselector = document.querySelector("#listselect");
let cardview = document.querySelector("#cardview");
let listview = document.querySelector("#listview");

cardselector.addEventListener('click', ()=>{
    cardview.style.display='grid';
    listview.style.display='none';
    cardselector.style.opacity=1.0;
    listselector.style.opacity=0.5;
});

listselector.addEventListener('click', ()=>{
    cardview.style.display='none';
    listview.style.display='block';
    cardselector.style.opacity=0.5;
    listselector.style.opacity=1.0;
});

function displayCard(card){
    let cardview = document.querySelector("#cardview");
    let cardelt = document.querySelector("div");
    cardelt.innerHTML=`<img src="${card.imageURL}">
        <p>${card.street} ${card.citystatezip}</p>
        <p>${card.phone}</p>
        <p><a href="${card.websiteURL}">${card.websiteURL}</a></p>`;
    cardview.appendChild(cardelt);
};
function displayList(list){
    // let listview = document.querySelector("#listview");
    let listelt = document.querySelector("tr");
    listelt.innerHTML=`
        <td>${list.name}</td>
        <td>${list.street} ${list.citystatezip}</td>
        <td>${list.phone}</td>
        <td><a href=${list.websiteURL}>${list.websiteURL}</td>`;
    document.querySelector("#listview table").appendChild(listelt);
};

const requestURL = "./data/directory.json";

fetch(requestURL)
  .then((response) => {
    return response.json();
  })
  .then((jsonObject) => {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const bizlist = jsonObject["businesses"];
    bizlist.forEach(displayCard);
    bizlist.forEach(displayList);
  });