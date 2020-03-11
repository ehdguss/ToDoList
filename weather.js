const weather = document.querySelector('.weather');
const LOCATION = 'location';
const API_KEY = "27e864578d2870ee6b04407458766775";

function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function(response) {
        return response.json();
    }).then(function(json) {
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature}°C | ${place}`;
    });
}

function saveLocation(locationObj) {
    localStorage.setItem(LOCATION, JSON.stringify(locationObj));
}

function getSucces(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const locationObj = {
        latitude,
        longitude
    };

    saveLocation(locationObj);
    getWeather(latitude, longitude);
}

function getError() {
    console.log("Error");
}

function askLocation() {
    navigator.geolocation.getCurrentPosition(getSucces, getError);
}

function loadInfo() {
    const loadLocation = localStorage.getItem(LOCATION);
    if(loadLocation === null) {
        askLocation();
    } else {
        const parseLocation = JSON.parse(loadLocation);
        getWeather(parseLocation.latitude, parseLocation.longitude);
    }
}

function init() {
    loadInfo();
}
init();