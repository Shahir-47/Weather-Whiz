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

const getAirQuality = (aqi) => {
	if (aqi <= 50) {
		return "Good";
	}
	if (aqi <= 100) {
		return "Moderate";
	}
	if (aqi <= 150) {
		return "Unhealthy for Sensitive Groups";
	}
	if (aqi <= 200) {
		return "Unhealthy";
	}
	if (aqi <= 300) {
		return "Very Unhealthy";
	}
	return "Hazardous";
};

function displayWeatherData(data) {
	let moonPhase = data.forecast.forecastday[0].astro.moon_phase;
	moonPhase = moonPhase.replace(" ", "-");
	moonPhase = moonPhase.toLowerCase();

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

	document.querySelector(
		".temp",
	).textContent = `${data.current.feelslike_f} °F`;
	document.querySelector(".humidity").textContent = `${data.current.humidity}%`;
	document.querySelector(
		".rain",
	).textContent = `${data.forecast.forecastday[0].day.daily_chance_of_rain}%`;
	document.querySelector(".wind").textContent = `${data.current.wind_mph} mph`;
	document.querySelector(
		".snow",
	).textContent = `${data.forecast.forecastday[0].day.daily_chance_of_snow}%`;
	document.querySelector(".air").textContent = `${getAirQuality(
		data.current.air_quality.pm2_5,
	)}`;
	document.querySelector(
		".sunrise",
	).textContent = `${data.forecast.forecastday[0].astro.sunrise}`;
	document.querySelector(
		".sunset",
	).textContent = `${data.forecast.forecastday[0].astro.sunset}`;
	document.querySelector(
		".pressure",
	).textContent = `${data.current.pressure_mb} mb`;
	document.querySelector(
		".visibility",
	).textContent = `${data.current.vis_miles} miles`;
	document.querySelector(".uv").textContent = `${data.current.uv}`;
	document.querySelector(
		".precipitation",
	).textContent = `${data.forecast.forecastday[0].day.totalprecip_in} inches`;
	document.querySelector(
		".snow-depth",
	).textContent = `${data.forecast.forecastday[0].day.totalprecip_in} inches`;
	document.querySelector(".cloud-cover").textContent = `${data.current.cloud}%`;
	document.querySelector(
		".moon-phase",
	).textContent = `${data.forecast.forecastday[0].astro.moon_phase}`;

	document.querySelector(
		"img[alt='Moon Phase icon']",
	).src = `./img/moon/${moonPhase}.svg`;
}

