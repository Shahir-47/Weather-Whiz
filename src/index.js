import "./css/all.css";
import "./css/normalize.css";
import pageLoad, { getWeather, displayForecast } from "./js/UI";

pageLoad();

const cardsWrapper = document.querySelector(".forecast-slider");
const backBtn = document.querySelector(".back-btn");
const nextBtn = document.querySelector(".next-btn");
const cardWidth = 151.6;

const scrollLeft = () => {
	const scrollOptions = {
		left: cardsWrapper.scrollLeft - cardWidth,
		behavior: "smooth",
	};
	cardsWrapper.scrollTo(scrollOptions);
};

const scrollRight = () => {
	const scrollOptions = {
		left: cardsWrapper.scrollLeft + cardWidth,
		behavior: "smooth",
	};
	cardsWrapper.scrollTo(scrollOptions);
};

backBtn.addEventListener("click", scrollLeft);
nextBtn.addEventListener("click", scrollRight);

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
