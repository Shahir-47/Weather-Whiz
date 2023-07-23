import "./css/all.css";
import "./css/normalize.css";
import pageLoad from "./js/UI";
// import getWeather from "./js/apiCall";
// import { weatherData } from "./js/UI";

pageLoad();

document.querySelector(".search-button").addEventListener("click", () => {
	const query = document.querySelector(".search-input").value;
	changeData(query);
});
