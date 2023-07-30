import React from "react";
import moment from "moment-timezone";

export default function DisplayLocalTime({ weatherData }) {
	const { date, timezoneOffset } = weatherData; // Access props from weather.js

	// Convert unix timestamp to JS timestamp then to UTC time
	const localTime = moment
		.unix(date.getTime() / 1000 + timezoneOffset)
		.utc()
		.format("HH:mm");

	return <li className="date-time-container">Local Time: {localTime}</li>;
}
