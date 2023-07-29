/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
// eslint-disable-next-line import/no-extraneous-dependencies
import "./css/all.css";
import "./css/normalize.css";
import { parse, format, compareAsc } from "date-fns";
import icon from "./img/icon.svg";
import search from "./img/search.svg";
import GitHub from "./img/git.svg";
import temp from "./img/temp.svg";
import rain from "./img/rain.svg";
import humidity from "./img/humidity.svg";
import wind from "./img/wind.svg";
import snow from "./img/snow.svg";
import air from "./img/air.svg";
import sunrise from "./img/sunrise.svg";
import sunset from "./img/sunset.svg";
import pressure from "./img/pressure.svg";
import visibility from "./img/visibility.svg";
import uv from "./img/uv.svg";
import raindrops from "./img/raindrops.svg";
import snowCloud from "./img/snow-cloud.svg";
import moon from "./img/moon/full-moon.svg";
import cloud from "./img/cloud.svg";
import sunsetIcon from "./img/sunsetIcon.svg";
import morning from "./img/morning.svg";
import copy from "./img/copy.svg";
import load from "./img/load.gif";
import sad from "./img/sad.svg";

let weatherData = {}; // Stores the weather data from the API
let lastUpdatedTime = new Date(); // Stores the last time the weather data was updated
let previousScrollPosition = 0; // Stores the previous scroll position of the hour tab

// --------------------------------- Helper Methods to format data --------------------------------- //

// converts AQI to air quality and color codes the text
const getAirQuality = (aqi) => {
	if (aqi <= 50) {
		return "Good";
	}
	if (aqi <= 100) {
		return "Moderate";
	}
	if (aqi <= 150) {
		// give orange color for medium threat
		document.querySelector(".air").style.color = "orange";
		document.querySelector(".air").classList.add("long-text");
		return "Unhealthy for Sensitive Groups";
	}
	if (aqi <= 200) {
		// give red color for high threat
		document.querySelector(".air").style.color = "#FF0000";
		return "Unhealthy";
	}
	if (aqi <= 300) {
		// give purple color for very high threat
		document.querySelector(".air").style.color = "#d100d1";
		return "Very Unhealthy!!!";
	}
	return "Hazardous";
};

// converts 24 hour time to 12 hour time
function formatTime(time24) {
	const [hours, minutes] = time24.split(":");
	let suffix = "AM";
	// eslint-disable-next-line radix
	let hours12 = parseInt(hours);

	if (hours12 >= 12) {
		suffix = "PM";
		hours12 = hours12 === 12 ? 12 : hours12 - 12;
	} else {
		hours12 = hours12 === 0 ? 12 : hours12;
	}

	return `${hours12}:${minutes} ${suffix}`;
}

// converts 'new Date()' to 'Last updated on MMM do, yyyy at h:mm a'
function formatDate(date) {
	const formattedDate = format(date, "MMM do, yyyy 'at' h:mm a");
	return `Last updated on ${formattedDate}`;
}

// converts cm to inches for snow depth
function convertCmToInches(cm) {
	const inchesPerCm = 1 / 2.54;
	return cm * inchesPerCm;
}

// counts the number of words in a string to determine if the text should be smaller
function countWords(text) {
	// Remove leading and trailing white spaces from the text
	const textStr = text.trim();
	// Split the text into an array of words using space as the delimiter
	const wordsArray = textStr.split(/\s+/);
	// Return the number of words in the array
	return wordsArray.length;
}

// --------------------------------- Display Data from API --------------------------------- //

// makes the sunrise and sunset cards for the hourly tab
function createAstroCard(time, weatherIcon, text) {
	const hourlyCard = document.createElement("div");
	hourlyCard.classList.add("astro-card");

	const hourlyTime = document.createElement("h3");
	hourlyTime.classList.add("hourly-time");
	hourlyTime.textContent = time;
	hourlyCard.appendChild(hourlyTime);

	const hourlyIcon = document.createElement("img");
	hourlyIcon.classList.add("hourly-icon");
	hourlyIcon.src = weatherIcon;
	hourlyIcon.alt = "weather icon";
	hourlyCard.appendChild(hourlyIcon);

	const hourlyTemp = document.createElement("h4");
	hourlyTemp.classList.add("hourly-temp");
	hourlyTemp.textContent = text;
	hourlyCard.appendChild(hourlyTemp);

	return hourlyCard;
}

// adds the hour, sunrise, and sunset cards to the slider in the hourly tab
function addCard(i, data, unit) {
	const forecastSlider = document.querySelector(".forecast-slider");
	let nextIndex = i + 1; // index of the next hour
	// if the next hour is 24, then it is the next day so set the index to 0
	if (nextIndex === 24) {
		nextIndex = 0;
	}

	// get the sunrise and sunset times to add the sunrise and sunset cards
	const sunriseTime = parse(
		data.forecast.forecastday[0].astro.sunrise,
		"h:mm a",
		new Date(),
	);
	const sunsetTime = parse(
		data.forecast.forecastday[0].astro.sunset,
		"h:mm a",
		new Date(),
	);

	// get the time of the current hour and the next hour
	const time = data.forecast.forecastday[0].hour[i].time.slice(11, 16);
	const timeFormat = parse(time, "HH:mm", new Date());
	const nextTime = data.forecast.forecastday[0].hour[nextIndex].time.slice(
		11,
		16,
	);
	const nextTimeFormat = parse(nextTime, "HH:mm", new Date());

	// get the icon image for the current hour
	const iconImage = `./img/weather/${data.forecast.forecastday[0].hour[
		i
	].condition.icon.slice(29)}`;

	// get the temperature for the current hour based on the unit
	let temperature;
	if (unit === "imperial") {
		temperature = `${data.forecast.forecastday[0].hour[i].temp_f} °F`;
	} else {
		temperature = `${data.forecast.forecastday[0].hour[i].temp_c} °C`;
	}

	// get the condition for the current hour
	const condition = data.forecast.forecastday[0].hour[i].condition.text;
	// get the chance of rain and snow for the current hour
	const rainChance = `${data.forecast.forecastday[0].hour[i].chance_of_rain}%`;
	const snowChance = `${data.forecast.forecastday[0].hour[i].chance_of_snow}%`;

	// add the card for the current hour to the slider
	forecastSlider.appendChild(
		makeHourlyCard(
			time,
			iconImage,
			temperature,
			condition,
			rainChance,
			snowChance,
			data.forecast.forecastday[0].hour[i].time,
		),
	);

	// add the sunrise card if the current hour is before sunrise and the next hour is after sunrise
	if (
		compareAsc(sunriseTime, timeFormat) === 1 &&
		compareAsc(nextTimeFormat, sunriseTime) === 1 &&
		nextIndex !== 0
	) {
		forecastSlider.appendChild(
			createAstroCard(
				data.forecast.forecastday[0].astro.sunrise,
				morning,
				"Sunrise",
			),
		);

		// add the sunset card if the current hour is before sunset and the next hour is after sunset
	} else if (
		compareAsc(sunsetTime, timeFormat) === 1 &&
		compareAsc(nextTimeFormat, sunsetTime) === 1 &&
		nextIndex !== 0
	) {
		forecastSlider.appendChild(
			createAstroCard(
				data.forecast.forecastday[0].astro.sunset,
				sunsetIcon,
				"Sunset",
			),
		);
	}
}

