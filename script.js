// const inputBox = document.querySelector('.input-box');
// const searchBtn =  document.querySelector('#searchBtn');
// const weather_img = document.querySelector('.weather-img');
// const tempurature = document.querySelector('.temprature');
// const description = document.querySelector('.description');
// const humidity = document.querySelector('#humidity');
// const wind_speed = document.querySelector('#wind_speed');
// const location_not_found = document.querySelector('.location-not-found'); 
// const weather_body = document.querySelector('.weather-body');


// async function checkWeather(city){
//   const api_key = '8ae94e0ccdbe6f35945ab442a56d7ea5';
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

//   const weather_data = await fetch(url).then(response => response.json());
  
//  if(weather_data.cod === '404'){
//   // confirm('Error');
//   location_not_found.style.display = 'flex';
//   weather_body.style.display = "none";
  
//   return;
//  }

//  location_not_found.style.display = 'none';
//  weather_body.style.display = "flex";

//   tempurature.innerHTML = Math.round(weather_data.main.temp - 273.15) + '<sup>°C</sup>';
//   description.innerHTML = weather_data.weather[0].description;
//   humidity.innerHTML = weather_data.main.humidity +'%';
//   wind_speed.innerHTML = weather_data.wind.speed + 'Km/H';

//   switch(weather_data.weather[0].main){
//     case 'Clouds': weather_img.src = './assets/cloud.png';
//     break;
//     case 'Clear': weather_img.src = './assets/clear.png';
//     break;
//     case 'Rain': weather_img.src = './assets/rain.png';
//     break;
//     case 'Mist': weather_img.src = './assets/mist.png';
//     break;
//     case 'Snow': weather_img.src = './assets/snow.png';
//     break;
//   }


// } 

// searchBtn.addEventListener('click',() =>{
//   checkWeather(inputBox.value);
// })
document.addEventListener("DOMContentLoaded", function() {
    function getResult() {
        // Get all rows in the results table
        let rows = document.querySelectorAll("table tbody tr");

        rows.forEach(row => {
            let nameColumn = row.querySelector("td:first-child"); // First column contains the course name
            
            if (nameColumn && nameColumn.innerText.includes("Master of Computer Application (MCA)(2024 Pattern(NEP 2020)) Oct-2024")) {
                let button = row.querySelector("input[type='button']");
                if (button) {
                    console.log("Found the target row, clicking the button...");
                    button.click(); // Simulate button click
                } else {
                    console.error("Button not found in the target row.");
                }
            }
        });
    }

    // Wait for the page to fully load before executing
    setTimeout(getResult, 3000); // Delay to ensure the table loads properly
});
