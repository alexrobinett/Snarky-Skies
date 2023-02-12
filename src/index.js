import './style.css'
import './weather-icons.css';
import './weather-icons-wind.css';

import {
  getWeather,
  getGeoInfo,
  getCurrentConditionData,
  GetDailyWeather,
  willItRainNextHour,
  combineMinutes,
} from './JS/apiData';

import {
  removeSpaces,
  successUserPos,
  getUserCityValue,
  getInputLocation,
  getUserLocation,
} from './JS/helper';
import {
  displaySevenDayForecast,
  displayCurrentCondition,
  displayCardsData,
  displayMinutePrecipitationData,
  clearDisplay,
  shouldMinuteCardDisplay,
} from './JS/displayDOM';

const WEATHER_SEARCH_BUTTON = document.querySelector('#search-btn');
const UNITS_BTN = document.querySelector('#units-btn');

// navigator.geolocation.getCurrentPosition(successUserPos);

let measurementUnits = 'imperial';
let userLocation = await getUserLocation();
let rawWeatherData = await updateWeather();
let currentWeather = getCurrentConditionData(
  await rawWeatherData,
  measurementUnits
);
const nextHourRain = willItRainNextHour(await rawWeatherData);
let sevenDayWeather = GetDailyWeather(await rawWeatherData);
let minuteDataHalf = combineMinutes(await rawWeatherData);

const minutePrecipContainer = document.getElementById(
  'minute-pricip-container'
);
const forecastContainer = document.getElementById('Seven-Day-Container');

async function updateWeather() {
  const weatherData = await getWeather(
    userLocation.lat,
    userLocation.lng,
    measurementUnits
  );
  return weatherData;
}

WEATHER_SEARCH_BUTTON.addEventListener('click', async (e) => {
  userLocation = await getInputLocation(await getUserCityValue());

  rawWeatherData = await updateWeather();
  currentWeather = getCurrentConditionData(
    await rawWeatherData,
    measurementUnits
  );
  sevenDayWeather = GetDailyWeather(await rawWeatherData);
  minuteDataHalf = combineMinutes(await rawWeatherData);

  clearDisplay(minutePrecipContainer);
  clearDisplay(forecastContainer);
  displayCurrentCondition(currentWeather, userLocation);
  displaySevenDayForecast(sevenDayWeather);
  displayCardsData(currentWeather);
  displayMinutePrecipitationData(minuteDataHalf);
});

UNITS_BTN.addEventListener('click', async (e) => {
  measurementUnits === 'imperial'
    ? (measurementUnits = 'metric')
    : (measurementUnits = 'imperial');
  rawWeatherData = await updateWeather();
  currentWeather = getCurrentConditionData(
    await rawWeatherData,
    measurementUnits
  );
  sevenDayWeather = GetDailyWeather(await rawWeatherData);
  minuteDataHalf = combineMinutes(await rawWeatherData);

  clearDisplay(minutePrecipContainer);
  clearDisplay(forecastContainer);
  shouldMinuteCardDisplay(nextHourRain);
  displayCurrentCondition(currentWeather, userLocation);
  displaySevenDayForecast(sevenDayWeather);
  displayCardsData(currentWeather);
  displayMinutePrecipitationData(minuteDataHalf);
});

displayCurrentCondition(currentWeather, userLocation);
displaySevenDayForecast(sevenDayWeather);
displayCardsData(currentWeather);
displayMinutePrecipitationData(minuteDataHalf);
shouldMinuteCardDisplay(true);

export {};
