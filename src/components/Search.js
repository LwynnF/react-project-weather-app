import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Search({ onCityChange }) {
	const [weatherData, setWeatherData] = useState({ ready: false });
	const [city, setCity] = useState("Edinburgh");

	function handleResponse(response) {
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
	}

	function handleSubmit(event) {
		event.preventDefault();
		onCityChange(city);
		const apiKey = "4c9b53e4f8f5eb00df5915bdca340605";
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);
	}

	useEffect(() => {
		handleSubmit({ preventDefault: () => {} });
	}, []); // Call API on initial render

	if (weatherData.ready) {
		return (
			<div className="Weather">
				<form onSubmit={handleSubmit}>
					<div className="row">
						<div className="col-8">
							<input
								type="search"
								placeholder="Enter a city..."
								className="form-control"
								autoFocus="on"
								onChange={(event) => setCity(event.target.value)}
							/>
						</div>

						<div className="col-3">
							<input
								type="submit"
								value="Search"
								className="btn btn-primary w-100"
							/>
						</div>
					</div>
				</form>
				<WeatherInfo weatherData={weatherData} />
				<WeatherForecast coordinates={weatherData.coordinates} />
			</div>
		);
	}
}
