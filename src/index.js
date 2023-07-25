import "./css/all.css";
import "./css/normalize.css";
import pageLoad, { getWeather, displayForecast } from "./js/UI";

pageLoad();

// Event Listeners if search button is clicked
document.querySelector(".search-button").addEventListener("click", () => {
	const query = document.querySelector(".search-input").value;
	getWeather(query);
});

// Event Listeners if enter key is pressed on search input
document.querySelector(".search-input").addEventListener("keyup", (e) => {
	if (e.keyCode === 13) {
		const query = document.querySelector(".search-input").value;
		getWeather(query);
	}
});

document.querySelector("#hourly").addEventListener("change", () => {
	displayForecast();
});

document.querySelector("#day").addEventListener("change", () => {
	displayForecast();
});
