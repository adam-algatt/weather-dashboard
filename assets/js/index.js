// const forecast = require('./Forecast'); 
const searchForm = document.getElementById('city');
let input = document.getElementById('autocomplete');
let autocomplete = new google.maps.places.Autocomplete(input, {types: ["geocode"]});
import { weatherData } from "./Weather.js";



var detailedUi = document.getElementById("detailed-forecast-list");
var fiveDay = []; 

function createFiveDayEls () {

};


//function to populate 5 day forecast html elements
function populateFiveDayForecast(data) {

  let weatherForecast = {}; 
  let fiveDay = [];
  let daily = data.daily;
// map over api data, creating a new object for each day 
daily.map((el) => {
  Object.assign(weatherForecast, {
    'description': el.weather[0].description,
    'temperature': el.temp.day,
    'wind': `${el.wind_speed} mph`,
   'humidity': `${el.humidity}%`,
   'icon': el.weather[0].icon,
  });
  // console.log(el.humidity, el.weather, 'tits');
  fiveDay.push(weatherForecast);
  weatherForecast = {};
})
console.log(fiveDay);

// let div = document.createElement('div'); 
// div.setAttribute('id', 'fiveDayContainer');
// let ul = document.createElement('ul'); 
// ul.setAttribute('id', 'fiveDayList');
// let fiveDayDivs = ['day-one', 'day-two', 'day-three', 'day-four', 'day-five'];

// let container = document.getElementById('fiveDayContainer');
// container.appendChild('ul');
};

function generateDetailedListItem(text) {
    let li = document.createElement('li'); 
    //let append = detailedUl.appendChild('li'); 
    li.textContent = text; 
    return li; 
};



function detailedForecast(obj){
for (var [key, value] of Object.entries(forecastObj)) {
    let prop = `${key}: ${value}`;
detailedUi.appendChild(generateDetailedListItem(prop));
};

};




var forecastObj = {};


// function forecast(data) {
// // populateFiveDayForecast(data);
// console.log(data);
//     let description = data.current.weather[0].description;
//     let temp = data.current.temp + " F";
//     let windSpeed = data.current.wind_speed + " mph"; 
//     let humidity = data.current.humidity + ' %';
//     let uvIndex = data.current.uvi; 
//     Object.assign(forecastObj, {
//       'description': description,
//       'temperature': temp,
//       'wind': windSpeed,
//      'humidity': humidity,
//      'UV': uvIndex
//     });
//      console.log(forecastObj);
//     //  injectHtml(forecastObj);
//     // detailedForecast(forecastObj);
//     return forecastObj;
//   };

// function getWeatherData (url) {
// fetch(url)
// .then(response => response.json())
//    .then(data => console.log(data))//forecast(data));
// };
const searchHistory = $('#search-history');
const historyList = $('#history-list');

//click event for all saved weather li's
searchHistory.on('click', 'li', function(e) {


})

function populateHistory(){

// weatherStorage.forEach( weatherItem =>{
//  let savedPlace = `<li class=${weatherItem.lng} id=${weatherItem.lat}>${weatherItem.name}</li>`
//   historyList.append(savedPlace)
// })

}



autocomplete.addListener("place_changed", function() {
  let placeResult = autocomplete.getPlace();
  let name = placeResult.name;
let coord = {}; 

  // adds geographic coordinates from google autoselect location
  // let location = placeResult.geometry.location;
  let location = placeResult.geometry.location;
  console.log(name);

  //tidying up returned data
  location = JSON.stringify({location})
  location = JSON.parse(location);

//making coords only one decimal place
coord.name = name;
coord.lat = location.location.lat.toFixed(1);
coord.lng = location.location.lng.toFixed(1);
console.log(coord);
let weatherStorage = JSON.parse(window.localStorage.getItem('weather')) || [];

weatherStorage.push(coord);
window.localStorage.setItem('weather', JSON.stringify(coord));
// weatherStorage.sort((a, b) => {a.name - b.name});
// weatherStorage.forEach( weatherItem =>{
//   let savedPlace = `<li class=${weatherItem.lng} id=${weatherItem.lat}>${weatherItem.name}</li>`
//    historyList.append(savedPlace)
//  })

// let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lng}&exclude=current,minutely,hourly,alerts&units=imperial&appid=d32ca2dfefb3211c96c727588cce960f`;
// getWeatherData(url);
});
// populateHistory();

populateFiveDayForecast(weatherData);
// let transferScore = JSON.parse(window.localStorage.getItem('transfer')) || [];
// transfer.push(score);
// window.localStorage.setItem('transfer', JSON.stringify(score));