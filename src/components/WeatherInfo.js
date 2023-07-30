import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import DisplayLocalTime from "./DisplayLocalTime";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
	const { data } = props;

	return (
		<div className="WeatherInfo">
			<h1>{data.city}</h1>
			<ul style={{ display: "flex", justifyContent: "space-between" }}>
				<li className="date-time-container">
					<FormattedDate date={data.date} />
				</li>
				{data && data.date && data.timezoneOffset && (
					<li className="date-time-container">
						<DisplayLocalTime weatherData={data} />
					</li>
				)}
			</ul>
			<div className="row mt-3">
				<div className="icon-temp clearfix d-flex">
					<div className="float-left">
						<WeatherIcon
							code={data.icon}
							size={100}
						/>
					</div>
					<div>
						<WeatherTemperature celsius={data.temperature} />
					</div>
				</div>
				<div>
					<ul className="Stats">
						<li>Humidity: {data.humidity}%</li>
						<li>Wind: {Math.round(data.wind)}mph</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
