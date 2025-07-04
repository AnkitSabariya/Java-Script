const weatherKey = "01197a55abf8489f97493621252606";
const unsplashKey = "TRgIbxVc1pLM4Ub4fKjHToj5l2eE9WAUhSFGo_4iae4";

let city = document.getElementById("city");
let country = document.getElementById("country");
let temp = document.getElementById("temp");
let localtime = document.getElementById("localtime");
let emoji = document.getElementById("emoji");
let text = document.getElementById("text");
let minTemp = document.getElementById("minTemp");
let maxTemp = document.getElementById("maxTemp");
let realFeel = document.getElementById("realFeel");
let humidity = document.getElementById("humidity");
let wind = document.getElementById("wind");
let pressure = document.getElementById("pressure");
let tempRange = document.getElementById("tempRange");
let weatherDetails = document.getElementById("weatherDetails");
let loading = document.getElementById("loading");

function showLoading() {
    loading.classList.add('show');
    document.querySelector('.weather-info').style.display = 'none';
    tempRange.style.display = 'none';
    weatherDetails.style.display = 'none';
}

function hideLoading() {
    loading.classList.remove('show');
    document.querySelector('.weather-info').style.display = 'block';
    tempRange.style.display = 'flex';
    weatherDetails.style.display = 'grid';
}

function getWeather() {
    const input = document.getElementById("input").value.trim();
    if (!input) return;

    showLoading();

    // Get current weather
    fetch(`https://api.weatherapi.com/v1/current.json?key=${weatherKey}&q=${input}&aqi=no`)
        .then(res => res.json())
        .then(data => {
            city.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${data.location.name}, ${data.location.region}`;
            country.innerText = data.location.country;
            temp.innerText = `${data.current.temp_c}°C`;
            localtime.innerHTML = `<i class="far fa-clock"></i> ${data.location.localtime}`;
            text.innerText = data.current.condition.text;
            emoji.src = `https:${data.current.condition.icon}`;
            
            // Additional weather details
            realFeel.innerText = `${data.current.feelslike_c}°C`;
            humidity.innerText = `${data.current.humidity}%`;
            wind.innerText = `${data.current.wind_kph} km/h`;
            pressure.innerText = `${data.current.pressure_mb} mb`;
            
            hideLoading();
        })
        .catch(() => {
            alert("❌ City not found or error in API");
            hideLoading();
        });

    // Get forecast for min/max temperature
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${weatherKey}&q=${input}&days=1&aqi=no&alerts=no`)
        .then(res => res.json())
        .then(data => {
            const forecast = data.forecast.forecastday[0].day;
            minTemp.innerHTML = `<i class="fas fa-temperature-low"></i> Min: ${forecast.mintemp_c}°C`;
            maxTemp.innerHTML = `<i class="fas fa-temperature-high"></i> Max: ${forecast.maxtemp_c}°C`;
        })
        .catch(() => {
            console.log("Forecast data not available");
        });

    // 🖼 Fetch background image from Unsplash
    fetch(`https://api.unsplash.com/search/photos?query=${input}&orientation=landscape&per_page=1&client_id=${unsplashKey}`)
        .then(res => res.json())
        .then(imgData => {
            if (imgData.results && imgData.results.length > 0) {
                const photo = imgData.results[0];
                document.body.style.backgroundImage = `url(${photo.urls.full})`;
            }
        })
        .catch(() => {
            console.log("Background image not available");
        });

    document.getElementById("input").value = "";
}

// Allow Enter key to trigger search
document.getElementById("input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        getWeather();
    }
});

// 🔄 Load default image on page load
document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1692458236947-33d25789b2aa?ixlib=rb-4.1.0&auto=format&fit=crop&w=1920&q=80')";