/* eslint-disable no-plusplus */


import githubIcon from "../images/github-mark.png"
import { currentMessages, returnMessage } from "./messages";

function displayCurrentCondition(weatherData, location, messages) {
const currentConditionsContainer = document.getElementById("current-conditions-container")

// create the city name span element
const currentCityName = document.createElement('span');
currentCityName.id = 'city-name';
currentCityName.className = 'text-3xl text-center col-start-1 col-end-6 py-4 self-center';
currentCityName.textContent = location.city;

// create the first child div element
const firstChildDiv = document.createElement('div');
firstChildDiv.className = 'col-start-2 col-end-5 flex justify-evenly';

// create the icon div element
const iconDiv = document.createElement('div');
iconDiv.className = 'flex flex-col justify-evenly';
const currentWeatherIcon  = document.createElement('i');
currentWeatherIcon.id = 'current-weather-icon';
currentWeatherIcon.className = 'wi text-5xl';
if(weatherData.isDayLight === true && weatherData.main === "Clear" ){
  currentWeatherIcon.classList.add(`wi-owm-day-${weatherData.id}`,"text-warning");
}else  if(weatherData.isDayLight === true){
  currentWeatherIcon.classList.add(`wi-owm-day-${weatherData.id}`,"text-secondary");
}else if (weatherData.isDayLight === false){
  currentWeatherIcon.classList.add(`wi-owm-night-${weatherData.id}`,"text-secondary");

}else currentWeatherIcon.classList.add(`wi-owm-night-${weatherData.id}`,"text-secondary");
iconDiv.appendChild(currentWeatherIcon);


const currentWeatherDescription = document.createElement('span');
currentWeatherDescription.id = 'current-description';
currentWeatherDescription.className = 'text-center pt-1';
currentWeatherDescription.innerText = weatherData.main;
iconDiv.appendChild(currentWeatherDescription);

// create the temperature div element
const temperatureDiv = document.createElement('div');
temperatureDiv.className = 'flex flex-col justify-evenly';
const currentTemp = document.createElement('span');
currentTemp.id = 'current-temp';
currentTemp.className = 'text-5xl';
currentTemp.innerText = weatherData.temp;

const feelsTemp = document.createElement('span');
feelsTemp.id = 'feels-temp';
feelsTemp.className = 'pt-1.5';
feelsTemp.innerText = `feels ${weatherData.feel}`
temperatureDiv.appendChild(currentTemp);
temperatureDiv.appendChild(feelsTemp);

// add the icon and temperature divs to the first child div
firstChildDiv.appendChild(iconDiv);
firstChildDiv.appendChild(temperatureDiv);

// create the second child div element
const secondChildDiv = document.createElement('div');
secondChildDiv.className = 'col-start-2 col-end-5 flex py-5';
const currentMessage = document.createElement('p');
currentMessage.id = 'current-message';
currentMessage.className = 'text-center';
currentMessage.innerText = returnMessage(weatherData, messages);
secondChildDiv.appendChild(currentMessage);

// add the child elements to the parent element
currentConditionsContainer.appendChild(currentCityName);
currentConditionsContainer.appendChild(firstChildDiv);
currentConditionsContainer.appendChild(secondChildDiv);

}


function displaySevenDayForecast(weatherData) {
  const forecastContainer = document.getElementById('Seven-Day-Container');

  for (let i = 0; i < weatherData.length; i++) {
    const card = document.createElement('div');
    card.className = 'glass bg-slate-100/15 drop-shadow-lg grid grid-cols-3 px-4 py-2 my-2 card';

    const day = document.createElement('span');
    day.className = 'self-center text-xl';
    day.innerText = `${weatherData[i].day}`;

    const center = document.createElement('div');
    center.className = 'flex flex-col justify-evenly items-center mt-1';

    const icon = document.createElement('i');
    icon.className = `wi wi-owm-${weatherData[i].id} text-2xl self-center text-center`;

    const condition = document.createElement('span');
    condition.className = 'font-light text-sm pt-1';
    condition.innerText = `${weatherData[i].main}`;

    center.appendChild(icon);
    center.appendChild(condition);

    const temperature = document.createElement('div');
    temperature.className = 'flex flex-col items-end';

    const high = document.createElement('span');
    high.className = 'font-light';
    high.innerText = `H:${weatherData[i].highTemp}`;

    const low = document.createElement('span');
    low.className = 'font-light';
    low.innerText = `L:${weatherData[i].lowTemp}`;

    temperature.appendChild(high);
    temperature.appendChild(low);

    card.appendChild(day);
    card.appendChild(center);
    card.appendChild(temperature);

    forecastContainer.appendChild(card);
  }
}

