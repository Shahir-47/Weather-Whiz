import icon from "../img/icon.svg";
import search from "../img/search.svg";
import GitHub from "../img/git.svg";
import temp from "../img/temp.svg";
import rain from "../img/rain.svg";
import humidity from "../img/humidity.svg";
import wind from "../img/wind.svg";
import snow from "../img/snow.svg";
import air from "../img/air.svg";
import sunrise from "../img/sunrise.svg";
import sunset from "../img/sunset.svg";
import pressure from "../img/pressure.svg";
import visibility from "../img/visibility.svg";
import uv from "../img/uv.svg";
import raindrops from "../img/raindrops.svg";
import snowCloud from "../img/snow-cloud.svg";
import moon from "../img/moon/full-moon.svg";
import cloud from "../img/cloud.svg";

let weatherData = {};

function displayCurrentWeatherData(data) {
	document.querySelector(".current-location").textContent = data.location.name;
	document.querySelector(
		".current-icon",
	).src = `./img/weather/${data.current.condition.icon.slice(29)}`;
	document.querySelector(
		".current-temp",
	).textContent = `${data.current.temp_f} °F`;
	document.querySelector(".current-condition").textContent =
		data.current.condition.text;
	document.querySelector(
		".current-min",
	).textContent = `Min: ${data.forecast.forecastday[0].day.mintemp_f} °F`;
	document.querySelector(
		".current-max",
	).textContent = `Max: ${data.forecast.forecastday[0].day.maxtemp_f} °F`;
}

async function getWeather(query) {
	try {
		const response = await fetch(
			`http://api.weatherapi.com/v1/forecast.json?days=3&aqi=yes&q=${query}&key=fca53d6c99b24b59ab3201455232107`,
			{ mode: "cors" },
		);
		weatherData = await response.json();
		console.log(weatherData);
		displayCurrentWeatherData(weatherData);
	} catch (error) {
		displayCurrentWeatherData(error);
	}
}

function displayNavBar() {
	const navBar = document.createElement("div");
	navBar.classList.add("nav-bar");

	// Create the logo
	const logoBox = document.createElement("div");
	logoBox.classList.add("logo-box");
	const logo = document.createElement("img");
	logo.src = icon;
	logo.alt = "logo";
	const logoText = document.createElement("h1");
	logoText.textContent = "Weather Whiz";
	logoBox.appendChild(logo);
	logoBox.appendChild(logoText);
	navBar.appendChild(logoBox);

	// search bar
	const searchBox = document.createElement("div");
	searchBox.classList.add("search-box");
	const searchInput = document.createElement("input");
	searchInput.classList.add("search-input");
	searchInput.type = "text";
	searchInput.placeholder = "Search";
	searchInput.id = "search";
	searchInput.name = "search";
	searchBox.appendChild(searchInput);
	const searchButton = document.createElement("button");
	searchButton.classList.add("search-button");
	searchBox.appendChild(searchButton);
	const searchIcon = document.createElement("img");
	searchIcon.src = search;
	searchIcon.alt = "Search icon";
	searchButton.appendChild(searchIcon);
	navBar.appendChild(searchBox);

	// toggle switch for imperial/metric units
	const toggleBox = document.createElement("div");
	toggleBox.classList.add("toggle-switch");
	const checkBox = document.createElement("input");
	checkBox.type = "checkbox";
	checkBox.setAttribute("id", "unit-toggle");
	const label = document.createElement("label");
	label.setAttribute("for", "unit-toggle");
	const metric = document.createElement("span");
	metric.classList.add("toggle-icon");
	metric.classList.add("toggle-icon-metric");
	const imperial = document.createElement("span");
	imperial.classList.add("toggle-icon");
	imperial.classList.add("toggle-icon-imperial");
	const slider = document.createElement("span");
	slider.classList.add("slider");
	label.appendChild(imperial);
	label.appendChild(metric);
	label.appendChild(slider);
	toggleBox.appendChild(checkBox);
	toggleBox.appendChild(label);
	navBar.appendChild(toggleBox);

	return navBar;
}

function makePageContainer() {
	const pageContainer = document.createElement("div");
	pageContainer.classList.add("page-container");
	return pageContainer;
}