// creates the individual card for each hour in the hourly tab
function makeHourlyCard(
	time,
	weatherIcon,
	tempInfo,
	condition,
	rainChance,
	snowChance,
	id,
) {
	const hourlyCard = document.createElement("div");
	hourlyCard.classList.add("hourly-card");

	// time
	const hourlyTime = document.createElement("h3");
	hourlyTime.classList.add("hourly-time");
	hourlyTime.textContent = time === "Now" ? time : formatTime(time);
	hourlyCard.appendChild(hourlyTime);

	// icon
	const hourlyIcon = document.createElement("img");
	hourlyIcon.classList.add("hourly-icon");
	hourlyIcon.src = weatherIcon;
	hourlyIcon.alt = "weather icon";
	hourlyCard.appendChild(hourlyIcon);

	// temperature
	const hourlyTemp = document.createElement("h4");
	hourlyTemp.classList.add("hourly-temp");
	hourlyTemp.textContent = tempInfo;
	hourlyCard.appendChild(hourlyTemp);

	// condition
	const hourlyCondition = document.createElement("h5");
	hourlyCondition.classList.add("hourly-condition");
	hourlyCondition.textContent = condition;
	hourlyCard.appendChild(hourlyCondition);
	if (countWords(condition) >= 3) {
		hourlyCondition.classList.add("hourly-long");
	}

	// more info about rain and snow
	const moreInfo = document.createElement("div");
	moreInfo.classList.add("more-info-hourly");

	// rain div
	const moreInfoRain = document.createElement("div");
	moreInfoRain.classList.add("more-info-rain");

	// rain icon
	const moreInfoRainIcon = document.createElement("img");
	moreInfoRainIcon.classList.add("more-info-rain-icon");
	moreInfoRainIcon.src = rain;
	moreInfoRainIcon.alt = "rain icon";
	moreInfoRain.appendChild(moreInfoRainIcon);

	// rain percentage value
	const moreInfoRainText = document.createElement("h6");
	moreInfoRainText.classList.add("more-info-rain-text");
	moreInfoRainText.textContent = rainChance;
	moreInfoRain.appendChild(moreInfoRainText);
	moreInfo.appendChild(moreInfoRain);

	// snow div
	const moreInfoSnow = document.createElement("div");
	moreInfoSnow.classList.add("more-info-snow");

	// snow icon
	const moreInfoSnowIcon = document.createElement("img");
	moreInfoSnowIcon.classList.add("more-info-snow-icon");
	moreInfoSnowIcon.src = snow;
	moreInfoSnowIcon.alt = "snow icon";
	moreInfoSnow.appendChild(moreInfoSnowIcon);

	// snow percentage value
	const moreInfoSnowText = document.createElement("h6");
	moreInfoSnowText.classList.add("more-info-snow-text");
	moreInfoSnowText.textContent = snowChance;
	moreInfoSnow.appendChild(moreInfoSnowText);
	moreInfo.appendChild(moreInfoSnow);
	hourlyCard.appendChild(moreInfo);

	// add event listener to each hourly card to display the details popup
	hourlyCard.addEventListener("click", () => {
		// display the popup only if the card is not the 'Now' card since now is already displayed above
		if (id !== "Now") {
			document.querySelector("#popup-container").style.display = "block"; // display the popup
			showDetails("hour"); // create the structure of the popup
			displayHourDetail(id); // display the data in the popup
		}
	});

	return hourlyCard;
}

// creates all the hour cards for the hourly tab including the sunrise and sunset cards
function createHourlyCard(data, unit) {
	// get the slider div to add the cards to it
	const forecastSlider = document.querySelector(".forecast-slider");
	forecastSlider.innerHTML = ""; // clear the slider

	// get the current local time to add the card labelled 'now'
	const now = parse(data.location.localtime.slice(11, 16), "HH:mm", new Date());
	let index = 0; // index of the current time in the array of hourly data
	let totalCards = 0; // to display all 24 hours in the slider I will have...
	// ..to keep track of how many cards were added today and add the rest from tomorrow

	// check if the unit is imperial or metric to display the correct temperature
	let currentTemp;
	if (unit === "imperial") {
		currentTemp = `${data.current.temp_f} °F`;
	} else {
		currentTemp = `${data.current.temp_c} °C`;
	}

	// find the index of the current time in the array of hourly data
	data.forecast.forecastday[0].hour.every((hour, i) => {
		const time = parse(hour.time.slice(11, 16), "HH:mm", new Date());
		if (compareAsc(now, time) === -1) {
			index = i;
			return false; // break out of the loop
		}
		return true; // continue the loop
	});

	// add the card labelled 'Now' to the slider
	forecastSlider.appendChild(
		makeHourlyCard(
			"Now",
			`./img/weather/${data.current.condition.icon.slice(29)}`,
			`${currentTemp}`,
			data.current.condition.text,
			`${data.forecast.forecastday[0].day.daily_chance_of_rain}%`,
			`${data.forecast.forecastday[0].day.daily_chance_of_snow}%`,
			"Now",
		),
	);
	totalCards += 1; // increment the total number of cards

	// add the cards for the rest of the day
	for (let i = index; i < 24; i += 1) {
		addCard(i, data, unit);
		totalCards += 1;
	}

	// add the cards for the next day
	for (let i = 0; i < 26 - totalCards; i += 1) {
		addCard(i, data, unit);
	}
}

// creates the individual card for each day in the daily tab
function createDayCard(data, unit) {
	const forecast = document.querySelector(".forecast");
	forecast.innerHTML = "";

	for (let i = 1; i < 3; i += 1) {
		const currentWeather = document.createElement("div");
		currentWeather.classList.add("current-weather-day");

		const currentInfo = document.createElement("div");
		currentInfo.classList.add("current-info-day");

		const currentDate = document.createElement("h2");
		currentDate.classList.add("current-date");
		currentDate.textContent = `${format(
			parse(data.forecast.forecastday[i].date, "yyyy-MM-dd", new Date()),
			"EEEE, MMMM do",
		)}`;
		currentInfo.appendChild(currentDate);

		const currentData = document.createElement("div");
		currentData.classList.add("current-data-day");

		const currentIcon = document.createElement("img");
		currentIcon.classList.add("current-icon-day");
		currentIcon.src = `./img/weather/${data.forecast.forecastday[
			i
		].day.condition.icon.slice(29)}`;
		currentIcon.alt = `${data.forecast.forecastday[i].day.condition.text} icon`;
		currentData.appendChild(currentIcon);

		const currentDetails = document.createElement("div");
		currentDetails.classList.add("current-details-day");

		const currentCondition = document.createElement("h4");
		currentCondition.classList.add("current-condition-day");
		currentCondition.textContent =
			data.forecast.forecastday[i].day.condition.text;
		currentDetails.appendChild(currentCondition);
		currentData.appendChild(currentDetails);
		currentInfo.appendChild(currentData);

		const currentMinMax = document.createElement("h5");
		currentMinMax.classList.add("current-min-max");

		const currentMin = document.createElement("span");
		currentMin.classList.add("current-min");
		currentMinMax.appendChild(currentMin);

		const currentMax = document.createElement("span");
		currentMax.classList.add("current-max");
		currentMinMax.appendChild(currentMax);
		currentInfo.appendChild(currentMinMax);

		if (unit === "imperial") {
			currentMin.textContent = `Min: ${data.forecast.forecastday[i].day.mintemp_f} °F`;
			currentMax.textContent = `Max: ${data.forecast.forecastday[i].day.maxtemp_f} °F`;
		} else {
			currentMin.textContent = `Min: ${data.forecast.forecastday[i].day.mintemp_c} °C`;
			currentMax.textContent = `Max: ${data.forecast.forecastday[i].day.maxtemp_c} °C`;
		}

		currentWeather.appendChild(currentInfo);
		currentWeather.appendChild(
			createIndivInfo(
				rain,
				"Rain",
				`${data.forecast.forecastday[i].day.daily_chance_of_rain}%`,
				"rain-day",
			),
		);
		currentWeather.appendChild(
			createIndivInfo(
				snow,
				"Snow",
				`${data.forecast.forecastday[i].day.daily_chance_of_snow}%`,
				"snow-day",
			),
		);

		forecast.appendChild(currentWeather);

		currentWeather.addEventListener("click", () => {
			document.querySelector("#popup-container").style.display = "block";
			showDetails("day");
			displayDayDetail(i);
		});
	}
}

