const API_KEY = "ed2da771d8dc64bd693551df8d306898"
// https://openweathermap.org/ 에서 제공하는 API 중 'Current weather data'활용

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weatherIcon = document.getElementById("weather-icon");
            const weatherIconCode = data.weather[0].icon;
            // 날씨 아이콘 가져오는 코드
            const weather = document.querySelector("#weather span:nth-child(2)");
            const city = document.querySelector("#weather span:nth-child(3)");
            weatherIcon.src = `img/weatherIcon/${weatherIconCode}.png`;
            weather.innerText = `${data.weather[0].main} , ${data.main.temp}℃ / `;
            city.innerText = `${data.name} ${data.sys.country}`;
        });
}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
// 유저의 현재 위치를 받아오는 코드
// getCurrentPosition 함수는 argument가 2개 필요: 모든게 잘 됐을 때 실행될 함수, 에러가 발생했을 때 실행될 함수