/* eslint-disable no-use-before-define */
// eslint-disable-next-line import/no-extraneous-dependencies
import { parse, format, compareAsc } from "date-fns";
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
import sunsetIcon from "../img/sunsetIcon.svg";
import morning from "../img/morning.svg";
import copy from "../img/copy.svg";
import load from "../img/load.gif";
import sad from "../img/sad.svg";

let weatherData = {};
let lastUpdatedTime = new Date();
let previousScrollPosition = 0;

// --------------------------------- Helper Methods to display data --------------------------------- //

const getAirQuality = (aqi) => {
	if (aqi <= 50) {
		return "Good";
	}
	if (aqi <= 100) {
		return "Moderate";
	}
	if (aqi <= 150) {
		document.querySelector(".air").style.color = "orange";
		document.querySelector(".air").classList.add("long-text");
		return "Unhealthy for Sensitive Groups";
	}
	if (aqi <= 200) {
		document.querySelector(".air").style.color = "#FF0000";
		return "Unhealthy";
	}
	if (aqi <= 300) {
		document.querySelector(".air").style.color = "#FF0000";
		return "Very Unhealthy!!!";
	}
	return "Hazardous";
};

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

function formatDate(date) {
	const formattedDate = format(date, "MMM do, yyyy 'at' h:mm a");
	return `Last updated on ${formattedDate}`;
}

function convertCmToInches(cm) {
	const inchesPerCm = 1 / 2.54;
	return cm * inchesPerCm;
}

function countWords(text) {
	// Remove leading and trailing white spaces from the text
	const textStr = text.trim();
	// Split the text into an array of words using space as the delimiter
	const wordsArray = textStr.split(/\s+/);
	// Return the number of words in the array
	return wordsArray.length;
}

// --------------------------------- Display Data from API --------------------------------- //

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

	const hourlyTime = document.createElement("h3");
	hourlyTime.classList.add("hourly-time");
	hourlyTime.textContent = time === "Now" ? time : formatTime(time);
	hourlyCard.appendChild(hourlyTime);

	const hourlyIcon = document.createElement("img");
	hourlyIcon.classList.add("hourly-icon");
	hourlyIcon.src = weatherIcon;
	hourlyIcon.alt = "weather icon";
	hourlyCard.appendChild(hourlyIcon);

	const hourlyTemp = document.createElement("h4");
	hourlyTemp.classList.add("hourly-temp");
	hourlyTemp.textContent = tempInfo;
	hourlyCard.appendChild(hourlyTemp);

	const hourlyCondition = document.createElement("h5");
	hourlyCondition.classList.add("hourly-condition");
	hourlyCondition.textContent = condition;
	hourlyCard.appendChild(hourlyCondition);
	if (countWords(condition) >= 3) {
		hourlyCondition.classList.add("hourly-long");
	}

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
	moreInfoRainText.textContent = rainChance;
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
	moreInfoSnowText.textContent = snowChance;
	moreInfoSnow.appendChild(moreInfoSnowText);
	moreInfo.appendChild(moreInfoSnow);

	hourlyCard.appendChild(moreInfo);

	hourlyCard.addEventListener("click", () => {
		if (id !== "Now") {
			document.querySelector("#popup-container").style.display = "block";
			showDetails();
			displayHourDetail(id);
		}
	});

	return hourlyCard;
}