// loads the current weather data from the API and displays the current weather on the page
function displayWeatherData(data, unit) {
	// get the last updated time and display it on the page
	const lastUpdated = document.querySelector(".last-updated-text");
	if (lastUpdated === null) {
		return;
	}
	lastUpdated.textContent = formatDate(lastUpdatedTime);

	// if the condition text is too long, then make the text smaller
	if (countWords(data.current.condition.text) >= 6) {
		document.querySelector(".current-condition").classList.add("info-length");
	} else if (countWords(data.current.condition.text) >= 3) {
		document.querySelector(".current-condition").classList.add("medium-text");
	}

	// if the unit is imperial, then display the imperial data
	if (unit === "imperial") {
		// display the current temperature
		document.querySelector(
			".current-temp",
		).textContent = `${data.current.temp_f} °F`;

		// display the min and max temperature
		document.querySelector(
			".current-min",
		).textContent = `Min: ${data.forecast.forecastday[0].day.mintemp_f} °F`;
		document.querySelector(
			".current-max",
		).textContent = `Max: ${data.forecast.forecastday[0].day.maxtemp_f} °F`;

		// display the feels like temperature
		document.querySelector(
			".temp",
		).textContent = `${data.current.feelslike_f} °F`;
		// color code the feels like temperature
		// if the temperature is above 80 °F, then make the text red
		// if the temperature is below 50 °F, then make the text blue
		// otherwise, make the text white
		if (data.current.feelslike_f > 80) {
			document.querySelector(".temp").style.color = `#FF0000`;
		} else if (data.current.feelslike_f < 50) {
			document.querySelector(".temp").style.color = `#6495ED`;
		} else {
			document.querySelector(".temp").style.color = `#dddddd`;
		}

		// display the wind speed
		document.querySelector(
			".wind",
		).textContent = `${data.current.wind_mph} mph`;
		// color code the wind speed
		// if the wind speed is between 25 and 38 miles, then make the text orange
		// if the wind speed is above 38 miles, then make the text red
		// otherwise, make the text white
		if (data.current.wind_mph > 25 && data.current.wind_mph < 38) {
			document.querySelector(".wind").style.color = `orange`;
		} else if (data.current.wind_mph > 38) {
			document.querySelector(".wind").style.color = `#FF0000`;
		} else {
			document.querySelector(".wind").style.color = `#dddddd`;
		}

		// display the pressure
		document.querySelector(
			".pressure",
		).textContent = `${data.current.pressure_in} inHg`;
		// color code the pressure
		// if the pressure is below 29.6 inHg, then make the text red
		// if the pressure is below 30.15 inHg, then make the text orange
		// otherwise, make the text white
		if (data.current.pressure_in <= 30.15) {
			if (data.current.pressure_in < 29.6) {
				document.querySelector(".pressure").style.color = `#FF0000`;
			} else {
				document.querySelector(".pressure").style.color = `orange`;
			}
		} else {
			document.querySelector(".pressure").style.color = `#dddddd`;
		}

		// display the visibility
		document.querySelector(
			".visibility",
		).textContent = `${data.current.vis_miles} miles`;
		// color code the visibility
		// if the visibility is below 2 miles, then make the text orange
		// if the visibility is below 0.5 miles, then make the text red
		// otherwise, make the text white
		if (data.current.vis_miles <= 2) {
			if (data.current.vis_miles < 0.5) {
				document.querySelector(".visibility").style.color = `#FF0000`;
			} else {
				document.querySelector(".visibility").style.color = `orange`;
			}
		} else {
			document.querySelector(".visibility").style.color = `#dddddd`;
		}

		// display the precipitation
		document.querySelector(
			".precipitation",
		).textContent = `${data.current.precip_in} inches`;
		// color code the precipitation
		// if the precipitation is above 2 inches, then make the text blue
		// otherwise, make the text white
		if (data.current.precip_in >= 2) {
			document.querySelector(".precipitation").style.color = `#6495ED`;
		} else {
			document.querySelector(".precipitation").style.color = `#dddddd`;
		}

		// display the snow depth
		// convert the snow depth from cm to inches
		// color code the snow depth
		// if the snow depth is above 12 inches, then make the text blue
		// otherwise, make the text white
		document.querySelector(".snow-depth").textContent = `${convertCmToInches(
			data.forecast.forecastday[0].day.totalsnow_cm,
		)} inches`;
		if (
			convertCmToInches(data.forecast.forecastday[0].day.totalsnow_cm) >= 12
		) {
			document.querySelector(".snow-depth").style.color = `#6495ED`;
		} else {
			document.querySelector(".snow-depth").style.color = `#dddddd`;
		}

		// if the unit is metric, then display the metric data
	} else {
		// display the current temperature
		document.querySelector(
			".current-temp",
		).textContent = `${data.current.temp_c} °C`;

		// display the min and max temperature
		document.querySelector(
			".current-min",
		).textContent = `Min: ${data.forecast.forecastday[0].day.mintemp_c} °C`;
		document.querySelector(
			".current-max",
		).textContent = `Max: ${data.forecast.forecastday[0].day.maxtemp_c} °C`;

		// display the feels like temperature
		document.querySelector(
			".temp",
		).textContent = `${data.current.feelslike_c} °C`;
		// color code the feels like temperature
		// if the temperature is above 26.6 °C, then make the text red
		// if the temperature is below 10 °C, then make the text blue
		// otherwise, make the text white
		if (data.current.feelslike_c > 26.6) {
			document.querySelector(".temp").style.color = `#FF0000`;
		} else if (data.current.feelslike_c < 10) {
			document.querySelector(".temp").style.color = `#6495ED`;
		} else {
			document.querySelector(".temp").style.color = `#dddddd`;
		}

		// display the wind speed
		document.querySelector(
			".wind",
		).textContent = `${data.current.wind_kph} km/h`;
		// color code the wind speed
		// if the wind speed is between 40 and 61 km/h, then make the text orange
		// if the wind speed is above 61 km/h, then make the text red
		// otherwise, make the text white
		if (data.current.wind_kph > 40.2336 && data.current.wind_kph < 61.152) {
			document.querySelector(".wind").style.color = `orange`;
		} else if (data.current.wind_kph > 61.152) {
			document.querySelector(".wind").style.color = `#FF0000`;
		} else {
			document.querySelector(".wind").style.color = `#dddddd`;
		}

		// display the pressure
		document.querySelector(
			".pressure",
		).textContent = `${data.current.pressure_mb} mb`;
		// color code the pressure
		// if the pressure is below 1005.84 mb, then make the text red
		// if the pressure is below 1020.6 mb, then make the text orange
		// otherwise, make the text white
		if (data.current.pressure_mb <= 1020.6) {
			if (data.current.pressure_mb < 1005.84) {
				document.querySelector(".pressure").style.color = `#FF0000`;
			} else {
				document.querySelector(".pressure").style.color = `orange`;
			}
		} else {
			document.querySelector(".pressure").style.color = `#dddddd`;
		}

		// display the visibility
		document.querySelector(
			".visibility",
		).textContent = `${data.current.vis_km} km`;
		// color code the visibility
		// if the visibility is below 3.21869 km, then make the text orange
		// if the visibility is below 0.804672 km, then make the text red
		// otherwise, make the text white
		if (data.current.vis_km <= 3.21869) {
			if (data.current.vis_km < 0.804672) {
				document.querySelector(".visibility").style.color = `#FF0000`;
			} else {
				document.querySelector(".visibility").style.color = `orange`;
			}
		} else {
			document.querySelector(".visibility").style.color = `#dddddd`;
		}

		// display the precipitation
		document.querySelector(
			".precipitation",
		).textContent = `${data.current.precip_mm} mm`;
		// color code the precipitation
		// if the precipitation is above 50.8 mm, then make the text blue
		// otherwise, make the text white
		if (data.current.precip_mm >= 50.8) {
			document.querySelector(".precipitation").style.color = `#6495ED`;
		} else {
			document.querySelector(".precipitation").style.color = `#dddddd`;
		}

		// display the snow depth
		document.querySelector(
			".snow-depth",
		).textContent = `${data.forecast.forecastday[0].day.totalsnow_cm} cm`;
		// color code the snow depth
		// if the snow depth is above 30.48 cm, then make the text blue
		// otherwise, make the text white
		if (data.forecast.forecastday[0].day.totalsnow_cm >= 30.48) {
			document.querySelector(".snow-depth").style.color = `#6495ED`;
		} else {
			document.querySelector(".snow-depth").style.color = `#dddddd`;
		}
	}

	// get the moon phase so that the correct icon can be displayed
	let moonPhase = data.forecast.forecastday[0].astro.moon_phase;
	moonPhase = moonPhase.replace(" ", "-");
	moonPhase = moonPhase.toLowerCase();

	// if the location name is too long, then truncate it
	let location;
	if (data.location.name.length > 17) {
		location = `${data.location.name.slice(0, 17)}...`;
	} else {
		location = data.location.name;
	}
	document.querySelector(".current-location").textContent = location;

	// show the current weather icon
	document.querySelector(
		".current-icon",
	).src = `./img/weather/${data.current.condition.icon.slice(29)}`;

	// display the current condition
	document.querySelector(".current-condition").textContent =
		data.current.condition.text;

	// display the humidity percentage
	document.querySelector(".humidity").textContent = `${data.current.humidity}%`;

	// display the chance of rain
	document.querySelector(
		".rain",
	).textContent = `${data.forecast.forecastday[0].day.daily_chance_of_rain}%`;
	// if the chance of rain is above 70%, then make the text blue
	if (data.forecast.forecastday[0].day.daily_chance_of_rain > 70) {
		document.querySelector(".rain").style.color = `#6495ED`;
	}

	// display the chance of snow
	document.querySelector(
		".snow",
	).textContent = `${data.forecast.forecastday[0].day.daily_chance_of_snow}%`;
	// if the chance of snow is above 70%, then make the text blue
	if (data.forecast.forecastday[0].day.daily_chance_of_snow > 70) {
		document.querySelector(".snow").style.color = `#6495ED`;
	}

	// display the air quality
	document.querySelector(".air").textContent = `${getAirQuality(
		data.current.air_quality.pm2_5,
	)}`;

	// display the sunrise and sunset times
	document.querySelector(
		".sunrise",
	).textContent = `${data.forecast.forecastday[0].astro.sunrise}`;
	document.querySelector(
		".sunset",
	).textContent = `${data.forecast.forecastday[0].astro.sunset}`;

	// display the UV index
	document.querySelector(".uv").textContent = `${data.current.uv}`;
	// color code the UV index
	// if the UV index is above 8, then make the text red
	// else if the UV index is above 5, then make the text orange
	// otherwise, make the text white
	if (data.current.uv >= 11) {
		document.querySelector(".uv").style.color = `#FF0000`;
	} else if (data.current.uv >= 8) {
		document.querySelector(".uv").style.color = `orange`;
	}

	// display the cloud cover percentage
	document.querySelector(".cloud-cover").textContent = `${data.current.cloud}%`;

	// display the moon phase
	document.querySelector(
		".moon-phase",
	).textContent = `${data.forecast.forecastday[0].astro.moon_phase}`;

	// display the moon phase icon
	document.querySelector(
		"img[alt='Moon Phase icon']",
	).src = `./img/moon/${moonPhase}.svg`;
}

