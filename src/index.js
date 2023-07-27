import "./css/all.css";
import "./css/normalize.css";
import pageLoad, {
	getWeather,
	changeUnits,
	fetchCities,
	displaySuggestions,
	clearSearch,
	displayForecast,
} from "./js/UI";

let previousScrollPosition = 0;

// // Event Listeners if search button is clicked
// document.querySelector(".search-button").addEventListener("click", () => {
// 	const query = document.querySelector(".search-input").value;
// 	clearSearch();
// 	getWeather(query);
// });

// // Event Listeners if enter key is pressed on search input
// document.querySelector(".search-input").addEventListener("keyup", (e) => {
// 	if (e.keyCode === 13) {
// 		const query = document.querySelector(".search-input").value;
// 		clearSearch();
// 		getWeather(query);
// 	}
// });

// document.querySelector("#hourly").addEventListener("change", () => {
// 	if (document.querySelector("#hourly").checked) {
// 		displayForecast();
// 		document.querySelector(".forecast-slider").scrollLeft =
// 			previousScrollPosition;
// 	}
// });

// document.getElementById("unit-toggle").addEventListener("change", () => {
// 	changeUnits();
// });

// document.querySelector("#day").addEventListener("change", () => {
// 	if (document.querySelector("#day").checked) {
// 		previousScrollPosition =
// 			document.querySelector(".forecast-slider").scrollLeft;
// 		displayForecast();
// 	}
// });

// const searchInput = document.querySelector(".search-input");
// searchInput.addEventListener("input", async () => {
// 	const searchBox = document.querySelector(".search-box");
// 	const suggestionsDiv = document.querySelector(".suggestions");
// 	const searchText = searchInput.value.trim();
// 	if (searchText.length > 0) {
// 		try {
// 			// Show the autocomplete predictions based on the user's input
// 			const predictions = await fetchCities(searchText);
// 			await displaySuggestions(predictions);
// 		} catch (error) {
// 			console.error("Error fetching cities:", error);
// 		}
// 	} else {
// 		// Clear the suggestions if the input is empty
// 		suggestionsDiv.innerHTML = "";
// 		searchBox.classList.remove("active");
// 	}
// });
