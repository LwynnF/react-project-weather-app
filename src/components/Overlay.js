import React from "react";

export default function Overlay() {
	return (
		<div
			className="overlay"
			style={{
				position: "absolute",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				backgroundColor: "rgba(0, 0, 0, 0.5)", 
				zIndex: -1,
			}}
		/>
	);
};


