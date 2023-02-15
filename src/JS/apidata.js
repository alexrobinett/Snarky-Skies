/* eslint-disable no-plusplus */
/* eslint-disable prefer-const */
/* eslint-disable no-shadow */

import { removeSpaces } from './helper';

const WEATHER_KEYS = process.env.WEATHER_KEY;
const GOOGLE_KEYS = process.env.GOOG_KEY;

// let locationName = geoData.address_components[0].short_name;

async function getGeoInfo(location) {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${GOOGLE_KEYS}`
    );
    const data = await response.json();
    console.log(data);
    const userInputData = {};
    userInputData.lat = data.results[0].geometry.location.lat;
    userInputData.lng = data.results[0].geometry.location.lng;
    userInputData.city = data.results[0].address_components[0].short_name;
    console.log(userInputData);
    return userInputData;
  } catch (error) {
    console.log(error);
  }
}

async function getWeather(lat, lng, units = 'imperial') {
  let weatherData;
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lng}&appid=${WEATHER_KEYS}&units=${units}`
    );
    weatherData = await response.json();
    return weatherData;
  } catch (error) {
    console.log(error);
  }
}

function getCurrentConditionData(weather, units) {
  const currentConditionData = {};
  currentConditionData.description = weather.current.weather[0].description;
  currentConditionData.main = weather.current.weather[0].main;
  currentConditionData.icon = weather.current.weather[0].icon;
  currentConditionData.id = weather.current.weather[0].id;
  currentConditionData.temp = `${Math.trunc(weather.current.temp)}°`;
  currentConditionData.feel = `${Math.trunc(weather.current.feels_like)}°`;
  currentConditionData.windSpeed = `${Math.trunc(weather.current.wind_speed)} ${
    units === 'imperial' ? 'MPH' : 'KMH'
  }`;
  currentConditionData.windDirection = weather.current.wind_deg;
  currentConditionData.pressure = `${weather.current.pressure} hPa`;
  currentConditionData.humidity = `${weather.current.humidity}%`;
  currentConditionData.uvIndex = weather.current.uvi;
  currentConditionData.chanceOfRain = `${weather.daily[0].pop * 100}%`;
  currentConditionData.time = new Date(
    weather.current.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  currentConditionData.sunrise = new Date(
    weather.current.sunrise * 1000
  ).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  currentConditionData.sunset = new Date(
    weather.current.sunset * 1000
  ).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  currentConditionData.rawSunrise = weather.current.sunrise
  currentConditionData.rawSunset = weather.current.sunset
  currentConditionData.rawTime = weather.current.dt

  currentConditionData.isDayLight = null

  if (currentConditionData.rawTime > currentConditionData.rawSunrise && currentConditionData.rawTime < currentConditionData.rawSunset){
    currentConditionData.isDayLight = true;
  }else currentConditionData.isDayLight = false;

  if (
    (currentConditionData.windDirection > 0 &&
      currentConditionData.windDirection < 22.5) ||
    (currentConditionData.windDirection > 337.5 &&
      currentConditionData.windDirection <= 360)
  ) {
    currentConditionData.windDirection = 'N';
  } else if (
    currentConditionData.windDirection >= 22.5 &&
    currentConditionData.windDirection < 45
  ) {
    currentConditionData.windDirection = 'NNE';
  } else if (
    currentConditionData.windDirection >= 45 &&
    currentConditionData.windDirection < 67.5
  ) {
    currentConditionData.windDirection = 'ENE';
  } else if (
    currentConditionData.windDirection >= 67.5 &&
    currentConditionData.windDirection < 90
  ) {
    currentConditionData.windDirection = 'E';
  } else if (
    currentConditionData.windDirection >= 90 &&
    currentConditionData.windDirection < 112.5
  ) {
    currentConditionData.windDirection = 'ESE';
  } else if (
    currentConditionData.windDirection >= 112.5 &&
    currentConditionData.windDirection < 135
  ) {
    currentConditionData.windDirection = 'SE';
  } else if (
    currentConditionData.windDirection >= 135 &&
    currentConditionData.windDirection < 157.5
  ) {
    currentConditionData.windDirection = 'SSE';
  } else if (
    currentConditionData.windDirection >= 157.5 &&
    currentConditionData.windDirection < 180
  ) {
    currentConditionData.windDirection = 'S';
  } else if (
    currentConditionData.windDirection >= 180 &&
    currentConditionData.windDirection < 202.5
  ) {
    currentConditionData.windDirection = 'SSW';
  } else if (
    currentConditionData.windDirection >= 202.5 &&
    currentConditionData.windDirection < 225
  ) {
    currentConditionData.windDirection = 'SW';
  } else if (
    currentConditionData.windDirection >= 225 &&
    currentConditionData.windDirection < 247.5
  ) {
    currentConditionData.windDirection = 'WSW';
  } else if (
    currentConditionData.windDirection >= 247.5 &&
    currentConditionData.windDirection < 270
  ) {
    currentConditionData.windDirection = 'W';
  } else if (
    currentConditionData.windDirection >= 270 &&
    currentConditionData.windDirection < 292.5
  ) {
    currentConditionData.windDirection = 'WNW';
  } else if (
    currentConditionData.windDirection >= 292.5 &&
    currentConditionData.windDirection < 315
  ) {
    currentConditionData.windDirection = 'NW';
  } else if (
    currentConditionData.windDirection >= 315 &&
    currentConditionData.windDirection <= 337.5
  ) {
    currentConditionData.windDirection = 'NNW';
  } else if (currentConditionData.windDirection === 0 ){
    currentConditionData.windDirection = "CALM"
  }

  return currentConditionData;
}


function getHourlyWeatherData(weather){
  const hourlyWeatherData = [];
  for (let i = 1; i < 13; i++){
    let hour = {}
    hour.time = new Date(
      weather.hourly[i].dt * 1000).toLocaleTimeString([], { hour: '2-digit' });
    hour.id = weather.hourly[i].weather[0].id
    hour.temp =  `${Math.trunc(weather.hourly[i].temp)}°`;
    hour.chanceOfRain =  weather.hourly[i].pop * 100;

    if (hour.time[0] === "0"){
      hour.time = hour.time.replace("0","")
    }

    hourlyWeatherData.push(hour)
  }

  return hourlyWeatherData
}


function willItRainNextHour(weather) {
  const nextHourData = weather.minutely;
  let precipPercentage = 0;
  for (let i = 0; i < nextHourData.length; i++) {
    precipPercentage += nextHourData[i].precipitation;
  }
  return precipPercentage / 61 > 0;
}

function combineMinutes(weather) {
  const nextHourData = weather.minutely;
  let Minutes = [];
  for (let i = 0; i < nextHourData.length - 1; i++) {
      Minutes.push( nextHourData[i].precipitation);
    }
  return Minutes;
}



function GetDailyWeather(weather) {
  const sevenDailyWeatherForecast = [];
  for (let i = 1; i < weather.daily.length; i++) {
    const dailyWeather = {};
    dailyWeather.day = new Date(weather.daily[i].dt * 1000).toLocaleDateString(
      [],
      {
        weekday: 'long',
      }
    );
    dailyWeather.id = weather.daily[i].weather[0].id;
    dailyWeather.icon = weather.daily[i].weather[0].icon;
    dailyWeather.main = weather.daily[i].weather[0].main;
    dailyWeather.chanceOfRain = `${weather.daily[i].pop * 100}%`;
    dailyWeather.lowTemp = `${Math.trunc(weather.daily[i].temp.min)}°`;
    dailyWeather.highTemp = `${Math.trunc(weather.daily[i].temp.max)}°`;

    sevenDailyWeatherForecast.push(dailyWeather);
  }

  return sevenDailyWeatherForecast;
}

export {
  getWeather,
  getCurrentConditionData,
  GetDailyWeather,
  willItRainNextHour,
  getGeoInfo,
  combineMinutes,
  GOOGLE_KEYS,
  getHourlyWeatherData
};
