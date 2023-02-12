/* eslint-disable no-plusplus */

function displayCurrentCondition(weatherData, location) {
  // // Dom Cache
  const currentCityName = document.getElementById('city-name');
  const currentWeatherIcon = document.getElementById('current-weather-icon');
  const currentTemp = document.getElementById('current-temp');
  const feelsTemp = document.getElementById('feels-temp');
  const currentWeatherDescription = document.getElementById(
    'current-description'
  );
  const currentMessage = document.getElementById('current-message');
  console.log(currentWeatherIcon);
  console.log(weatherData);

  currentCityName.innerText = location.city;
  currentWeatherIcon.classList.add(`wi-owm-${weatherData.id}`);
  currentTemp.innerText = weatherData.temp;
  feelsTemp.innerText = `feels ${weatherData.feel}`;
  currentWeatherDescription.innerText = weatherData.main;
  currentMessage.innerText = `it's ${weatherData.temp} and ${weatherData.main}, you might want a rain jacket!`;
}

function displaySevenDayForecast(weatherData) {
  const forecastContainer = document.getElementById('Seven-Day-Container');

  for (let i = 0; i < weatherData.length; i++) {
    const card = document.createElement('div');
    card.className = 'bg-base-100 grid grid-cols-3 px-4 py-2 my-1 card';

    const day = document.createElement('span');
    day.className = 'self-center text-xl';
    day.innerText = `${weatherData[i].day}`;

    const icon = document.createElement('i');
    icon.className = `wi wi-owm-${weatherData[i].id} text-2xl self-center text-center`;

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
    card.appendChild(icon);
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
      'progress progress-info w-36 -rotate-90 -translate-x-[4.20rem]'
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
