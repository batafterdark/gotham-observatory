import "./style.css";
import getWeather from "./fetch";
import showWeather from "./DOM";
import { showForecast } from "./DOM";

let weather = null;
const searchBar = document.querySelector('#searchBar');
const city = document.querySelector('#city');
const unit = document.querySelector('#unit');
const weatherInfo = document.querySelector('.weatherInfo');

searchBar.addEventListener('submit', async (event) => {
    event.preventDefault();
    weather = await getWeather(city.value, unit.value);
    showWeather(weather);
});

if (weatherInfo) {
    weatherInfo.addEventListener('click', async (event) => {
        if (event.target.closest('#forecast')) {
            await showForecast(weather);
        }
    });
}