// display the detail of the day card that was clicked on in the popup
function displayDayDetail(day) {
	// get the unit
	const unit = document.getElementById("unit-toggle").checked
		? "metric"
		: "imperial";

	// get the current day's data
	const current = weatherData.forecast.forecastday[day];

	// if the condition text is too long, then make the text smaller
	if (countWords(current.day.condition.text) >= 6) {
		document
			.querySelector(".popup-body .current-condition")
			.classList.add("info-length");
	} else if (countWords(current.day.condition.text) >= 3) {
		document
			.querySelector(".popup-body .current-condition")
			.classList.add("medium-text");
	}

	// if the unit is imperial, then display the imperial data
	if (unit === "imperial") {
		// display the minimum and maximum temperature
		document.querySelector(
			".popup-body .current-min",
		).textContent = `Min: ${current.day.mintemp_f} °F`;
		document.querySelector(
			".popup-body .current-max",
		).textContent = `Max: ${current.day.maxtemp_f} °F`;

		// display the wind speed
		document.querySelector(
			".popup-body .wind",
		).textContent = `${current.day.maxwind_mph} mph`;
		// color code the wind speed
		// if the wind speed is between 25 and 38 miles, then make the text orange
		// if the wind speed is above 38 miles, then make the text red
		// otherwise, make the text white
		if (current.day.maxwind_mph > 25 && current.day.maxwind_mph < 38) {
			document.querySelector(".popup-body .wind").style.color = `orange`;
		} else if (current.day.maxwind_mph > 38) {
			document.querySelector(".popup-body .wind").style.color = `#FF0000`;
		} else {
			document.querySelector(".popup-body .wind").style.color = `#dddddd`;
		}

		// display the visibility
		document.querySelector(
			".popup-body .visibility",
		).textContent = `${current.day.avgvis_miles} miles`;
		// color code the visibility
		// if the visibility is below 2 miles, then make the text orange
		// if the visibility is below 0.5 miles, then make the text red
		// otherwise, make the text white
		if (current.day.avgvis_miles <= 2) {
			if (current.day.avgvis_miles < 0.5) {
				document.querySelector(
					".popup-body .visibility",
				).style.color = `#FF0000`;
			} else {
				document.querySelector(
					".popup-body .visibility",
				).style.color = `orange`;
			}
		} else {
			document.querySelector(".popup-body .visibility").style.color = `#dddddd`;
		}

		// display the precipitation
		document.querySelector(
			".popup-body .precipitation",
		).textContent = `${current.day.totalprecip_in} inches`;
		// color code the precipitation
		// if the precipitation is above 2 inches, then make the text blue
		// otherwise, make the text white
		if (current.day.totalprecip_in >= 2) {
			document.querySelector(
				".popup-body .precipitation",
			).style.color = `#6495ED`;
		} else {
			document.querySelector(
				".popup-body .precipitation",
			).style.color = `#dddddd`;
		}

		// display the snow depth
		document.querySelector(
			".popup-body .snow-depth",
		).textContent = `${convertCmToInches(current.day.totalsnow_cm)} inches`;
		// color code the snow depth
		// if the snow depth is above 12 inches, then make the text blue
		// otherwise, make the text white
		if (convertCmToInches(current.day.totalsnow_cm) >= 12) {
			document.querySelector(".popup-body .snow-depth").style.color = `#6495ED`;
		} else {
			document.querySelector(".popup-body .snow-depth").style.color = `#dddddd`;
		}

		// if the unit is metric, then display the metric data
	} else {
		// display the minimum and maximum temperature
		document.querySelector(
			".popup-body .current-min",
		).textContent = `Min: ${current.day.mintemp_c} °C`;
		document.querySelector(
			".popup-body .current-max",
		).textContent = `Max: ${current.day.maxtemp_c} °C`;

		// display the wind speed
		document.querySelector(
			".popup-body .wind",
		).textContent = `${current.day.maxwind_kph} kph`;
		// color code the wind speed
		// if the wind speed is between 40 and 61 km/h, then make the text orange
		// if the wind speed is above 61 km/h, then make the text red
		// otherwise, make the text white
		if (current.day.maxwind_kph > 40.2336 && current.day.maxwind_kph < 61.152) {
			document.querySelector(".popup-body .wind").style.color = `orange`;
		} else if (current.day.maxwind_kph > 38) {
			document.querySelector(".popup-body .wind").style.color = `#FF0000`;
		} else {
			document.querySelector(".popup-body .wind").style.color = `#dddddd`;
		}

		// display the visibility
		document.querySelector(
			".popup-body .visibility",
		).textContent = `${current.day.avgvis_km} km`;
		// color code the visibility
		// if the visibility is below 3.21869 km, then make the text orange
		// if the visibility is below 0.804672 km, then make the text red
		// otherwise, make the text white
		if (current.day.avgvis_km <= 3.21869) {
			if (current.day.avgvis_km < 0.804672) {
				document.querySelector(
					".popup-body .visibility",
				).style.color = `#FF0000`;
			} else {
				document.querySelector(
					".popup-body .visibility",
				).style.color = `orange`;
			}
		} else {
			document.querySelector(".popup-body .visibility").style.color = `#dddddd`;
		}

		// display the precipitation
		document.querySelector(
			".popup-body .precipitation",
		).textContent = `${current.day.totalprecip_mm} mm`;
		// color code the precipitation
		// if the precipitation is above 50.8 mm, then make the text blue
		// otherwise, make the text white
		if (current.day.totalprecip_mm >= 50.8) {
			document.querySelector(
				".popup-body .precipitation",
			).style.color = `#6495ED`;
		} else {
			document.querySelector(
				".popup-body .precipitation",
			).style.color = `#dddddd`;
		}

		// display the snow depth
		document.querySelector(
			".popup-body .snow-depth",
		).textContent = `${current.day.totalsnow_cm} cm`;
		// color code the snow depth
		// if the snow depth is above 30.48 cm, then make the text blue
		// otherwise, make the text white
		if (current.day.totalsnow_cm >= 30.48) {
			document.querySelector(".popup-body .snow-depth").style.color = `#6495ED`;
		} else {
			document.querySelector(".popup-body .snow-depth").style.color = `#dddddd`;
		}
	}

	// get the moon phase so that the correct icon can be displayed
	let moonPhase = current.astro.moon_phase;
	moonPhase = moonPhase.replace(" ", "-");
	moonPhase = moonPhase.toLowerCase();

	// format the date so that it can be displayed
	document.querySelector(".popup-body .current-date").textContent = `${format(
		parse(current.date, "yyyy-MM-dd", new Date()),
		"EEEE, MMMM do",
	)}`;

	// display the current weather icon
	document.querySelector(
		".popup-body .current-icon-day",
	).src = `./img/weather/${current.day.condition.icon.slice(29)}`;

	// display the current condition
	document.querySelector(".popup-body .current-details-day").textContent =
		current.day.condition.text;

	// display the humidity percentage
	document.querySelector(
		".popup-body .humidity",
	).textContent = `${current.day.avghumidity}%`;

	// display the chance of rain
	document.querySelector(
		".popup-body .rain",
	).textContent = `${current.day.daily_chance_of_rain}%`;
	// if the chance of rain is above 70%, then make the text blue
	if (current.day.daily_chance_of_rain > 70) {
		document.querySelector(".rain").style.color = `#6495ED`;
	}

	// display the chance of snow
	document.querySelector(
		".popup-body .snow",
	).textContent = `${current.day.daily_chance_of_snow}%`;
	// if the chance of snow is above 70%, then make the text blue
	if (current.day.daily_chance_of_snow > 70) {
		document.querySelector(".snow").style.color = `#6495ED`;
	}

	// display the air quality
	document.querySelector(".popup-body .air").textContent = `${getAirQuality(
		current.day.air_quality.pm2_5,
	)}`;

	// display the sunrise and sunset times
	document.querySelector(
		".popup-body .sunrise",
	).textContent = `${current.astro.sunrise}`;

	// display the UV index
	document.querySelector(
		".popup-body .sunset",
	).textContent = `${current.astro.sunset}`;

	// display the UV index
	document.querySelector(".popup-body .uv").textContent = `${current.day.uv}`;
	// color code the UV index
	// if the UV index is above 8, then make the text red
	// else if the UV index is above 5, then make the text orange
	if (current.day.uv >= 11) {
		document.querySelector(".popup-body .uv").style.color = `#FF0000`;
	} else if (current.day.uv >= 8) {
		document.querySelector(".popup-body .uv").style.color = `orange`;
	}

	// display the moon phase
	document.querySelector(
		".popup-body .moon-phase",
	).textContent = `${current.astro.moon_phase}`;

	// display the moon phase icon
	document.querySelector(
		".popup-body img[alt='Moon Phase icon']",
	).src = `./img/moon/${moonPhase}.svg`;
}

