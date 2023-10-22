const searchButton = document.getElementById("search-btn");
searchButton.addEventListener("click", () => {
  const locationInput = document.getElementById("search").value;
  if (locationInput) {
    getWeather(locationInput);
  }
});
function getWeather(location) {
  var apiKey = "72f9eb839b3a817f12e975f834dc9d5a";
  var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
       document.getElementById("temperature").innerHTML = data.main.temp;
       document.getElementById("humidity").innerHTML = data.main.humidity;
       document.getElementById("wind-speed").innerHTML = data.wind.speed;
       document.getElementById("weather-description").innerHTML = data.weather[0].description;
       document.getElementById("latitude").innerHTML = data.coord.lat;
       document.getElementById("longitude").innerHTML = data.coord.lon; 
    })
    .catch((error) => {
      console.error("error fectching data: ", error);
      alert("error occured");
    }); ``
}
