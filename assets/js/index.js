
var detailedUi = document.getElementById("detailed-forecast-list");
var fiveDay = []; 

//function to populate 5 day forecast html elements
function populateFiveDayForecast(obj) {
let dailyWeather = obj.daily;
for (i = 0; i < dailyWeather.length; i++) {
  let forecast = {}; 
  let description = dailyWeather[i].weather[0].description;
  let temp = dailyWeather[i].temp.day + " F";
  let windSpeed = dailyWeather[i].wind_speed + " mph"; 
  let humidity = dailyWeather[i].humidity + ' %';
  Object.assign(forecast, {
    'description': description,
    'temperature': temp,
    'wind': windSpeed,
   'humidity': humidity,
  });
fiveDay.push(forecast);
forecast = {};console.log();
};


}; 
function generateDetailedListItem(text) {
    let li = document.createElement('li'); 
    //let append = detailedUl.appendChild('li'); 
    li.textContent = text; 
    return li; 
};



function detailedForecast(obj){
let li = document.createElement('li'); 
//let append = detailedUl.appendChild('li'); 

for (var [key, value] of Object.entries(forecastObj)) {
    let prop = `${key}: ${value}`;
detailedUi.appendChild(generateDetailedListItem(prop));
};

};




var forecastObj = {};


function forecast(data) {
populateFiveDayForecast(data);
console.log(data);
    let description = data.current.weather[0].description;
    let temp = data.current.temp + " F";
    let windSpeed = data.current.wind_speed + " mph"; 
    let humidity = data.current.humidity + ' %';
    let uvIndex = data.current.uvi; 
    Object.assign(forecastObj, {
      'description': description,
      'temperature': temp,
      'wind': windSpeed,
     'humidity': humidity,
     'UV': uvIndex
    });
     console.log(forecastObj);
    //  injectHtml(forecastObj);
    detailedForecast(forecastObj);
    return forecastObj;
  };







fetch("https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&units=imperial&exclude=hourly,minutely&appid=d32ca2dfefb3211c96c727588cce960f")
.then(response => response.json())
   .then(data => forecast(data));