// display the detail of the hour card that was clicked on in the popup
function displayHourDetail(time) {
	const date = time.slice(0, 10); // get the date from the time
	// get the unit
	const unit = document.getElementById("unit-toggle").checked
		? "metric"
		: "imperial";
	let current; // the current hour's data

	// get the current hour's data
	weatherData.forecast.forecastday.every((day, i) => {
		// find the correct day
		if (date === day.date) {
			// find the correct hour
			weatherData.forecast.forecastday[i].hour.every((hour) => {
				if (time === hour.time) {
					// copy the hour's data
					current = hour;
					return false;
				}
				return true;
			});
			return false;
		}
		return true;
	});

	// if the condition text is too long, then make the text smaller
	if (countWords(current.condition.text) >= 6) {
		document
			.querySelector(".popup-body .current-condition")
			.classList.add("info-length");
	} else if (countWords(current.condition.text) >= 3) {
		document
			.querySelector(".popup-body .current-condition")
			.classList.add("medium-text");
	}

	// if the unit is imperial, then display the imperial data
	if (unit === "imperial") {
		// display the current temperature
		document.querySelector(
			".popup-body .current-temp",
		).textContent = `${current.temp_f} °F`;

		// display the feels like temperature
		document.querySelector(
			".popup-body .temp",
		).textContent = `${current.feelslike_f} °F`;
		// color code the feels like temperature
		// if the temperature is above 80 °F, then make the text red
		// if the temperature is below 50 °F, then make the text blue
		// otherwise, make the text white
		if (current.feelslike_f > 80) {
			document.querySelector(".popup-body .temp").style.color = `#FF0000`;
		} else if (current.feelslike_f < 50) {
			document.querySelector(".popup-body .temp").style.color = `#6495ED`;
		} else {
			document.querySelector(".popup-body .temp").style.color = `#dddddd`;
		}

		// display the wind speed
		document.querySelector(
			".popup-body .wind",
		).textContent = `${current.wind_mph} mph`;
		// color code the wind speed
		// if the wind speed is between 25 and 38 miles, then make the text orange
		// if the wind speed is above 38 miles, then make the text red
		// otherwise, make the text white
		if (current.wind_mph > 25 && current.wind_mph < 38) {
			document.querySelector(".popup-body .wind").style.color = `orange`;
		} else if (current.wind_mph > 38) {
			document.querySelector(".popup-body .wind").style.color = `#FF0000`;
		} else {
			document.querySelector(".popup-body .wind").style.color = `#dddddd`;
		}

		// display the pressure
		document.querySelector(
			".popup-body .pressure",
		).textContent = `${current.pressure_in} inHg`;
		// color code the pressure
		// if the pressure is below 30.15 inHg, then make the text red
		// if the pressure is below 29.6 inHg, then make the text orange
		// otherwise, make the text white
		if (current.pressure_in <= 30.15) {
			if (current.pressure_in < 29.6) {
				document.querySelector(".popup-body .pressure").style.color = `#FF0000`;
			} else {
				document.querySelector(".popup-body .pressure").style.color = `orange`;
			}
		} else {
			document.querySelector(".popup-body .pressure").style.color = `#dddddd`;
		}

		// display the visibility
		document.querySelector(
			".popup-body .visibility",
		).textContent = `${current.vis_miles} miles`;
		// color code the visibility
		// if the visibility is below 2 miles, then make the text orange
		// if the visibility is below 0.5 miles, then make the text red
		// otherwise, make the text white
		if (current.vis_miles <= 2) {
			if (current.vis_miles < 0.5) {
				document.querySelector(
					".popup-body .visibility",
				).style.color = `#FF0000`;
			} else {
				document.querySelector(
					".popup-body .visibility",
				).style.color = `orange`;
			}
		} else {
			document.querySelector(".popup-body .visibility").style.color = `#dddddd`;
		}

		// display the precipitation
		document.querySelector(
			".popup-body .precipitation",
		).textContent = `${current.precip_in} inches`;
		// color code the precipitation
		// if the precipitation is above 2 inches, then make the text blue
		// otherwise, make the text white
		if (current.precip_in >= 2) {
			document.querySelector(
				".popup-body .precipitation",
			).style.color = `#6495ED`;
		} else {
			document.querySelector(
				".popup-body .precipitation",
			).style.color = `#dddddd`;
		}

		// if the unit is metric, then display the metric data
	} else {
		// display the current temperature
		document.querySelector(
			".popup-body .current-temp",
		).textContent = `${current.temp_c} °C`;

		// display the feels like temperature
		document.querySelector(
			".popup-body .temp",
		).textContent = `${current.feelslike_c} °C`;
		// color code the feels like temperature
		// if the temperature is above 26.6 °C, then make the text red
		// if the temperature is below 10 °C, then make the text blue
		// otherwise, make the text white
		if (current.feelslike_c > 26.6) {
			document.querySelector(".popup-body .temp").style.color = `#FF0000`;
		} else if (current.feelslike_c < 10) {
			document.querySelector(".popup-body .temp").style.color = `#6495ED`;
		} else {
			document.querySelector(".popup-body .temp").style.color = `#dddddd`;
		}

		// display the wind speed
		document.querySelector(
			".popup-body .wind",
		).textContent = `${current.wind_kph} km/h`;
		// color code the wind speed
		// if the wind speed is between 40 and 61 km/h, then make the text orange
		// if the wind speed is above 61 km/h, then make the text red
		// otherwise, make the text white
		if (current.wind_kph > 40.2336 && current.wind_kph < 61.152) {
			document.querySelector(".popup-body .wind").style.color = `orange`;
		} else if (current.wind_kph > 61.152) {
			document.querySelector(".popup-body .wind").style.color = `#FF0000`;
		} else {
			document.querySelector(".popup-body .wind").style.color = `#dddddd`;
		}

		// display the pressure
		document.querySelector(
			".popup-body .pressure",
		).textContent = `${current.pressure_mb} mb`;
		// color code the pressure
		// if the pressure is below 1020.6 mb, then make the text red
		// if the pressure is below 1005.84 mb, then make the text orange
		// otherwise, make the text white
		if (current.pressure_mb <= 1020.6) {
			if (current.pressure_mb < 1005.84) {
				document.querySelector(".popup-body .pressure").style.color = `#FF0000`;
			} else {
				document.querySelector(".popup-body .pressure").style.color = `orange`;
			}
		} else {
			document.querySelector(".popup-body .pressure").style.color = `#dddddd`;
		}

		// display the visibility
		document.querySelector(
			".popup-body .visibility",
		).textContent = `${current.vis_km} km`;
		// color code the visibility
		// if the visibility is below 3.21869 km, then make the text orange
		// if the visibility is below 0.804672 km, then make the text red
		// otherwise, make the text white
		if (current.vis_km <= 3.21869) {
			if (current.vis_km < 0.804672) {
				document.querySelector(
					".popup-body .visibility",
				).style.color = `#FF0000`;
			} else {
				document.querySelector(
					".popup-body .visibility",
				).style.color = `orange`;
			}
		} else {
			document.querySelector(".popup-body .visibility").style.color = `#dddddd`;
		}

		// display the precipitation
		document.querySelector(
			".popup-body .precipitation",
		).textContent = `${current.precip_mm} mm`;
		// color code the precipitation
		// if the precipitation is above 50.8 mm, then make the text blue
		// otherwise, make the text white
		if (current.precip_mm >= 50.8) {
			document.querySelector(
				".popup-body .precipitation",
			).style.color = `#6495ED`;
		} else {
			document.querySelector(
				".popup-body .precipitation",
			).style.color = `#dddddd`;
		}
	}

	// format the time so that it can be displayed
	document.querySelector(".popup-body .current-location").textContent = format(
		new Date(current.time),
		"MMMM do, yyyy 'at' h a",
	);

	// display the current weather icon
	document.querySelector(
		".popup-body .current-icon",
	).src = `./img/weather/${current.condition.icon.slice(29)}`;

	// display the current condition
	document.querySelector(".popup-body .current-condition").textContent =
		current.condition.text;

	// display the humidity percentage
	document.querySelector(
		".popup-body .humidity",
	).textContent = `${current.humidity}%`;

	// display the chance of rain
	document.querySelector(
		".popup-body .rain",
	).textContent = `${current.chance_of_rain}%`;
	// if the chance of rain is above 70%, then make the text blue
	if (current.chance_of_rain > 70) {
		document.querySelector(".popup-body .rain").style.color = `#6495ED`;
	}

	// display the chance of snow
	document.querySelector(
		".popup-body .snow",
	).textContent = `${current.chance_of_snow}%`;
	// if the chance of snow is above 70%, then make the text blue
	if (current.chance_of_snow > 70) {
		document.querySelector(".popup-body .snow").style.color = `#6495ED`;
	}

	// display the air quality
	document.querySelector(".popup-body .air").textContent = `${getAirQuality(
		current.air_quality.pm2_5,
	)}`;

	// display the UV index
	document.querySelector(".popup-body .uv").textContent = `${current.uv}`;
	// color code the UV index
	if (current.uv >= 11) {
		document.querySelector(".popup-body .uv").style.color = `#FF0000`;
	} else if (current.uv >= 8) {
		document.querySelector(".popup-body .uv").style.color = `orange`;
	}
}