function displayFooter() {
	const footer = document.createElement("footer");
	footer.classList.add("footer");

	// Link to my github profile
	const gitHubProfile = document.createElement("a");
	gitHubProfile.href = "https://github.com/Shahir-47";

	// GitHub logo
	const gitHubProfileImg = document.createElement("img");
	gitHubProfileImg.src = GitHub;
	gitHubProfileImg.alt = "gitHub Logo";

	// my Github username
	const gitHubProfileText = document.createElement("p");
	const atSymbol = document.createElement("span");
	atSymbol.classList.add("at-symbol");
	atSymbol.textContent = "@";
	const username = document.createElement("span");
	username.textContent = "Shahir-47";
	gitHubProfileText.appendChild(atSymbol);
	gitHubProfileText.appendChild(username);

	gitHubProfile.appendChild(gitHubProfileImg);
	gitHubProfile.appendChild(gitHubProfileText);

	const separator = document.createElement("p");
	separator.textContent = "|";

	// Link to this source code
	const gitHubRepo = document.createElement("a");
	gitHubRepo.href = "https://github.com/Shahir-47/Weather-Whiz";
	gitHubRepo.textContent = "Source Code";

	footer.appendChild(gitHubProfile);
	footer.appendChild(separator);
	footer.appendChild(gitHubRepo);

	return footer;
}

function displayCurrentWeather() {
	const currentWeather = document.createElement("div");
	currentWeather.classList.add("current-weather");

	const currentInfo = document.createElement("div");
	currentInfo.classList.add("current-info");

	const currentLocation = document.createElement("h2");
	currentLocation.classList.add("current-location");
	currentLocation.textContent = "Current Location";
	currentInfo.appendChild(currentLocation);

	const currentData = document.createElement("div");
	currentData.classList.add("current-data");

	const currentIcon = document.createElement("img");
	currentIcon.classList.add("current-icon");
	currentIcon.src = icon;
	currentIcon.alt = "Current weather icon";
	currentData.appendChild(currentIcon);

	const currentDetails = document.createElement("div");
	currentDetails.classList.add("current-details");

	const currentTemp = document.createElement("h3");
	currentTemp.classList.add("current-temp");
	currentTemp.textContent = "83 °F";
	currentDetails.appendChild(currentTemp);

	const currentCondition = document.createElement("h4");
	currentCondition.classList.add("current-condition");
	currentCondition.textContent = "Sunny";
	currentDetails.appendChild(currentCondition);
	currentData.appendChild(currentDetails);
	currentInfo.appendChild(currentData);

	const currentMinMax = document.createElement("h5");
	currentMinMax.classList.add("current-min-max");

	const currentMin = document.createElement("span");
	currentMin.classList.add("current-min");
	currentMin.textContent = "Min: 75 °F";
	currentMinMax.appendChild(currentMin);

	const currentMax = document.createElement("span");
	currentMax.classList.add("current-max");
	currentMax.textContent = "Max: 90 °F";
	currentMinMax.appendChild(currentMax);
	currentInfo.appendChild(currentMinMax);

	currentWeather.appendChild(currentInfo);
	return currentWeather;
}

function createIndivInfo(image, title, value) {
	const weatherInfo = document.createElement("div");
	weatherInfo.classList.add("more-weather-info");

	const weatherInfoIcon = document.createElement("img");
	weatherInfoIcon.classList.add("more-weather-icon");
	weatherInfoIcon.src = image;
	weatherInfoIcon.alt = `${title} icon`;
	weatherInfo.appendChild(weatherInfoIcon);

	const weatherInfoText = document.createElement("div");
	weatherInfoText.classList.add("more-weather-text");

	const weatherInfoTitle = document.createElement("h3");
	weatherInfoTitle.classList.add("more-weather-title");
	weatherInfoTitle.textContent = title;

	const weatherInfoValue = document.createElement("h4");
	weatherInfoValue.classList.add("more-weather-value");
	weatherInfoValue.textContent = value;
	weatherInfoText.appendChild(weatherInfoTitle);
	weatherInfoText.appendChild(weatherInfoValue);
	weatherInfo.appendChild(weatherInfoText);

	return weatherInfo;
}

