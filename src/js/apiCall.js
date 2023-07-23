async function getWeather(city) {
	// try {
	// 	const response = await fetch(
	// 		`http://api.weatherapi.com/v1/forecast.json?days=3&q=${city}&key=fca53d6c99b24b59ab3201455232107`,
	// 		{ mode: "cors" },
	// 	);
	// 	const data = await response.json();
	// 	return data;
	// } catch (error) {
	// 	return error;
	// }
}

export default getWeather;
export { getWeather };
