
function setwindchill(temp, windspeed){
// References to DOM elements
let tempobj = document.querySelector("#temperature");
let windspeedobj = document.querySelector("#windspeed");
let windchillobj = document.querySelector("#windchill");

// Calculate windspeed if necessary
let windchillmsg = "N/A";

if (temp <= 50 && windspeed > 3){
    let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));
    windchillmsg = `${chill}&deg;`;
}

// Populate the DOM stuff
tempobj.textContent = temp;
windspeedobj.textContent = windspeed;
windchillobj.innerHTML = windchillmsg;
}

setwindchill(39, 10);