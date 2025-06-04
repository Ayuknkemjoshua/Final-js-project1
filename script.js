const apiKey ="ee6a139573c8a27bf6a305941efd7846";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";


const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(" .search button");
const weatherIcon = document.querySelector(".weather-icon");
const errorMessage = document.querySelector(".error");


async function checkWeather(city) {
const response =await fetch(apiUrl + city + `&appid=${apiKey}`);
if(response.status == 404){
document.querySelector(".error").style.display = "block";
document.querySelector(".weather").style.display = "none";
}else{
    let data = await response.json();  

 console.log(data) 

document.querySelector(".city").innerHTML= data.name;
document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°C";
document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
document.querySelector(".wind").innerHTML= data.wind.speed + "km/h";

 if(data.weather[0].main == "Clouds"){
   weatherIcon.src = "images/clouds.png"
 }
else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "images/clear-sky.png"
}
else if(data.weather[0].main == "Drizzel"){
    weatherIcon.src = "images/rainy-day.png"
}
else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "images/fog.png"
}
else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "images/heavy-rain.png"
}

document.querySelector(".weather").style.display= "block";
document.querySelector(".error").style.display = "none";
}
};
searchBtn.addEventListener("click", ()=> {
checkWeather(searchInput.value);
if(searchInput.value);
});






