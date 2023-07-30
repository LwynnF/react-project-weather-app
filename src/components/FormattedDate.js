import React, { useState, useEffect } from "react";

export default function FormattedDate(props) {
	const { date } = props;
	const [formattedDate, setFormattedDate] = useState("");

	useEffect(() => {
		if (date) {
			let days = [
				"Sunday",
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday",
				"Saturday",
			];

			let months = [
				"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
				"August",
				"September",
				"October",
				"November",
				"December",
			];

			// From the array of days, get a day which matches the integer of the current day
			let day = days[date.getDay()];
			let formattedDay = date.getDate();
			let month = months[date.getMonth()];
		

			let formattedDate = `${day} ${formattedDay} ${month}`;
			setFormattedDate(formattedDate);
		}
	}, [date]);

	return <>{formattedDate}</>;
}
