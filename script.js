async function getWeather() {
    const cityInput = document.getElementById('cityInput').value;

    if (!cityInput) {
        alert('Please enter a city name.');
        return;
    }

    try {
        const apiKey = 'b0e36ff24cdd83635c8d1594d896ccb6';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.ok) {
            displayWeather(data);
        } else {
            alert(`Error: ${data.message}`);
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('An error occurred while fetching weather data.');
    }
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    const temperature = Math.round(data.main.temp - 273.15); // Convert from Kelvin to Celsius

    weatherInfo.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
    `;
}