// ---------------------------------------------- Fetch Data from API ---------------------------------------- //

// get the weather from the API
async function getWeather(query) {
	loading(); // display the loading page
	try {
		// get response from the API
		const response = await fetch(
			`http://api.weatherapi.com/v1/forecast.json?days=3&aqi=yes&q=${query}&key=fca53d6c99b24b59ab3201455232107`,
			{ mode: "cors" },
		);
		// convert the response to JSON
		weatherData = await response.json();

		pageLoad(); // display the page
		lastUpdatedTime = new Date(); // get the current time and date
		const unit = document.getElementById("unit-toggle").checked // get the unit
			? "metric"
			: "imperial";
		displayWeatherData(weatherData, unit); // display the current weather
		displayForecast(); // display the hourly/2-day forecast
		// eslint-disable-next-line no-shadow
	} catch (error) {
		// if there is an error, then display the error page
		errorPage();
	}
}

// eslint-disable-next-line consistent-return
// get the list of cities from the API based on the user's search
async function fetchCities(searchText) {
	try {
		const accessToken =
			"pk.eyJ1Ijoic2hhaGlyLTQ3IiwiYSI6ImNsa2p1aWt6ajB4d20zbXJ6amVncnZ5MjAifQ.ohb466lrBmtSYDD40x3llg";
		const apiUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
			searchText,
		)}.json?access_token=${accessToken}&types=place&limit=10`;

		const response = await fetch(apiUrl);
		const data = await response.json();

		return data.features.map((feature) => feature.place_name);
	} catch (error) {
		return [];
	}
}

// display the list of autocomplete suggestions
async function displaySuggestions(predictions) {
	const suggestionsDiv = document.querySelector(".suggestions");
	const searchInput = document.querySelector(".search-box");
	const searchValue = document.querySelector(".search-input");
	// Clear the previous suggestions
	suggestionsDiv.innerHTML = "";
	searchInput.classList.add("active");

	// If there are no predictions, remove the suggestions list and return
	if (predictions.length === 0) {
		searchInput.classList.remove("active");
		return;
	}

	// Create and display the suggestion list
	const suggestionList = document.createElement("ul");
	predictions.forEach((prediction) => {
		const listItem = document.createElement("li");
		const text = document.createElement("span");
		text.textContent = prediction;
		listItem.appendChild(text);
		const copyIcon = document.createElement("img");
		copyIcon.src = copy;
		copyIcon.alt = "copy icon";
		copyIcon.classList.add("copy-icon");
		listItem.appendChild(copyIcon);
		listItem.addEventListener("click", (e) => {
			// If the copy icon is clicked, then copy the suggestion to the search input
			if (e.target.classList.contains("copy-icon")) {
				searchValue.value = prediction;
				// eslint-disable-next-line no-use-before-define
				updateSuggestions(prediction); // update the suggestions based on the new input
				return;
			}
			// Otherwise, if the suggested location is clicked, then get the weather for that location
			suggestionsDiv.innerHTML = ""; // clear the suggestions
			searchInput.classList.remove("active"); // remove the active class from the search input
			document.querySelector(".search-input").value = ""; // clear the search input
			getWeather(prediction); // get the weather for the location
		});
		suggestionList.appendChild(listItem);
	});
	suggestionsDiv.appendChild(suggestionList);
}

// update the autocomplete suggestions based on the user's input when the copy icon is clicked
async function updateSuggestions(searchText) {
	try {
		// Show the autocomplete predictions based on the user's input
		const predictions = await fetchCities(searchText); // get the list of predictions
		await displaySuggestions(predictions); // display the list of predictions
	} catch (error) {
		await displaySuggestions([]); // display an empty list of predictions
	}
}

// ---------------------------------------------- Display UI ---------------------------------------- //

// clear the search input and suggestions when the search button is clicked,
// when the enter key is pressed, when no predictions are found, or when there is no input
function clearSearch() {
	const searchBox = document.querySelector(".search-box");
	const suggestionsDiv = document.querySelector(".suggestions");
	const input = document.querySelector(".search-input");
	input.value = "";
	suggestionsDiv.innerHTML = "";
	searchBox.classList.remove("active");
}

// creates the header displayed at the top of the page
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

	// if the logo is clicked, then reload the page
	logoBox.addEventListener("click", () => {
		window.location.reload();
	});

	// search bar
	const searchContainer = document.createElement("div");
	searchContainer.classList.add("search-container");
	const searchBox = document.createElement("div");
	searchBox.classList.add("search-box");
	const searchInput = document.createElement("input");
	searchInput.classList.add("search-input");
	searchInput.type = "text";
	searchInput.placeholder = "Search";
	searchInput.id = "search";
	searchInput.name = "search";
	searchInput.setAttribute("autocorrect", "off");
	searchInput.setAttribute("autocapitalize", "none");
	searchInput.setAttribute("autocomplete", "off");
	searchBox.appendChild(searchInput);
	const searchButton = document.createElement("button");
	searchButton.classList.add("search-button");
	searchBox.appendChild(searchButton);
	const searchIcon = document.createElement("img");
	searchIcon.src = search;
	searchIcon.alt = "Search icon";
	searchButton.appendChild(searchIcon);
	const suggestions = document.createElement("div");
	suggestions.classList.add("suggestions");
	searchContainer.appendChild(searchBox);
	searchContainer.appendChild(suggestions);
	navBar.appendChild(searchContainer);

	// if the search button is clicked, then get the weather for the location
	searchButton.addEventListener("click", () => {
		const query = document.querySelector(".search-input").value; // get the user's input
		clearSearch(); // clear the search input and suggestions
		getWeather(query); // get the weather for the location
	});

	// if the enter key is pressed, then get the weather for the location
	searchInput.addEventListener("keyup", (e) => {
		if (e.key === "Enter") {
			const query = document.querySelector(".search-input").value; // get the user's input
			clearSearch(); // clear the search input and suggestions
			getWeather(query); // get the weather for the location
		}
	});

	// when the user types in the search input, then display the autocomplete suggestions
	searchInput.addEventListener("input", async () => {
		const searchText = searchInput.value.trim(); // get the user's input
		// if the input is not empty, then display the suggestions
		if (searchText.length > 0) {
			try {
				const predictions = await fetchCities(searchText); // get the list of predictions
				await displaySuggestions(predictions); // display the list of predictions
			} catch (error) {
				await displaySuggestions([]); // display an empty list of predictions
			}
		} else {
			// Clear the suggestions if the input is empty
			suggestions.innerHTML = "";
			searchBox.classList.remove("active");
		}
	});

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

	// if the toggle switch is clicked, then change the units
	navBar.appendChild(toggleBox);
	checkBox.addEventListener("change", () => {
		changeUnits(); // change the units
	});

	return navBar;
}

// show when was the last time the weather was updated
function showLastUpdated() {
	const lastUpdated = document.createElement("p");
	lastUpdated.classList.add("last-updated");
	const text = document.createElement("span");
	text.classList.add("last-updated-text");
	text.textContent = "Last Updated: 8/21/2021";
	lastUpdated.appendChild(text);
	const seperator = document.createElement("span");
	seperator.textContent = " • ";
	lastUpdated.appendChild(seperator);
	const click = document.createElement("span");
	click.textContent = "Click ";
	lastUpdated.appendChild(click);
	const link = document.createElement("span");
	link.classList.add("last-updated-link");
	link.textContent = "here";
	lastUpdated.appendChild(link);
	const refresh = document.createElement("span");
	refresh.textContent = " to refresh ↻";
	lastUpdated.appendChild(refresh);
	link.addEventListener("click", () => {
		getWeather(weatherData.location.name);
	});
	lastUpdated.appendChild(refresh);
	return lastUpdated;
}

// creates div for the whole page
function makePageContainer() {
	const pageContainer = document.createElement("div");
	pageContainer.classList.add("page-container");
	pageContainer.appendChild(showLastUpdated());
	return pageContainer;
}

// creates the footer displayed at the bottom of the page
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

// makes the layout to display the important data of the current weather
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

// makes the icon with the description and value displayed at the top-right side of the page
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

// makes the layout to display the data of the day
function displayDayWeather() {
	const moreWeather = document.createElement("div");
	moreWeather.classList.add("more-weather");
	moreWeather.classList.add("day");
	moreWeather.appendChild(createIndivInfo(wind, "Wind", "", "wind"));
	moreWeather.appendChild(
		createIndivInfo(humidity, "Humidity", "83%", "humidity"),
	);
	moreWeather.appendChild(
		createIndivInfo(rain, "Chance of Rain", "0%", "rain"),
	);
	moreWeather.appendChild(
		createIndivInfo(snowCloud, "Chance of Snow", "0%", "snow"),
	);
	moreWeather.appendChild(
		createIndivInfo(visibility, "Visibility", "10 mi", "visibility"),
	);
	moreWeather.appendChild(
		createIndivInfo(sunrise, "Sunrise", "6:00 AM", "sunrise"),
	);
	moreWeather.appendChild(
		createIndivInfo(sunset, "Sunset", "6:00 PM", "sunset"),
	);
	moreWeather.appendChild(createIndivInfo(air, "Air Quality", "Good", "air"));
	moreWeather.appendChild(createIndivInfo(uv, "UV Index", "0", "uv"));
	moreWeather.appendChild(
		createIndivInfo(raindrops, "Precipitation", "0 in", "precipitation"),
	);
	moreWeather.appendChild(createIndivInfo(snow, "Snow", "0 in", "snow-depth"));
	moreWeather.appendChild(
		createIndivInfo(moon, "Moon Phase", "Waning Gibbous", "moon-phase"),
	);
	return moreWeather;
}

// makes the layout to display the data of the current weather
// the one to the top-right side of the page
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
	moreWeather.appendChild(
		createIndivInfo(visibility, "Visibility", "10 mi", "visibility"),
	);
	moreWeather.appendChild(
		createIndivInfo(sunrise, "Sunrise", "6:00 AM", "sunrise"),
	);
	moreWeather.appendChild(
		createIndivInfo(sunset, "Sunset", "6:00 PM", "sunset"),
	);
	moreWeather.appendChild(
		createIndivInfo(pressure, "Pressure", "1000 mb", "pressure"),
	);
	moreWeather.appendChild(createIndivInfo(air, "Air Quality", "Good", "air"));
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

// makes the tab buttons to choose between the hourly and 2-day forecast
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
	// if the hourly forecast is chosen, then display the hourly forecast
	hourly.addEventListener("change", () => {
		if (document.querySelector("#hourly").checked) {
			displayForecast(); // display the hourly forecast
			document.querySelector(".forecast-slider").scrollLeft =
				previousScrollPosition; // scroll to the previous position
		}
	});

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
	day.addEventListener("change", () => {
		if (document.querySelector("#day").checked) {
			previousScrollPosition =
				document.querySelector(".forecast-slider").scrollLeft;
			displayForecast();
		}
	});

	container.appendChild(firstChoice);
	container.appendChild(secondChoice);

	return container;
}

// makes the layout to display the hourly forecast
function makeHourlyForecast() {
	const forecast = document.querySelector(".forecast");
	forecast.innerHTML = "";
	forecast.classList.remove("day-forecast");
	forecast.classList.add("hourly-forecast");

	// the back button to go left
	const backBtn = document.createElement("button");
	backBtn.classList.add("back-btn");
	backBtn.textContent = "<";
	forecast.appendChild(backBtn);

	// the slider to display the hourly forecast
	const forecastSlider = document.createElement("div");
	forecastSlider.classList.add("forecast-slider");
	forecast.appendChild(forecastSlider);

	// the next button to go right
	const nextBtn = document.createElement("button");
	nextBtn.classList.add("next-btn");
	nextBtn.textContent = ">";
	forecast.appendChild(nextBtn);
}

// makes the layout to display the 2-day forecast
function makeDayForecast() {
	const forecast = document.querySelector(".forecast");
	forecast.innerHTML = "";
	forecast.classList.remove("hourly-forecast");
	forecast.classList.add("day-forecast");
}

// makes the layout to display the hourly/2-day forecast
function makeForecast() {
	const forecast = document.createElement("div");
	forecast.classList.add("forecast");
	forecast.classList.add("hourly-forecast");
	return forecast;
}

// makes the layout to display the top half of the page
function makeMainContainer() {
	const pageContainer = document.querySelector(".page-container");
	const main = document.createElement("div");
	main.classList.add("main");
	main.appendChild(displayCurrentWeather());
	main.appendChild(displayMoreWeather());
	pageContainer.appendChild(main);
}

// display the main details of the day weather on the popup
function displayMainHour() {
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
	currentIcon.alt = "Weather icon";
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
	currentWeather.appendChild(currentInfo);
	return currentWeather;
}

// display the details of the hour weather on the popup
function displayHourDetails() {
	const moreWeather = document.createElement("div");
	moreWeather.classList.add("more-weather");
	moreWeather.classList.remove("day");
	// display the feels like temperature
	moreWeather.appendChild(createIndivInfo(temp, "Feels Like", "83 °F", "temp"));
	// display the humidity
	moreWeather.appendChild(
		createIndivInfo(humidity, "Humidity", "83%", "humidity"),
	);
	// display the chance of rain
	moreWeather.appendChild(
		createIndivInfo(rain, "Chance of Rain", "0%", "rain"),
	);
	// display the wind speed
	moreWeather.appendChild(createIndivInfo(wind, "Wind", "5 mph", "wind"));
	// display the chance of snow
	moreWeather.appendChild(
		createIndivInfo(snowCloud, "Chance of Snow", "0%", "snow"),
	);
	// display the visibility
	moreWeather.appendChild(
		createIndivInfo(visibility, "Visibility", "10 mi", "visibility"),
	);
	// display the pressure
	moreWeather.appendChild(
		createIndivInfo(pressure, "Pressure", "1000 mb", "pressure"),
	);
	// display the air quality
	moreWeather.appendChild(createIndivInfo(air, "Air Quality", "Good", "air"));
	// display the UV index
	moreWeather.appendChild(createIndivInfo(uv, "UV Index", "0", "uv"));
	// display the precipitation amount
	moreWeather.appendChild(
		createIndivInfo(raindrops, "Precipitation", "0 in", "precipitation"),
	);
	return moreWeather;
}

// UI for the details popup
// shows the weather when the popup is displayed by clicking on the day card
function displayMainDay() {
	const currentWeather = document.createElement("div");
	currentWeather.classList.add("current-weather-day");

	const currentInfo = document.createElement("div");
	currentInfo.classList.add("current-info-day");

	const currentDate = document.createElement("h2");
	currentDate.classList.add("current-date");
	currentDate.textContent = "";
	currentInfo.appendChild(currentDate);

	const currentData = document.createElement("div");
	currentData.classList.add("current-data-day");

	const currentIcon = document.createElement("img");
	currentIcon.classList.add("current-icon-day");
	currentIcon.src = icon;
	currentIcon.alt = `Weather icon`;
	currentData.appendChild(currentIcon);

	const currentDetails = document.createElement("div");
	currentDetails.classList.add("current-details-day");

	const currentCondition = document.createElement("h4");
	currentCondition.classList.add("current-condition-day");
	currentCondition.textContent = "";
	currentDetails.appendChild(currentCondition);
	currentData.appendChild(currentDetails);
	currentInfo.appendChild(currentData);

	const currentMinMax = document.createElement("h5");
	currentMinMax.classList.add("current-min-max");

	const currentMin = document.createElement("span");
	currentMin.classList.add("current-min");
	currentMinMax.appendChild(currentMin);

	const currentMax = document.createElement("span");
	currentMax.classList.add("current-max");
	currentMinMax.appendChild(currentMax);
	currentInfo.appendChild(currentMinMax);
	currentWeather.appendChild(currentInfo);
	return currentWeather;
}

// UI for the details popup
function showDetails(type) {
	const popupBody = document.querySelector(".popup-body");
	popupBody.innerHTML = "";
	const main = document.createElement("div");
	if (type === "hour") {
		main.classList.add("main");
		main.appendChild(displayMainHour());
		main.appendChild(displayHourDetails());
	} else {
		main.classList.add("main-day");
		main.appendChild(displayMainDay());
		main.appendChild(displayDayWeather());
	}
	popupBody.appendChild(main);
}

// display the bottom half of the page
function bottomContainer() {
	const pageContainer = document.querySelector(".page-container");
	const bottom = document.createElement("div");
	bottom.classList.add("bottom");
	bottom.appendChild(chooseForecast());
	bottom.appendChild(makeForecast());
	pageContainer.appendChild(bottom);
}

// display hourly or 2-day forecast depending on the user's choice
function displayForecast(scroll = 0) {
	const forecast = document.querySelector(".forecast");
	const choice = document.querySelector('input[name="forecast"]:checked').value;

	if (choice === "hourly") {
		forecast.innerHTML = "";
		forecast.classList.remove("daily-forecast");
		forecast.classList.add("hourly-forecast");
		makeHourlyForecast();
		showHourlyTab();
		document.querySelector(".forecast-slider").scrollLeft = scroll;
	} else {
		forecast.innerHTML = "";
		forecast.classList.remove("hourly-forecast");
		forecast.classList.add("day-forecast");
		makeDayForecast();
		showDayTab();
	}
}

// add buttons to the forecast slider and control the scrolling
function buttons() {
	const cardsWrapper = document.querySelector(".forecast-slider");
	const backBtn = document.querySelector(".back-btn");
	const nextBtn = document.querySelector(".next-btn");
	let isScrolling = false; // This variable will be used to indicate scrolling status
	let scrollDirection = 0; // 0 for left, 1 for right
	const scrollStep = 5.75; // This value controls the smoothness of the scroll

	// smooth scroll animation
	const animateScroll = () => {
		// if scrolling is still in progress, then continue scrolling
		if (!isScrolling) return;

		// scroll by the scrollStep
		const scrollDistance = scrollDirection === 0 ? -scrollStep : scrollStep;
		cardsWrapper.scrollLeft += scrollDistance;

		// if the scroll is not at the end, then continue scrolling
		if (
			(scrollDirection === 0 && cardsWrapper.scrollLeft > 0) ||
			(scrollDirection === 1 &&
				cardsWrapper.scrollLeft + cardsWrapper.offsetWidth <
					cardsWrapper.scrollWidth)
		) {
			// animate the scroll at 60 frames per second
			requestAnimationFrame(animateScroll);
		} else {
			// otherwise, stop scrolling
			isScrolling = false;
		}
	};

	// scroll left when the back button is clicked
	const scrollLeft = () => {
		// if the scroll is not in progress, then start scrolling
		if (!isScrolling) {
			scrollDirection = 0; // 0 for left
			isScrolling = true; // the scroll is in progress
			animateScroll(); // start scrolling
		}
	};

	// scroll right when the next button is clicked
	const scrollRight = () => {
		// if the scroll is not in progress, then start scrolling
		if (!isScrolling) {
			scrollDirection = 1; // 1 for right
			isScrolling = true; // the scroll is in progress
			animateScroll(); // start scrolling
		}
	};

	// stop scrolling when the mouse leaves the button
	const stopScroll = () => {
		isScrolling = false; // the scroll is not in progress
	};

	// add event listeners to the buttons
	backBtn.addEventListener("mouseenter", scrollLeft); // Scroll left on mouse enter
	backBtn.addEventListener("mouseleave", stopScroll); // Stop scrolling on mouse leave
	nextBtn.addEventListener("mouseenter", scrollRight); // Scroll right on mouse enter
	nextBtn.addEventListener("mouseleave", stopScroll); // Stop scrolling on mouse leave
}

// display the hourly tab
function showHourlyTab() {
	const unit = document.getElementById("unit-toggle").checked
		? "metric"
		: "imperial";
	createHourlyCard(weatherData, unit);
	buttons();
}

// display the 2-day tab
function showDayTab() {
	const unit = document.getElementById("unit-toggle").checked
		? "metric"
		: "imperial";
	createDayCard(weatherData, unit);
}

// change the units for the whole page
function changeUnits() {
	// get the unit
	const unit = document.getElementById("unit-toggle").checked
		? "metric"
		: "imperial";

	// if currently the hourly forecast is displayed, then preserve the scroll position
	if (document.querySelector("#hourly").checked) {
		previousScrollPosition =
			document.querySelector(".forecast-slider").scrollLeft;
	}

	// display the weather data with the new units
	displayWeatherData(weatherData, unit);
	displayForecast(); // display the forecast with the new units

	// if the hourly forecast was displayed, then scroll to the previous position
	if (document.querySelector("#hourly").checked) {
		document.querySelector(".forecast-slider").scrollLeft =
			previousScrollPosition;
	}
}

// creates the popup to display the details of the weather based...
// ...on the hour or day card clicked by the user
function popUp() {
	const popupContainer = document.createElement("div");
	popupContainer.setAttribute("id", "popup-container");
	const popup = document.createElement("div");
	popup.setAttribute("id", "popup");

	const popupHeader = document.createElement("div");
	popupHeader.classList.add("popup-header");
	const popupTitle = document.createElement("h2");
	popupTitle.textContent = "Detailed Weather Information";
	popupHeader.appendChild(popupTitle);

	const closeBtn = document.createElement("button");
	closeBtn.classList.add("close-btn");
	closeBtn.id = "closeDetailsBtn";
	closeBtn.textContent = "X";
	popupHeader.appendChild(closeBtn);
	popup.appendChild(popupHeader);

	// close the popup when the close button is clicked
	closeBtn.addEventListener("click", () => {
		document.querySelector("#popup-container").style.display = "none";
	});

	const popupBody = document.createElement("div");
	popupBody.classList.add("popup-body");
	popup.appendChild(popupBody);

	popupContainer.appendChild(popup);
	document.querySelector("#content").appendChild(popupContainer);
}

// -------------------------------------- Main Page, Error Page, and Loading page  ---------------------- //

// loads the page
function pageLoad() {
	const content = document.querySelector("#content");
	content.innerHTML = ""; // clear the content
	content.appendChild(displayNavBar()); // display the navbar
	content.appendChild(makePageContainer()); // display the page container
	content.appendChild(displayFooter()); // display the footer
	makeMainContainer(); // display the top half of the page
	bottomContainer(); // display the bottom half of the page
	popUp(); // add the popup
}

// loading page
function loading() {
	const content = document.querySelector("#content");
	content.innerHTML = ""; // clear the content

	content.appendChild(displayNavBar()); // display the navbar

	// display the loading gif
	const loadingBox = document.createElement("div");
	loadingBox.classList.add("loading-box");
	const loadingIcon = document.createElement("img");
	loadingIcon.classList.add("loading-icon");
	loadingIcon.src = load;
	loadingIcon.alt = "loading icon";
	loadingBox.appendChild(loadingIcon);
	content.appendChild(loadingBox);

	content.appendChild(displayFooter()); // display the footer
}

// error page
function errorPage() {
	const content = document.querySelector("#content");
	content.innerHTML = ""; // clear the content

	content.appendChild(displayNavBar()); // display the navbar

	// display the error message
	const errorBox = document.createElement("div");
	errorBox.classList.add("error-box");
	const errorIcon = document.createElement("img");
	errorIcon.classList.add("error-icon");
	errorIcon.src = sad; // error icon
	errorIcon.alt = "sad icon";
	const errorText = document.createElement("h2");
	errorText.classList.add("error-text");
	errorText.textContent =
		"Sorry, we couldn't find weather data for the entered location. Please check the spelling and try again with a valid city or address.";
	errorBox.appendChild(errorIcon);
	errorBox.appendChild(errorText);
	content.appendChild(errorBox);

	content.appendChild(displayFooter()); // display the footer
}

// -------------------------------------- User's Location --------------------------------------------- //

// get User's location to display accurate weather data
function getLocation() {
	// if the browser supports geolocation, then ask for permission
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(success, error);
	} else {
		// otherwise, get the weather for the user's IP address
		getWeather("auto:ip");
	}
}

// if the user allowed to share their location, then get the weather for their location
function success(position) {
	getWeather(`${position.coords.latitude}, ${position.coords.longitude}`);
}

// if the user denied to share their location, then get the weather for their IP address
function error() {
	getWeather("auto:ip");
}

// -------------------------------------- All functions end here --------------------------------------------- //

// start the webpage by asking the user's location
getLocation();
