import { getGeoInfo, GOOGLE_KEYS } from './apiData';

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
    console.log(data);
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
  return city;
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

function changeIconColor(weather) {}

export {
  removeSpaces,
  successUserPos,
  getUserCityValue,
  getInputLocation,
  getUserLocation,
};
