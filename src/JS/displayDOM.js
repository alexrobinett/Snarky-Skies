/* eslint-disable no-plusplus */

import { currentMessages, returnMessage } from "./messages";

function displayCurrentCondition(weatherData, location, messages) {
  // // Dom Cache
  const currentCityName = document.getElementById('city-name');
  const currentWeatherIcon = document.getElementById('current-weather-icon');
  const currentTemp = document.getElementById('current-temp');
  const feelsTemp = document.getElementById('feels-temp');
  const currentWeatherDescription = document.getElementById(
    'current-description'
  );
  const currentMessage = document.getElementById('current-message');

  console.log(weatherData);
  currentCityName.innerText = location.city;
  currentTemp.innerText = weatherData.temp;
  feelsTemp.innerText = `feels ${weatherData.feel}`;
  currentWeatherDescription.innerText = weatherData.main;
  currentMessage.innerText = returnMessage(weatherData, messages);
  if(weatherData.isDayLight === true && weatherData.main === "Clear" ){
    currentWeatherIcon.classList.add(`wi-owm-day-${weatherData.id}`,"text-warning");
  }else  if(weatherData.isDayLight === true){
    currentWeatherIcon.classList.add(`wi-owm-day-${weatherData.id}`,"text-secondary");
  }else if (weatherData.isDayLight === false){
    currentWeatherIcon.classList.add(`wi-owm-night-${weatherData.id}`,"text-secondary");
  }
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

function displayMinutePrecipitationData(weatherData) {
  const minutePrecipContainer = document.getElementById(
    'minute-pricip-container'
  );
  for (let i = 0; i < weatherData.length; i++) {
    const progressElement = document.createElement('progress');

    progressElement.setAttribute(
      'class',
      'bg-slate-100/15  progress progress-info w-36 -rotate-90 -translate-x-[4.20rem]'
    );

    progressElement.setAttribute('value', `${weatherData[i]}`);
    progressElement.setAttribute('max', '15');

    minutePrecipContainer.appendChild(progressElement);
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

export {
  displayCurrentCondition,
  displaySevenDayForecast,
  displayCardsData,
  displayMinutePrecipitationData,
  clearDisplay,
  shouldMinuteCardDisplay,
};
