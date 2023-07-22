import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
	let [loaded, setLoaded] = useState(false);
	let [forecast, setForecast] = useState(null);

	useEffect(() => {
		setLoaded(false);
		// No need to call load() here; it will be called before the return statement.
	}, [props.coordinates]);

	function handleResponse(response) {
		setForecast(response.data.daily);
		setLoaded(true);
	}

	function load(props) {
		let apiKey = "4c9b53e4f8f5eb00df5915bdca340605";
		let units = "metric";
		if (!props || !props.coordinates) {
			console.log("props or props.coordinates is undefined");
			return;
		}

		let longitude = props.coordinates.lon;
		let latitude = props.coordinates.lat;

		if (longitude === undefined || latitude === undefined) {
			console.log(
				"props.coordinates.lon or props.coordinates.lat is undefined"
			);
			return;
		}

		let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

		axios.get(apiUrl).then(handleResponse);
	}

	// Call the load function directly before the return statement
	load(props);

	if (loaded) {
		return (
			<div className="WeatherForecast">
				<div className="row">
					{forecast.map(function (dailyForecast, index) {
						if (index < 5) {
							return (
								<div
									className="col"
									key={index}
								>
									<WeatherForecastDay data={dailyForecast} />
								</div>
							);
						} else {
							return null;
						}
					})}
				</div>
			</div>
		);
	} else {
		return null;
	}
}