async function getWeather(query) {
	try {
		const response = await fetch(
			`http://api.weatherapi.com/v1/forecast.json?days=3&aqi=yes&q=${query}&key=fca53d6c99b24b59ab3201455232107`,
			{ mode: "cors" },
		);
		weatherData = await response.json();
		console.log(weatherData);
		displayWeatherData(weatherData);
	} catch (error) {
		displayWeatherData(error);
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

function createIndivInfo(image, title, value, className) {
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
	weatherInfoValue.classList.add(className);
	weatherInfoValue.textContent = value;
	weatherInfoText.appendChild(weatherInfoTitle);
	weatherInfoText.appendChild(weatherInfoValue);
	weatherInfo.appendChild(weatherInfoText);

	return weatherInfo;
}

function displayMoreWeather() {
	const moreWeather = document.createElement("div");
	moreWeather.classList.add("more-weather");
	moreWeather.appendChild(createIndivInfo(temp, "Feels Like", "83 °F", "temp"));
	moreWeather.appendChild(
		createIndivInfo(humidity, "Humidity", "83%", "humidity"),
	);
	moreWeather.appendChild(
		createIndivInfo(rain, "Chance of Rain", "0%", "rain"),
	);
	moreWeather.appendChild(createIndivInfo(wind, "Wind", "5 mph", "wind"));
	moreWeather.appendChild(
		createIndivInfo(snowCloud, "Chance of Snow", "0%", "snow"),
	);
	moreWeather.appendChild(createIndivInfo(air, "Air Quality", "Good", "air"));
	moreWeather.appendChild(
		createIndivInfo(sunrise, "Sunrise", "6:00 AM", "sunrise"),
	);
	moreWeather.appendChild(
		createIndivInfo(sunset, "Sunset", "6:00 PM", "sunset"),
	);
	moreWeather.appendChild(
		createIndivInfo(pressure, "Pressure", "1000 mb", "pressure"),
	);
	moreWeather.appendChild(
		createIndivInfo(visibility, "Visibility", "10 mi", "visibility"),
	);
	moreWeather.appendChild(createIndivInfo(uv, "UV Index", "0", "uv"));
	moreWeather.appendChild(
		createIndivInfo(raindrops, "Precipitation", "0 in", "precipitation"),
	);
	moreWeather.appendChild(createIndivInfo(snow, "Snow", "0 in", "snow-depth"));
	moreWeather.appendChild(
		createIndivInfo(cloud, "Cloud Cover", "0%", "cloud-cover"),
	);
	moreWeather.appendChild(
		createIndivInfo(moon, "Moon Phase", "Waning Gibbous", "moon-phase"),
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
	dayLabel.textContent = "Next 2 days";
	secondChoice.appendChild(day);
	secondChoice.appendChild(dayLabel);

	container.appendChild(firstChoice);
	container.appendChild(secondChoice);

	return container;
}

function makeHourlyCard() {
	const hourlyCard = document.createElement("div");
	hourlyCard.classList.add("hourly-card");

	const hourlyTime = document.createElement("h3");
	hourlyTime.classList.add("hourly-time");
	hourlyTime.textContent = "12:00 PM";
	hourlyCard.appendChild(hourlyTime);

	const hourlyIcon = document.createElement("img");
	hourlyIcon.classList.add("hourly-icon");
	hourlyIcon.src = icon;
	hourlyIcon.alt = "weather icon";
	hourlyCard.appendChild(hourlyIcon);

	const hourlyTemp = document.createElement("h4");
	hourlyTemp.classList.add("hourly-temp");
	hourlyTemp.textContent = "83 °F";
	hourlyCard.appendChild(hourlyTemp);

	const hourlyCondition = document.createElement("h5");
	hourlyCondition.classList.add("hourly-condition");
	hourlyCondition.textContent = "Sunny";
	hourlyCard.appendChild(hourlyCondition);

	const moreInfo = document.createElement("div");
	moreInfo.classList.add("more-info-hourly");

	const moreInfoRain = document.createElement("div");
	moreInfoRain.classList.add("more-info-rain");

	const moreInfoRainIcon = document.createElement("img");
	moreInfoRainIcon.classList.add("more-info-rain-icon");
	moreInfoRainIcon.src = rain;
	moreInfoRainIcon.alt = "rain icon";
	moreInfoRain.appendChild(moreInfoRainIcon);

	const moreInfoRainText = document.createElement("h6");
	moreInfoRainText.classList.add("more-info-rain-text");
	moreInfoRainText.textContent = "0%";
	moreInfoRain.appendChild(moreInfoRainText);
	moreInfo.appendChild(moreInfoRain);

	const moreInfoSnow = document.createElement("div");
	moreInfoSnow.classList.add("more-info-snow");

	const moreInfoSnowIcon = document.createElement("img");
	moreInfoSnowIcon.classList.add("more-info-snow-icon");
	moreInfoSnowIcon.src = snow;
	moreInfoSnowIcon.alt = "snow icon";
	moreInfoSnow.appendChild(moreInfoSnowIcon);

	const moreInfoSnowText = document.createElement("h6");
	moreInfoSnowText.classList.add("more-info-snow-text");
	moreInfoSnowText.textContent = "0%";
	moreInfoSnow.appendChild(moreInfoSnowText);
	moreInfo.appendChild(moreInfoSnow);

	hourlyCard.appendChild(moreInfo);

	return hourlyCard;
}

function makeHourlyForecast() {
	const forecast = document.querySelector(".forecast");

	const backBtn = document.createElement("button");
	backBtn.classList.add("back-btn");
	backBtn.textContent = "<";
	forecast.appendChild(backBtn);

	const forecastSlider = document.createElement("div");
	forecastSlider.classList.add("forecast-slider");
	forecast.appendChild(forecastSlider);

	for (let i = 0; i < 24; i += 1) {
		forecastSlider.appendChild(makeHourlyCard());
	}

	const nextBtn = document.createElement("button");
	nextBtn.classList.add("next-btn");
	nextBtn.textContent = ">";
	forecast.appendChild(nextBtn);

	return forecast;
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
	makeHourlyForecast();
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
