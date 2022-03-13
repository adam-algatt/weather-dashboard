
var detailedUi = document.getElementById("detailed-forecast-list");


function generateDetailedListItem(text) {
    let li = document.createElement('li'); 
    //let append = detailedUl.appendChild('li'); 
    li.textContent = text; 
    return li; 
};



function detailedForecast(obj){
let li = document.createElement('li'); 
//let append = detailedUl.appendChild('li'); 

for (var val in obj) {
    let prop = (`${property}: ${object[property]}`);
detailedUi.appendChild(generateDetailedListItem(val));
};

};




var forecastObj = {};


function forecast(data) {
//     console.log(data);
//     console.log('temperature:', data.data[0].temp);
//     console.log('description:', data.data[0].weather.description);
//     // console.log(data.data[0].temp);
console.log(data);
    let description = data.current.weather[0].description;
    let temp = data.current.temp + " F";
    let windSpeed = data.current.wind_speed + "mph"; 
    let humidity = data.current.humidity + '%';
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







fetch("https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=d32ca2dfefb3211c96c727588cce960f")
.then(response => response.json())
   .then(data => forecast(data));