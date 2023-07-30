import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Search.css";

export default function Search({ onCityChange }) {
	const [weatherData, setWeatherData] = useState({ ready: false });
	const [city, setCity] = useState("Edinburgh");

	const handleResponse = useCallback((response) => {
		setWeatherData({
			ready: true,
			coordinates: response.data.coord,
			city: response.data.name,
			temperature: response.data.main.temp,
			description: response.data.weather[0].description,
			humidity: response.data.main.humidity,
			wind: response.data.wind.speed,
			date: new Date(response.data.dt * 1000),
			icon: response.data.weather[0].icon,
			timezoneOffset: response.data.timezone,
		});
	}, []);

	const handleSubmit = useCallback(
		(event) => {
			event.preventDefault();
			onCityChange(city);
			const apiKey = "4c9b53e4f8f5eb00df5915bdca340605";
			let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
			axios.get(apiUrl).then(handleResponse);
		},
		[city, handleResponse, onCityChange]
	);

	useEffect(() => {
		handleSubmit({ preventDefault: () => {} });
	}, [handleSubmit]); // Call API on initial render

	if (weatherData.ready) {
		return (
			<div className="Search">
				<form onSubmit={handleSubmit}>
					<div className="row">
						<div className="col-8">
							<input
								type="search"
								className="form-control"
								autoFocus="off"
								placeholder="Enter a city"
								onChange={(event) => setCity(event.target.value)}
							/>
						</div>

						<div className="col-4">
							<input
								type="submit"
								value="Search"
								className="btn btn-light w-100"
							/>
						</div>
					</div>
				</form>
				<WeatherInfo data={weatherData} />
				<WeatherForecast coordinates={weatherData.coordinates} />
			</div>
		);
	}
}
