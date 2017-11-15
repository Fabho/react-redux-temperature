import axios from 'axios';

const API_KEY = 'be1ecc07b836338295cd9eaaa4858f39';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appId=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},bo`;
	const request = axios.get(url);
	

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}