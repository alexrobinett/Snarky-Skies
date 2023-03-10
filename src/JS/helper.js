import { getGeoInfo, GOOGLE_KEYS } from './apiData';
import { currentMessages } from './messages';

function removeSpaces(input = 'Atlanta GA') {
  return input.replace(' ', '%20');
}

async function successUserPos(pos) {
  const userLocation = {};
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${pos.coords.latitude},${pos.coords.longitude}2&key=${GOOGLE_KEYS}`
    );
    const data = await response.json();
    userLocation.lat = pos.coords.latitude;
    userLocation.lng = pos.coords.longitude;
    userLocation.city = data.plus_code.compound_code
      .split(',')[0]
      .split(' ')
      .slice(1)
      .join(' ');
    localStorage.setItem('userLocationWeather', JSON.stringify(userLocation));
    return userLocation;
  } catch (error) {
    console.log(error);
  }

  localStorage.setItem('userLocationWeather', JSON.stringify(userLocation));
}

function getUserCityValue() {
  const city = document.querySelector('#city-input').value;
  document.querySelector('#city-input').value = '';
  if (city.length > 1){
    return city
  }else alert("Error: Please enter a city")
}

async function getInputLocation(input) {
  const location = await getGeoInfo(removeSpaces(input));
  return location;
}

async function getUserLocation() {
  navigator.geolocation.getCurrentPosition(successUserPos);
  return JSON.parse(localStorage.getItem('userLocationWeather')) === null
    ? { lat: 33.9041, lng: -84.4695, city: 'Atlanta' }
    : JSON.parse(localStorage.getItem('userLocationWeather'));
}


export {
  removeSpaces,
  successUserPos,
  getUserCityValue,
  getInputLocation,
  getUserLocation,
};
