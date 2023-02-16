import './style.css'
import './weather-icons.css';
import './weather-icons-wind.css';

import {
  getWeather,
  getCurrentConditionData,
  GetDailyWeather,
  willItRainNextHour,
  combineMinutes,
  getHourlyWeatherData,
  smoothRainData,
  minutesUntilRaining,
} from './JS/apiData';

import {
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
  displayHourlyWeather,
  displayLoading,
  displayWatermark
} from './JS/displayDOM';

import { currentMessages } from './JS/messages';

const WEATHER_SEARCH_BUTTON = document.querySelector('#search-btn');
const UNITS_BTN = document.querySelector('#units-btn');
let userLocation = await getUserLocation();
let measurementUnits = 'imperial';

async function updateWeather() {
  const weatherData = await getWeather(
    userLocation.lat,
    userLocation.lng,
    measurementUnits
  );
  return weatherData;
}

async function updateWeatherDisplay (){
  let rawWeatherData = await updateWeather();
  let currentWeather = getCurrentConditionData( await rawWeatherData,measurementUnits);
  let nextHourRain = willItRainNextHour(await rawWeatherData);
  let sevenDayWeather = GetDailyWeather(await rawWeatherData);
  let rainData = combineMinutes(await rawWeatherData);
  let minuteData = smoothRainData(rainData, 15)
  console.log(rainData)
  console.log(minuteData)
  let hourWeather = getHourlyWeatherData(await rawWeatherData);
  let messages = currentMessages(currentWeather)

  const minutePrecipContainer = document.getElementById('minute-pricip-container');
  const forecastContainerDays = document.getElementById('Seven-Day-Container');
  const forecastContainerHours = document.getElementById('hourly-container');
  const currentConditionContainer = document.getElementById("current-conditions-container")

  clearDisplay(minutePrecipContainer);
  clearDisplay(forecastContainerDays);
  clearDisplay(forecastContainerHours)
  clearDisplay(currentConditionContainer)

  displayCurrentCondition(currentWeather, userLocation, messages);
  displayHourlyWeather(hourWeather)
  displaySevenDayForecast(sevenDayWeather);
  displayCardsData(currentWeather);
  displayMinutePrecipitationData(minuteData, minutesUntilRaining(minuteData, 0.3),currentWeather);
  shouldMinuteCardDisplay(nextHourRain);
}




WEATHER_SEARCH_BUTTON.addEventListener('click', async (e) => {
  userLocation = await getInputLocation(await getUserCityValue());
  updateWeatherDisplay()
  displayLoading()


});

UNITS_BTN.addEventListener('click', async (e) => {
  measurementUnits === 'imperial'
    ? (measurementUnits = 'metric')
    : (measurementUnits = 'imperial');
    
    updateWeatherDisplay()
    displayLoading()
});

updateWeatherDisplay()
displayLoading()
displayWatermark();

export {};
