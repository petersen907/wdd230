
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
    currenttemp.textContent = Math.round(obj.main.temp);
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

  // Populate the DOM stuff
  tempobj.textContent = temp;
  windspeedobj.textContent = windspeed;
  windchillobj.innerHTML = windchillmsg;

  function setwindchill(temp, windspeed){
    // References to DOM elements
    let tempobj = document.querySelector("#current-temp");
    let windspeedobj = document.querySelector("#windspeed");
    let windchillobj = document.querySelector("#windchill");
    
    // Calculate windspeed if necessary
    let windchillmsg = "N/A";
    
    if (temp <= 50 && windspeed > 3){
        let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));
        windchillmsg = `${chill}&deg;`;
    }
  
    setwindchill(39, 10);

        if (weatherId >= 200 && weatherId < 531)
        {
            
                document.querySelector('#weathericon').setAttribute('src', 'images/rainy.jpeg');
            
        }
        else if (weatherId >= 600 && weatherId < 622)
        {
                document.querySelector('#weathericon').setAttribute('src', 'images/snowy.jpeg');
        }
        else if (weatherId >= 701 && weatherId < 781)
        {
            
                document.querySelector('#weathericon').setAttribute('src', 'images/fog.jpeg');
            
        }
        else if (weatherId >= 801 && weatherId < 805)
        {
           
                document.querySelector('#weathericon').setAttribute('src', 'images/cloudy.jpeg');
            
            
        }
        else if (weatherId == 800)
        {
           
                document.querySelector('#weathericon').setAttribute('src', 'images/sunny.jpeg');
            
            
        }
        else
        {
            document.querySelector('#weathericon').setAttribute('src', iconsrc);
        }};