function createHourlyCard(data, unit) {
	const forecastSlider = document.querySelector(".forecast-slider");
	forecastSlider.innerHTML = "";
	const now = parse(data.location.localtime.slice(11, 16), "HH:mm", new Date());
	let index = 0;
	let totalCards = 0;
	let currentTemp;
	if (unit === "imperial") {
		currentTemp = `${data.current.temp_f} °F`;
	} else {
		currentTemp = `${data.current.temp_c} °C`;
	}

	data.forecast.forecastday[0].hour.every((hour, i) => {
		const time = parse(hour.time.slice(11, 16), "HH:mm", new Date());
		if (compareAsc(now, time) === -1) {
			index = i;
			return false;
		}
		return true;
	});

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
	totalCards += 1;

	for (let i = index; i < 24; i += 1) {
		let nextIndex = i + 1;
		if (nextIndex === 24) {
			nextIndex = 0;
		}

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

		const time = data.forecast.forecastday[0].hour[i].time.slice(11, 16);
		const timeFormat = parse(time, "HH:mm", new Date());
		const nextTime = data.forecast.forecastday[0].hour[nextIndex].time.slice(
			11,
			16,
		);
		const nextTimeFormat = parse(nextTime, "HH:mm", new Date());
		const iconImage = `./img/weather/${data.forecast.forecastday[0].hour[
			i
		].condition.icon.slice(29)}`;

		let temperature;
		if (unit === "imperial") {
			temperature = `${data.forecast.forecastday[0].hour[i].temp_f} °F`;
		} else {
			temperature = `${data.forecast.forecastday[0].hour[i].temp_c} °C`;
		}
		const condition = data.forecast.forecastday[0].hour[i].condition.text;
		const rainChance = `${data.forecast.forecastday[0].hour[i].chance_of_rain}%`;
		const snowChance = `${data.forecast.forecastday[0].hour[i].chance_of_snow}%`;

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
		totalCards += 1;

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

	console.log(totalCards);

	for (let i = 0; i < 26 - totalCards; i += 1) {
		let nextIndex = i + 1;
		if (nextIndex === 24) {
			nextIndex = 0;
		}
		const time = data.forecast.forecastday[1].hour[i].time.slice(11, 16);
		const sunriseTime = parse(
			data.forecast.forecastday[1].astro.sunrise,
			"h:mm a",
			new Date(),
		);
		const sunsetTime = parse(
			data.forecast.forecastday[1].astro.sunset,
			"h:mm a",
			new Date(),
		);
		const timeFormat = parse(time, "HH:mm", new Date());
		const nextTime = data.forecast.forecastday[1].hour[nextIndex].time.slice(
			11,
			16,
		);
		const nextTimeFormat = parse(nextTime, "HH:mm", new Date());
		const iconImage = `./img/weather/${data.forecast.forecastday[1].hour[
			i
		].condition.icon.slice(29)}`;
		let temperature;
		if (unit === "imperial") {
			temperature = `${data.forecast.forecastday[1].hour[i].temp_f} °F`;
		} else {
			temperature = `${data.forecast.forecastday[1].hour[i].temp_c} °C`;
		}
		const condition = data.forecast.forecastday[1].hour[i].condition.text;
		const rainChance = `${data.forecast.forecastday[1].hour[i].chance_of_rain}%`;
		const snowChance = `${data.forecast.forecastday[1].hour[i].chance_of_snow}%`;

		forecastSlider.appendChild(
			makeHourlyCard(
				time,
				iconImage,
				temperature,
				condition,
				rainChance,
				snowChance,
				data.forecast.forecastday[1].hour[i].time,
			),
		);
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
	console.log(totalCards);
}

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

		const currentTemp = document.createElement("h3");
		currentTemp.classList.add("current-temp-day");
		if (unit === "imperial") {
			currentTemp.textContent = `${data.forecast.forecastday[i].day.maxtemp_f} °F`;
		} else {
			currentTemp.textContent = `${data.forecast.forecastday[i].day.maxtemp_c} °C`;
		}
		currentDetails.appendChild(currentTemp);

		const currentCondition = document.createElement("h4");
		currentCondition.classList.add("current-condition-day");
		currentCondition.textContent = "Sunny";
		currentDetails.appendChild(currentCondition);
		currentData.appendChild(currentDetails);
		currentInfo.appendChild(currentData);
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
	}
}

