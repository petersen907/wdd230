
const LAT = "64.8378";
const LON = "-147.7164";
const APIKEY = "ef61c2c7cae46629c60ed0557060897e";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${APIKEY}&units=imperial`;
function showWeather(obj){
    let currenttemp = document.querySelector('#current-temp');
    let iconpath = document.querySelector('#icon-src');
    let weathericon = document.querySelector('#weathericon');
    let figurecaption = document.querySelector('#figcaption');
    const iconURL = `http://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`;
    currenttemp.textContent = obj.main.temp;
    iconpath.textContent = iconURL;
    weathericon.setAttribute("src", iconURL);
    weathericon.setAttribute("alt", obj.weather[0].description);
    figurecaption.textContent = obj.weather[0].main;
}
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    showWeather(jsObject);
  });






