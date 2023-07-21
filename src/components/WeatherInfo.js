import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import DisplayLocalTime from "./DisplayLocalTime";

export default function WeatherInfo(props) {
	const { weatherData } = props;

	return (
		<div className="WeatherInfo">
			<h1>{weatherData.city}</h1>
			<ul>
				<li>
					<FormattedDate date={weatherData.date} />
					{weatherData && weatherData.date && weatherData.timezoneOffset && (
						<DisplayLocalTime weatherData={weatherData} />
					)}
				</li>
				<li className="text-capitalize">{weatherData.description}</li>
			</ul>
			<div className="row mt-3">
				<div className="col-6">
					<div className="clearfix d-flex">
						<div className="float-left">
							<WeatherIcon
								code={weatherData.icon}
								size={52}
							/>
						</div>
						<div className="float-left">
							<WeatherTemperature celsius={weatherData.temperature} />
						</div>
					</div>
				</div>
				<div className="col-6">
					<ul>
						<li>Humidity: {weatherData.humidity}%</li>
						<li>Wind: {Math.round(weatherData.wind)} mph</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