function displayWeatherData(data, unit) {
	const lastUpdated = document.querySelector(".last-updated-text");
	if (lastUpdated === null) {
		return;
	}
	lastUpdated.textContent = formatDate(lastUpdatedTime);

	if (countWords(data.current.condition.text) >= 6) {
		document.querySelector(".current-condition").classList.add("info-length");
	} else if (countWords(data.current.condition.text) >= 3) {
		document.querySelector(".current-condition").classList.add("medium-text");
	}

	if (unit === "imperial") {
		document.querySelector(
			".current-temp",
		).textContent = `${data.current.temp_f} °F`;

		document.querySelector(
			".current-min",
		).textContent = `Min: ${data.forecast.forecastday[0].day.mintemp_f} °F`;

		document.querySelector(
			".current-max",
		).textContent = `Max: ${data.forecast.forecastday[0].day.maxtemp_f} °F`;

		document.querySelector(
			".temp",
		).textContent = `${data.current.feelslike_f} °F`;
		if (data.current.feelslike_f > 80) {
			document.querySelector(".temp").style.color = `#FF0000`;
		} else if (data.current.feelslike_f < 50) {
			document.querySelector(".temp").style.color = `#6495ED`;
		} else {
			document.querySelector(".temp").style.color = `#dddddd`;
		}

		document.querySelector(
			".wind",
		).textContent = `${data.current.wind_mph} mph`;
		if (data.current.wind_mph > 25 && data.current.wind_mph < 38) {
			document.querySelector(".wind").style.color = `orange`;
		} else if (data.current.wind_mph > 38) {
			document.querySelector(".wind").style.color = `#FF0000`;
		} else {
			document.querySelector(".wind").style.color = `#dddddd`;
		}

		document.querySelector(
			".pressure",
		).textContent = `${data.current.pressure_in} inHg`;
		if (data.current.pressure_in <= 30.15) {
			if (data.current.pressure_in < 29.6) {
				document.querySelector(".pressure").style.color = `#FF0000`;
			} else {
				document.querySelector(".pressure").style.color = `orange`;
			}
		} else {
			document.querySelector(".pressure").style.color = `#dddddd`;
		}

		document.querySelector(
			".visibility",
		).textContent = `${data.current.vis_miles} miles`;
		if (data.current.vis_miles <= 2) {
			if (data.current.vis_miles < 0.5) {
				document.querySelector(".visibility").style.color = `#FF0000`;
			} else {
				document.querySelector(".visibility").style.color = `orange`;
			}
		} else {
			document.querySelector(".visibility").style.color = `#dddddd`;
		}

		document.querySelector(
			".precipitation",
		).textContent = `${data.current.precip_in} inches`;
		if (data.current.precip_in >= 2) {
			document.querySelector(".precipitation").style.color = `#6495ED`;
		} else {
			document.querySelector(".precipitation").style.color = `#dddddd`;
		}

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
	} else {
		document.querySelector(
			".current-temp",
		).textContent = `${data.current.temp_c} °C`;

		document.querySelector(
			".current-min",
		).textContent = `Min: ${data.forecast.forecastday[0].day.mintemp_c} °C`;

		document.querySelector(
			".current-max",
		).textContent = `Max: ${data.forecast.forecastday[0].day.maxtemp_c} °C`;

		document.querySelector(
			".temp",
		).textContent = `${data.current.feelslike_c} °C`;
		if (data.current.feelslike_c > 26.6) {
			document.querySelector(".temp").style.color = `#FF0000`;
		} else if (data.current.feelslike_c < 10) {
			document.querySelector(".temp").style.color = `#6495ED`;
		} else {
			document.querySelector(".temp").style.color = `#dddddd`;
		}

		document.querySelector(
			".wind",
		).textContent = `${data.current.wind_kph} km/h`;
		if (data.current.wind_kph > 40.2336 && data.current.wind_kph < 61.152) {
			document.querySelector(".wind").style.color = `orange`;
		} else if (data.current.wind_kph > 61.152) {
			document.querySelector(".wind").style.color = `#FF0000`;
		} else {
			document.querySelector(".wind").style.color = `#dddddd`;
		}

		document.querySelector(
			".pressure",
		).textContent = `${data.current.pressure_mb} mb`;
		if (data.current.pressure_mb <= 1020.6) {
			if (data.current.pressure_mb < 1005.84) {
				document.querySelector(".pressure").style.color = `#FF0000`;
			} else {
				document.querySelector(".pressure").style.color = `orange`;
			}
		} else {
			document.querySelector(".pressure").style.color = `#dddddd`;
		}

		document.querySelector(
			".visibility",
		).textContent = `${data.current.vis_km} km`;
		if (data.current.vis_km <= 3.21869) {
			if (data.current.vis_km < 0.804672) {
				document.querySelector(".visibility").style.color = `#FF0000`;
			} else {
				document.querySelector(".visibility").style.color = `orange`;
			}
		} else {
			document.querySelector(".visibility").style.color = `#dddddd`;
		}

		document.querySelector(
			".precipitation",
		).textContent = `${data.current.precip_mm} mm`;
		if (data.current.precip_mm >= 50.8) {
			document.querySelector(".precipitation").style.color = `#6495ED`;
		} else {
			document.querySelector(".precipitation").style.color = `#dddddd`;
		}

		document.querySelector(
			".snow-depth",
		).textContent = `${data.forecast.forecastday[0].day.totalsnow_cm} cm`;
		if (data.forecast.forecastday[0].day.totalsnow_cm >= 30.48) {
			document.querySelector(".snow-depth").style.color = `#6495ED`;
		} else {
			document.querySelector(".snow-depth").style.color = `#dddddd`;
		}
	}

	let moonPhase = data.forecast.forecastday[0].astro.moon_phase;
	moonPhase = moonPhase.replace(" ", "-");
	moonPhase = moonPhase.toLowerCase();

	let location;
	if (data.location.name.length > 17) {
		location = `${data.location.name.slice(0, 17)}...`;
	} else {
		location = data.location.name;
	}
	document.querySelector(".current-location").textContent = location;

	document.querySelector(
		".current-icon",
	).src = `./img/weather/${data.current.condition.icon.slice(29)}`;

	document.querySelector(".current-condition").textContent =
		data.current.condition.text;

	document.querySelector(".humidity").textContent = `${data.current.humidity}%`;

	document.querySelector(
		".rain",
	).textContent = `${data.forecast.forecastday[0].day.daily_chance_of_rain}%`;
	if (data.forecast.forecastday[0].day.daily_chance_of_rain > 70) {
		document.querySelector(".rain").style.color = `#6495ED`;
	}

	document.querySelector(
		".snow",
	).textContent = `${data.forecast.forecastday[0].day.daily_chance_of_snow}%`;
	if (data.forecast.forecastday[0].day.daily_chance_of_snow > 70) {
		document.querySelector(".snow").style.color = `#6495ED`;
	}

	document.querySelector(".air").textContent = `${getAirQuality(
		data.current.air_quality.pm2_5,
	)}`;

	document.querySelector(
		".sunrise",
	).textContent = `${data.forecast.forecastday[0].astro.sunrise}`;

	document.querySelector(
		".sunset",
	).textContent = `${data.forecast.forecastday[0].astro.sunset}`;

	document.querySelector(".uv").textContent = `${data.current.uv}`;
	if (data.current.uv >= 11) {
		document.querySelector(".uv").style.color = `#FF0000`;
	} else if (data.current.uv >= 8) {
		document.querySelector(".uv").style.color = `orange`;
	}

	document.querySelector(".cloud-cover").textContent = `${data.current.cloud}%`;

	document.querySelector(
		".moon-phase",
	).textContent = `${data.forecast.forecastday[0].astro.moon_phase}`;

	document.querySelector(
		"img[alt='Moon Phase icon']",
	).src = `./img/moon/${moonPhase}.svg`;
}

