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

import { currentMessages } from './JS/messages';

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
let nextHourRain = willItRainNextHour(await rawWeatherData);
let sevenDayWeather = GetDailyWeather(await rawWeatherData);
let minuteDataHalf = combineMinutes(await rawWeatherData);
const messages = currentMessages(currentWeather)

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
  displayCurrentCondition(currentWeather, userLocation, messages);
  displaySevenDayForecast(sevenDayWeather);
  displayCardsData(currentWeather);
  displayMinutePrecipitationData(minuteDataHalf);
  shouldMinuteCardDisplay(nextHourRain);
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
  displayCurrentCondition(currentWeather, userLocation, messages);
  displaySevenDayForecast(sevenDayWeather);
  displayCardsData(currentWeather);
  displayMinutePrecipitationData(minuteDataHalf);
  shouldMinuteCardDisplay(nextHourRain);
});

displayCurrentCondition(currentWeather, userLocation, messages);
displaySevenDayForecast(sevenDayWeather);
displayCardsData(currentWeather);
displayMinutePrecipitationData(minuteDataHalf);
shouldMinuteCardDisplay(nextHourRain);


export {};
