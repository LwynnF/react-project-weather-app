import React, { useState } from "react";
import BackgroundImage from "../src/components/BackgroundImage";
import Overlay from "../src/components/Overlay"
import Search from "../src/components/Search";
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
			{/* Render the Overlay component */}
			{backgroundImage && <Overlay />}

			<BackgroundImage
				className="backgroundImage"
				city={city}
				setBackgroundImage={setBackgroundImage}
			/>
			<Search
				style={{ zIndex: 1 }}
				onCityChange={handleCityChange}
			/>
			<Footer style={{ zIndex: 1 }} />
		</div>
	);
}