function displayHourDetail(time) {
	const date = time.slice(0, 10);
	const unit = document.getElementById("unit-toggle").checked
		? "metric"
		: "imperial";
	let current;

	weatherData.forecast.forecastday.every((day, i) => {
		if (date === day.date) {
			weatherData.forecast.forecastday[i].hour.every((hour) => {
				if (time === hour.time) {
					current = hour;
					return false;
				}
				return true;
			});
			return false;
		}
		return true;
	});

	console.log(current);
	debugger;

	if (countWords(current.condition.text) >= 6) {
		document
			.querySelector(".popup-body .current-condition")
			.classList.add("info-length");
	} else if (countWords(current.condition.text) >= 3) {
		document
			.querySelector("popup-body .current-condition")
			.classList.add("medium-text");
	}

	if (unit === "imperial") {
		document.querySelector(
			".popup-body .current-temp",
		).textContent = `${current.temp_f} °F`;

		document.querySelector(
			".popup-body .temp",
		).textContent = `${current.feelslike_f} °F`;
		if (current.feelslike_f > 80) {
			document.querySelector(".popup-body .temp").style.color = `#FF0000`;
		} else if (current.feelslike_f < 50) {
			document.querySelector(".popup-body .temp").style.color = `#6495ED`;
		} else {
			document.querySelector(".popup-body .temp").style.color = `#dddddd`;
		}

		document.querySelector(
			".popup-body .wind",
		).textContent = `${current.wind_mph} mph`;
		if (current.wind_mph > 25 && current.wind_mph < 38) {
			document.querySelector(".popup-body .wind").style.color = `orange`;
		} else if (current.wind_mph > 38) {
			document.querySelector(".popup-body .wind").style.color = `#FF0000`;
		} else {
			document.querySelector(".popup-body .wind").style.color = `#dddddd`;
		}

		document.querySelector(
			".popup-body .pressure",
		).textContent = `${current.pressure_in} inHg`;
		if (current.pressure_in <= 30.15) {
			if (current.pressure_in < 29.6) {
				document.querySelector(".popup-body .pressure").style.color = `#FF0000`;
			} else {
				document.querySelector(".popup-body .pressure").style.color = `orange`;
			}
		} else {
			document.querySelector(".popup-body .pressure").style.color = `#dddddd`;
		}

		document.querySelector(
			".popup-body .visibility",
		).textContent = `${current.vis_miles} miles`;
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

		document.querySelector(
			".popup-body .precipitation",
		).textContent = `${current.precip_in} inches`;
		if (current.precip_in >= 2) {
			document.querySelector(
				".popup-body .precipitation",
			).style.color = `#6495ED`;
		} else {
			document.querySelector(
				".popup-body .precipitation",
			).style.color = `#dddddd`;
		}
	} else {
		document.querySelector(
			".popup-body .current-temp",
		).textContent = `${current.temp_c} °C`;

		document.querySelector(
			".popup-body .temp",
		).textContent = `${current.feelslike_c} °C`;
		if (current.feelslike_c > 26.6) {
			document.querySelector(".popup-body .temp").style.color = `#FF0000`;
		} else if (current.feelslike_c < 10) {
			document.querySelector(".popup-body .temp").style.color = `#6495ED`;
		} else {
			document.querySelector(".popup-body .temp").style.color = `#dddddd`;
		}

		document.querySelector(
			".popup-body .wind",
		).textContent = `${current.wind_kph} km/h`;
		if (current.wind_kph > 40.2336 && current.wind_kph < 61.152) {
			document.querySelector(".popup-body .wind").style.color = `orange`;
		} else if (current.wind_kph > 61.152) {
			document.querySelector(".popup-body .wind").style.color = `#FF0000`;
		} else {
			document.querySelector(".popup-body .wind").style.color = `#dddddd`;
		}

		document.querySelector(
			".popup-body .pressure",
		).textContent = `${current.pressure_mb} mb`;
		if (current.pressure_mb <= 1020.6) {
			if (current.pressure_mb < 1005.84) {
				document.querySelector(".popup-body .pressure").style.color = `#FF0000`;
			} else {
				document.querySelector(".popup-body .pressure").style.color = `orange`;
			}
		} else {
			document.querySelector(".popup-body .pressure").style.color = `#dddddd`;
		}

		document.querySelector(
			".popup-body .visibility",
		).textContent = `${current.vis_km} km`;
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

		document.querySelector(
			".popup-body .precipitation",
		).textContent = `${current.precip_mm} mm`;
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

	document.querySelector(".popup-body .current-location").textContent = format(
		new Date(current.time),
		"MMMM do, yyyy 'at' h a",
	);

	document.querySelector(
		".popup-body .current-icon",
	).src = `./img/weather/${current.condition.icon.slice(29)}`;

	document.querySelector(".popup-body .current-condition").textContent =
		current.condition.text;

	document.querySelector(
		".popup-body .humidity",
	).textContent = `${current.humidity}%`;

	document.querySelector(
		".popup-body .rain",
	).textContent = `${current.chance_of_rain}%`;
	if (current.chance_of_rain > 70) {
		document.querySelector(".popup-body .rain").style.color = `#6495ED`;
	}

	document.querySelector(
		".popup-body .snow",
	).textContent = `${current.chance_of_snow}%`;
	if (current.chance_of_snow > 70) {
		document.querySelector(".popup-body .snow").style.color = `#6495ED`;
	}

	document.querySelector(".popup-body .air").textContent = `${getAirQuality(
		current.air_quality.pm2_5,
	)}`;

	document.querySelector(".popup-body .uv").textContent = `${current.uv}`;
	if (current.uv >= 11) {
		document.querySelector(".popup-body .uv").style.color = `#FF0000`;
	} else if (current.uv >= 8) {
		document.querySelector(".popup-body .uv").style.color = `orange`;
	}
}

function buttons() {
	const cardsWrapper = document.querySelector(".forecast-slider");
	const backBtn = document.querySelector(".back-btn");
	const nextBtn = document.querySelector(".next-btn");
	let isScrolling = false;
	let scrollDirection = 0; // 0 for left, 1 for right
	const scrollStep = 5.75; // Adjust this value to control the smoothness of the scroll

	const animateScroll = () => {
		if (!isScrolling) return;

		const scrollDistance = scrollDirection === 0 ? -scrollStep : scrollStep;
		cardsWrapper.scrollLeft += scrollDistance;

		if (
			(scrollDirection === 0 && cardsWrapper.scrollLeft > 0) ||
			(scrollDirection === 1 &&
				cardsWrapper.scrollLeft + cardsWrapper.offsetWidth <
					cardsWrapper.scrollWidth)
		) {
			requestAnimationFrame(animateScroll);
		} else {
			isScrolling = false;
		}
	};

	const scrollLeft = () => {
		if (!isScrolling) {
			scrollDirection = 0;
			isScrolling = true;
			animateScroll();
		}
	};

	const scrollRight = () => {
		if (!isScrolling) {
			scrollDirection = 1;
			isScrolling = true;
			animateScroll();
		}
	};

	const stopScroll = () => {
		isScrolling = false;
	};

	backBtn.addEventListener("mouseenter", scrollLeft);
	backBtn.addEventListener("mouseleave", stopScroll); // Stop scrolling on mouse leave

	nextBtn.addEventListener("mouseenter", scrollRight);
	nextBtn.addEventListener("mouseleave", stopScroll); // Stop scrolling on mouse leave
}

async function getWeather(query) {
	loading();
	try {
		const response = await fetch(
			`http://api.weatherapi.com/v1/forecast.json?days=3&aqi=yes&q=${query}&key=fca53d6c99b24b59ab3201455232107`,
			{ mode: "cors" },
		);
		weatherData = await response.json();
		console.log(weatherData);
		pageLoad();
		lastUpdatedTime = new Date();
		const unit = document.getElementById("unit-toggle").checked
			? "metric"
			: "imperial";
		displayWeatherData(weatherData, unit);
		displayForecast();
		// eslint-disable-next-line no-shadow
	} catch (error) {
		errorPage();
	}
}

// eslint-disable-next-line consistent-return
async function fetchCities(searchText) {
	try {
		const accessToken =
			"pk.eyJ1Ijoic2hhaGlyLTQ3IiwiYSI6ImNsa2p1aWt6ajB4d20zbXJ6amVncnZ5MjAifQ.ohb466lrBmtSYDD40x3llg";
		const apiUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
			searchText,
		)}.json?access_token=${accessToken}&types=place&limit=10`;

		const response = await fetch(apiUrl);
		const data = await response.json();
		console.log(data);
		return data.features.map((feature) => feature.place_name);
	} catch (error) {
		console.log(error);
	}
}

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
			// When the user clicks on a suggestion, display its forecast
			if (e.target.classList.contains("copy-icon")) {
				searchValue.value = prediction;
				// eslint-disable-next-line no-use-before-define
				updateSuggestions(prediction);
				return;
			}
			suggestionsDiv.innerHTML = "";
			searchInput.classList.remove("active");
			document.querySelector(".search-input").value = "";
			getWeather(prediction);
		});
		suggestionList.appendChild(listItem);
	});
	suggestionsDiv.appendChild(suggestionList);
}

async function updateSuggestions(searchText) {
	try {
		// Show the autocomplete predictions based on the user's input
		const predictions = await fetchCities(searchText);
		await displaySuggestions(predictions);
	} catch (error) {
		console.error("Error fetching cities:", error);
	}
}

async function searchAutocomplete() {
	const searchInput = document.querySelector(".search-input");
	const searchBox = document.querySelector(".search-box");
	const suggestionsDiv = document.querySelector(".suggestions");
	const searchText = searchInput.value.trim();
	if (searchText.length > 0) {
		try {
			// Show the autocomplete predictions based on the user's input
			const predictions = await fetchCities(searchText);
			await displaySuggestions(predictions);
		} catch (error) {
			console.error("Error fetching cities:", error);
		}
	} else {
		// Clear the suggestions if the input is empty
		suggestionsDiv.innerHTML = "";
		searchBox.classList.remove("active");
	}
}

// ---------------------------------------------- Display UI ---------------------------------------- //

function clearSearch() {
	const searchBox = document.querySelector(".search-box");
	const suggestionsDiv = document.querySelector(".suggestions");
	const input = document.querySelector(".search-input");
	input.value = "";
	suggestionsDiv.innerHTML = "";
	searchBox.classList.remove("active");
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

	// Event Listeners if search button is clicked
	searchButton.addEventListener("click", () => {
		const query = document.querySelector(".search-input").value;
		clearSearch();
		getWeather(query);
	});

	// Event Listeners if enter key is pressed on search input
	searchInput.addEventListener("keyup", (e) => {
		if (e.key === "Enter") {
			const query = document.querySelector(".search-input").value;
			clearSearch();
			getWeather(query);
		}
	});

	searchInput.addEventListener("input", async () => {
		const searchText = searchInput.value.trim();
		if (searchText.length > 0) {
			try {
				// Show the autocomplete predictions based on the user's input
				const predictions = await fetchCities(searchText);
				await displaySuggestions(predictions);
			} catch (error) {
				console.error("Error fetching cities:", error);
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

	// Event Listener for toggle switch
	navBar.appendChild(toggleBox);
	checkBox.addEventListener("change", () => {
		changeUnits();
	});

	return navBar;
}

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

function makePageContainer() {
	const pageContainer = document.createElement("div");
	pageContainer.classList.add("page-container");
	pageContainer.appendChild(showLastUpdated());
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
	hourly.addEventListener("change", () => {
		if (document.querySelector("#hourly").checked) {
			displayForecast();
			document.querySelector(".forecast-slider").scrollLeft =
				previousScrollPosition;
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

function makeHourlyForecast() {
	const forecast = document.querySelector(".forecast");
	forecast.innerHTML = "";
	forecast.classList.remove("day-forecast");
	forecast.classList.add("hourly-forecast");

	const backBtn = document.createElement("button");
	backBtn.classList.add("back-btn");
	backBtn.textContent = "<";
	forecast.appendChild(backBtn);

	const forecastSlider = document.createElement("div");
	forecastSlider.classList.add("forecast-slider");
	forecast.appendChild(forecastSlider);

	const nextBtn = document.createElement("button");
	nextBtn.classList.add("next-btn");
	nextBtn.textContent = ">";
	forecast.appendChild(nextBtn);
}

function makeDayForecast() {
	const forecast = document.querySelector(".forecast");
	forecast.innerHTML = "";
	forecast.classList.remove("hourly-forecast");
	forecast.classList.add("day-forecast");
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
	currentWeather.appendChild(currentInfo);
	return currentWeather;
}

function displayHourDetails() {
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
		createIndivInfo(pressure, "Pressure", "1000 mb", "pressure"),
	);
	moreWeather.appendChild(createIndivInfo(air, "Air Quality", "Good", "air"));
	moreWeather.appendChild(createIndivInfo(uv, "UV Index", "0", "uv"));
	moreWeather.appendChild(
		createIndivInfo(raindrops, "Precipitation", "0 in", "precipitation"),
	);
	return moreWeather;
}

function showDetails() {
	const popupBody = document.querySelector(".popup-body");
	popupBody.innerHTML = "";
	const main = document.createElement("div");
	main.classList.add("main");
	main.appendChild(displayMainHour());
	main.appendChild(displayHourDetails());
	popupBody.appendChild(main);
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
	content.innerHTML = "";
	content.appendChild(displayNavBar());
	content.appendChild(makePageContainer());
	content.appendChild(displayFooter());
	makeMainContainer();
	bottomContainer();
	popUp();
}

function loading() {
	const content = document.querySelector("#content");
	content.innerHTML = "";

	content.appendChild(displayNavBar());

	const loadingBox = document.createElement("div");
	loadingBox.classList.add("loading-box");
	const loadingIcon = document.createElement("img");
	loadingIcon.classList.add("loading-icon");
	loadingIcon.src = load;
	loadingIcon.alt = "loading icon";
	loadingBox.appendChild(loadingIcon);
	content.appendChild(loadingBox);

	content.appendChild(displayFooter());
}

function errorPage() {
	const content = document.querySelector("#content");
	content.innerHTML = "";

	content.appendChild(displayNavBar());

	const errorBox = document.createElement("div");
	errorBox.classList.add("error-box");
	const errorIcon = document.createElement("img");
	errorIcon.classList.add("error-icon");
	errorIcon.src = sad;
	errorIcon.alt = "sad icon";

	const errorText = document.createElement("h2");
	errorText.classList.add("error-text");
	errorText.textContent =
		"Sorry, we couldn't find weather data for the entered location. Please check the spelling and try again with a valid city or address.";

	errorBox.appendChild(errorIcon);
	errorBox.appendChild(errorText);
	content.appendChild(errorBox);

	content.appendChild(displayFooter());
}

function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(success, error);
	} else {
		getWeather("auto:ip");
	}
}

function success(position) {
	getWeather(`${position.coords.latitude}, ${position.coords.longitude}`);
}

function error() {
	getWeather("auto:ip");
}

function displayForecast(scroll = 0) {
	const forecast = document.querySelector(".forecast");
	const choice = document.querySelector('input[name="forecast"]:checked').value;
	console.log(choice);
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

function showHourlyTab() {
	const unit = document.getElementById("unit-toggle").checked
		? "metric"
		: "imperial";
	createHourlyCard(weatherData, unit);
	buttons();
}

function showDayTab() {
	const unit = document.getElementById("unit-toggle").checked
		? "metric"
		: "imperial";
	createDayCard(weatherData, unit);
}

function changeUnits() {
	const unit = document.getElementById("unit-toggle").checked
		? "metric"
		: "imperial";

	if (document.querySelector("#hourly").checked) {
		previousScrollPosition =
			document.querySelector(".forecast-slider").scrollLeft;
	}

	displayWeatherData(weatherData, unit);
	displayForecast();

	if (document.querySelector("#hourly").checked) {
		document.querySelector(".forecast-slider").scrollLeft =
			previousScrollPosition;
	}
}

function popUp() {
	const popupContainer = document.createElement("div");
	popupContainer.setAttribute("id", "popup-container");
	const popup = document.createElement("div");
	popup.setAttribute("id", "popup");

	const popupHeader = document.createElement("div");
	popupHeader.classList.add("popup-header");
	const popupTitle = document.createElement("h2");
	// formTitle.textContent = "Details";
	popupHeader.appendChild(popupTitle);

	const closeBtn = document.createElement("button");
	closeBtn.classList.add("close-btn");
	closeBtn.id = "closeDetailsBtn";
	closeBtn.textContent = "X";
	popupHeader.appendChild(closeBtn);
	popup.appendChild(popupHeader);

	closeBtn.addEventListener("click", () => {
		document.querySelector("#popup-container").style.display = "none";
	});

	const popupBody = document.createElement("div");
	popupBody.classList.add("popup-body");
	popup.appendChild(popupBody);

	popupContainer.appendChild(popup);
	document.querySelector("#content").appendChild(popupContainer);
}

getLocation();

export default pageLoad;
export {
	getWeather,
	displayForecast,
	changeUnits,
	fetchCities,
	displaySuggestions,
	clearSearch,
	searchAutocomplete,
};
