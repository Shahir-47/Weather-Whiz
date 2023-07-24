import "./css/all.css";
import "./css/normalize.css";
import pageLoad, { getWeather, displayForecast } from "./js/UI";

pageLoad();

document.querySelector(".search-button").addEventListener("click", () => {
	const query = document.querySelector(".search-input").value;
	getWeather(query);
});

document.querySelector("#hourly").addEventListener("change", () => {
	displayForecast();
});

document.querySelector("#day").addEventListener("change", () => {
	displayForecast();
});