function displayCardsData(weatherData) {
  const sunriseTime = document.getElementById('Sunrise-Time');
  const sunsetTime = document.getElementById('Sunset-Time');
  const chanceOfRainPercent = document.getElementById('Chance-Rain-Percent');
  const humidityPercent = document.getElementById('Humidity-Percent');
  const windDirectionSpeed = document.getElementById('Wind-Direction-Speed');
  const feelsTemp = document.getElementById('feels-like-card');
  const pressureData = document.getElementById('Pressure-Data');
  const uvIndex = document.getElementById('UV-Index-Data');
  const windDirectionIcon = document.getElementById('Wind-Direction-Icon');

  sunriseTime.innerText = weatherData.sunrise;
  sunsetTime.innerText = weatherData.sunset;
  chanceOfRainPercent.innerText = weatherData.chanceOfRain;
  humidityPercent.innerText = weatherData.humidity;
  windDirectionSpeed.innerText = `${weatherData.windDirection} ${weatherData.windSpeed}`;
  feelsTemp.innerText = weatherData.feel;
  pressureData.innerText = weatherData.pressure;
  uvIndex.innerText = weatherData.uvIndex;
  windDirectionIcon.classList.add(
    `wi-from-${weatherData.windDirection.toLowerCase()}`
  );
}

function displayMinutePrecipitationData(weatherData,currentWeather) {
  const nextHourMessage = document.getElementById("next-hour-message");
  const minutePrecipContainer = document.getElementById(
    'minute-pricip-container'
  );

  const maxValue = 
  nextHourMessage.innerText = `Next Hour: ${currentWeather.description}`;

  for (let i = 0; i < weatherData.length; i++) {
    const progressElement = document.createElement('progress');

    progressElement.setAttribute(
      'class',
      'bg-transparent progress progress-info w-36 -rotate-90 -translate-x-[4.40rem]'
    );

    progressElement.setAttribute('value', `${weatherData[i]}`);
    progressElement.setAttribute('max', `${Math.max(...weatherData) > 7.5 ? Math.max(...weatherData) : 7.5}`);

    minutePrecipContainer.appendChild(progressElement);
  }
}

function displayHourlyWeather(weatherData) {
  const hourlyContainer = document.getElementById(
    'hourly-container'
  );
  
  for (let i = 0; i < weatherData.length; i++) {
    const card = document.createElement('div');
    card.className = 'glass bg-slate-100/0 drop-shadow-lg grid grid-cols-4 px-4 py-2 my-2 card';

    const timeSpan = document.createElement('span');
    timeSpan.className = 'self-center text-md';
    timeSpan.textContent = `${weatherData[i].time}`;
    
    const weatherIcon = document.createElement('i');
    weatherIcon.className = `wi wi-owm-${weatherData[i].id} text-xl self-center text-center`;

    const temperatureDiv = document.createElement('div');
    temperatureDiv.className = 'flex flex-col items-center justify-center';
    const temperatureSpan = document.createElement('span');
    temperatureSpan.className = 'font-light';
    temperatureSpan.textContent = `${weatherData[i].temp}`;
    temperatureDiv.appendChild(temperatureSpan);

    const rainDiv = document.createElement('div');
    rainDiv.className = 'flex items-center justify-end';
    const rainIcon = document.createElement('i');
    rainIcon.className = 'wi wi-raindrops text-2xl self-center text-center px-2';
    const rainSpan = document.createElement('span');
    rainSpan.className = 'text-right';
    rainSpan.textContent = `${weatherData[i].chanceOfRain}%`;
    rainDiv.appendChild(rainIcon);
    rainDiv.appendChild(rainSpan);
    
    card.appendChild(timeSpan);
    card.appendChild(weatherIcon);
    card.appendChild(temperatureDiv);
    card.appendChild(rainDiv);
    hourlyContainer.appendChild(card);
  }
}

function clearDisplay(element) {
  element.innerHTML = '';
}

function shouldMinuteCardDisplay(isRain) {
  const minuteCard = document.getElementById('Precip-Card');
  if (isRain === false) {
    minuteCard.classList.add('hidden');
  } else if (isRain === true) {
    minuteCard.classList.remove('hidden');
  }
}

function displayLoading(){
  const weatherContainer = document.getElementById("weather-container")
  const loader = document.querySelector(".loader");
  weatherContainer.classList.add("animate-pulse")

  loader.classList.add("is-hidden")
  setTimeout(() => {
      weatherContainer.classList.remove("animate-pulse")
      loader.classList.add("hidden")
  }, 700);

}

function displayWatermark(){
  const waterMarkCTN = document.getElementById("alex-ctn")

  const text = document.createElement("span");
  text.innerText = "Made by Alex Robinett";
  text.classList.add("self-center");

  const link = document.createElement("a");
  link.href = "https://github.com/alexrobinett/Simple-Weather";
  link.classList.add("self-center");

  const image = document.createElement("img");
  image.src = githubIcon;
  image.alt = "";
  image.classList.add("w-4", "self-center", "ml-2");

  link.appendChild(image);
  waterMarkCTN.appendChild(text);
  waterMarkCTN.appendChild(link);

}


export {
  displayCurrentCondition,
  displaySevenDayForecast,
  displayCardsData,
  displayMinutePrecipitationData,
  clearDisplay,
  shouldMinuteCardDisplay,
  displayHourlyWeather,
  displayLoading,
  displayWatermark,
}
