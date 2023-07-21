import React, { useState } from "react";
import BackgroundImage from "../src/components/BackgroundImage";
import Search from "../src/components/Search";
import WeatherInfo from "../src/components/WeatherInfo";
import WeatherForecast from "../src/components/WeatherForecast";
import Footer from "../src/components/Footer";

import "./App.css";

export default function App() {
	const [city, setCity] = useState("Edinburgh");
	const [backgroundImage, setBackgroundImage] = useState(null);

	function handleCityChange(newCity) {
		setCity(newCity);
	}

	return (
		<div
			className="App"
			style={{
				backgroundImage: `url(${backgroundImage})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				height: "100vh",
			}}
		>
			<BackgroundImage
				className="backgroundImage"
				city={city}
				setBackgroundImage={setBackgroundImage}
			/>
			<Search onCityChange={handleCityChange} />
			<WeatherInfo />
			<WeatherForecast />
			<Footer />
		</div>
	);
}
