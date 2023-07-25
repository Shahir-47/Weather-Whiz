import "./css/all.css";
import "./css/normalize.css";
import pageLoad, { getWeather, showHourlyTab, showDayTab } from "./js/UI";

let previousScrollPosition = 0;
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
	if (document.querySelector("#hourly").checked) {
		showHourlyTab();
		document.querySelector(".forecast-slider").scrollLeft =
			previousScrollPosition;
	}
});

document.querySelector("#day").addEventListener("change", () => {
	if (document.querySelector("#day").checked) {
		previousScrollPosition =
			document.querySelector(".forecast-slider").scrollLeft;
		showDayTab();
	}
});
