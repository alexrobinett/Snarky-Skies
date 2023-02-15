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
  getHourlyWeatherData,
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
  displayHourlyWeather
} from './JS/displayDOM';

import { currentMessages } from './JS/messages';

const WEATHER_SEARCH_BUTTON = document.querySelector('#search-btn');
const UNITS_BTN = document.querySelector('#units-btn');


let measurementUnits = 'imperial';
let userLocation = await getUserLocation();
let rawWeatherData = await updateWeather();
let currentWeather = getCurrentConditionData(
  await rawWeatherData,
  measurementUnits
);
let nextHourRain = willItRainNextHour(await rawWeatherData);
let sevenDayWeather = GetDailyWeather(await rawWeatherData);
let minuteData = combineMinutes(await rawWeatherData);
let hourWeather = getHourlyWeatherData(await rawWeatherData);
let messages = currentMessages(currentWeather)

const minutePrecipContainer = document.getElementById(
  'minute-pricip-container'
);

const forecastContainerDays = document.getElementById('Seven-Day-Container');
const forecastContainerHours = document.getElementById('hourly-container');
const currentConditionContainer = document.getElementById("current-conditions-container")

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
  nextHourRain = willItRainNextHour(await rawWeatherData);
  sevenDayWeather = GetDailyWeather(await rawWeatherData);
  hourWeather = getHourlyWeatherData(await rawWeatherData);
  minuteData = combineMinutes(await rawWeatherData);
  messages = currentMessages(currentWeather)
  
  

  clearDisplay(minutePrecipContainer);
  clearDisplay(forecastContainerDays);
  clearDisplay(forecastContainerHours)
  clearDisplay(currentConditionContainer)

  displayCurrentCondition(currentWeather, userLocation, messages);
  displaySevenDayForecast(sevenDayWeather);
  displayHourlyWeather(hourWeather)
  displayCardsData(currentWeather);
  displayMinutePrecipitationData(minuteData, currentWeather);
  console.log(nextHourRain)
  console.log(currentWeather)
  console.log(rawWeatherData)
  console.log(willItRainNextHour(await rawWeatherData))
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
  nextHourRain = willItRainNextHour(await rawWeatherData);
  sevenDayWeather = GetDailyWeather(await rawWeatherData);
  hourWeather = getHourlyWeatherData(await rawWeatherData);
  minuteData = combineMinutes(await rawWeatherData);
  messages = currentMessages(currentWeather)

  clearDisplay(minutePrecipContainer);
  clearDisplay(forecastContainerDays);
  clearDisplay(forecastContainerHours)

  displayCurrentCondition(currentWeather, userLocation, messages);
  displaySevenDayForecast(sevenDayWeather);
  displayHourlyWeather(hourWeather)
  displayCardsData(currentWeather);
  displayMinutePrecipitationData(minuteData, currentWeather);
  shouldMinuteCardDisplay(nextHourRain);
});

displayCurrentCondition(currentWeather, userLocation, messages);
displayHourlyWeather(hourWeather)
displaySevenDayForecast(sevenDayWeather);
displayCardsData(currentWeather);
displayMinutePrecipitationData(minuteData, currentWeather);
shouldMinuteCardDisplay(nextHourRain);


export {};