function displayMoreWeather() {
	const moreWeather = document.createElement("div");
	moreWeather.classList.add("more-weather");
	moreWeather.appendChild(createIndivInfo(temp, "Feels Like", "83 °F"));
	moreWeather.appendChild(createIndivInfo(humidity, "Humidity", "83%"));
	moreWeather.appendChild(createIndivInfo(rain, "Chance of Rain", "0%"));
	moreWeather.appendChild(createIndivInfo(wind, "Wind", "5 mph"));
	moreWeather.appendChild(createIndivInfo(snowCloud, "Chance of Snow", "0%"));
	moreWeather.appendChild(createIndivInfo(air, "Air Quality", "Good"));
	moreWeather.appendChild(createIndivInfo(sunrise, "Sunrise", "6:00 AM"));
	moreWeather.appendChild(createIndivInfo(sunset, "Sunset", "6:00 PM"));
	moreWeather.appendChild(createIndivInfo(pressure, "Pressure", "1000 mb"));
	moreWeather.appendChild(createIndivInfo(visibility, "Visibility", "10 mi"));
	moreWeather.appendChild(createIndivInfo(uv, "UV Index", "0"));
	moreWeather.appendChild(createIndivInfo(raindrops, "Precipitation", "0 in"));
	moreWeather.appendChild(createIndivInfo(snow, "Snow", "0 in"));
	moreWeather.appendChild(createIndivInfo(cloud, "Cloud Cover", "0%"));
	moreWeather.appendChild(
		createIndivInfo(moon, "Moon Phase", "Waning Gibbous"),
	);
	return moreWeather;
}

function chooseForecast() {
	const container = document.createElement("div");
	container.classList.add("container");

	const firstChoice = document.createElement("div");
	firstChoice.classList.add("choice");

	const hourly = document.createElement("input");
	hourly.type = "radio";
	hourly.id = "hourly";
	hourly.name = "forecast";
	hourly.value = "hourly";
	hourly.checked = true;
	const hourlyLabel = document.createElement("label");
	hourlyLabel.setAttribute("for", "hourly");
	hourlyLabel.textContent = "Hourly";
	firstChoice.appendChild(hourly);
	firstChoice.appendChild(hourlyLabel);

	const secondChoice = document.createElement("div");
	secondChoice.classList.add("choice");

	const day = document.createElement("input");
	day.type = "radio";
	day.id = "day";
	day.name = "forecast";
	day.value = "day";
	const dayLabel = document.createElement("label");
	dayLabel.setAttribute("for", "day");
	dayLabel.textContent = "3-Day Forecast";
	secondChoice.appendChild(day);
	secondChoice.appendChild(dayLabel);

	container.appendChild(firstChoice);
	container.appendChild(secondChoice);

	return container;
}

function makeForecast() {
	const forecast = document.createElement("div");
	forecast.classList.add("forecast");
	forecast.classList.add("hourly-forecast");

	return forecast;
}

function makeMainContainer() {
	const pageContainer = document.querySelector(".page-container");
	const main = document.createElement("div");
	main.classList.add("main");
	main.appendChild(displayCurrentWeather());
	main.appendChild(displayMoreWeather());
	pageContainer.appendChild(main);
}

function bottomContainer() {
	const pageContainer = document.querySelector(".page-container");
	const bottom = document.createElement("div");
	bottom.classList.add("bottom");
	bottom.appendChild(chooseForecast());
	bottom.appendChild(makeForecast());
	pageContainer.appendChild(bottom);
}

function pageLoad() {
	const content = document.querySelector("#content");
	content.appendChild(displayNavBar());
	content.appendChild(makePageContainer());
	content.appendChild(displayFooter());
	makeMainContainer();
	bottomContainer();
	getWeather("Los Angeles");
}

function displayForecast() {
	const forecast = document.querySelector(".forecast");
	const choice = document.querySelector('input[name="forecast"]:checked').value;
	console.log(choice);
	if (choice === "hourly") {
		forecast.innerHTML = "";
		forecast.classList.remove("daily-forecast");
		forecast.classList.add("hourly-forecast");
	} else {
		forecast.innerHTML = "";
		forecast.classList.remove("hourly-forecast");
		forecast.classList.add("daily-forecast");
	}
}

export default pageLoad;
export { getWeather, displayForecast };
