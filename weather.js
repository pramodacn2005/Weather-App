function getWeather() {
    const city = document.getElementById('city').value;
    const apikey = "1c10ee16abfbcbd23f7a48a8c8795a61"
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

    fetch(apiUrl)
        .then(Response => {
            if (!Response.ok) {
                throw new Error("City Not found !");
            }
            return Response.json();
        })
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `
        <h2 id="changeColor">${data.name},${data.sys.country}</h2>
        <p>Temperature : ${data.main.temp} °C</p>
        <p>Description : ${data.weather[0].description}</p>
        <p>Wind Speed : ${data.wind.speed}</p>`;
            changeColor();
        })
        .catch(error => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h5>${error.message}</h5>`;
        });
}

let colors = ['#64f177', '#4ae896', '#edb478', '#c0a3fd', '#ea64a0'];
let currentIndex = 0;

function changeColor() {
    const element = document.getElementById('weatherInfo').querySelector('h2');
    element.style.color = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
}


