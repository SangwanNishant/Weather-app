const apikey = 'e1e40f016bf274ba9c93a262e47bfa6b';

function displayWeather(data){
    const {name,main,weather} = data;
    document.getElementById('weatherDisplay').innerHTML= `
    <h2>${name}</h2>
    <p>Temperature: ${main.temp}°C</p>
    <p>Condition:${weather[0].description}</p>`
}

async function getweather(city) {
   try{
    const response = await  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`);
    if(!response.ok){
    throw new Error("City not found");
    }
    const data = await response.json();
    displayWeather(data);
   }
   catch (error){
    document.getElementById(weatherDisplay)
   }

}

document.getElementById("searchButton").addEventListener("click",()=>{
    const city = document.getElementById("city").value;
    if(city){
        getweather(city);
    }
});