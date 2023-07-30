import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

export default function Footer() {
	return (
		<div className="coded-by">
			<a
				href="https://github.com/LwynnF/react-project-weather-app"
				target="_blank"
				rel="noreferrer"
			>
				Open-sourced on Github
			</a>
			, coded by{" "}
			<a
				href="https://www.linkedin.com/in/louise-fong"
				target="_blank"
				rel="noreferrer"
			>
				Louise
			</a>
			<div className="social-links d-flex justify-content-center mt-3">
				<a
					href="https://www.github.com/LwynnF"
					title="Github Profile"
					target="_blank"
					rel="noreferrer"
				>
					<FontAwesomeIcon icon={faGithub} />
				</a>
				<a
					href="https://www.linkedin.com/in/louise-fong"
					title="LinkedIn Profile"
					target="_blank"
					rel="noreferrer"
				>
					<FontAwesomeIcon icon={faLinkedin} />
				</a>
				<a
					href="https://www.instagram.com/wynn.codes"
					title="Instagram Profile"
					target="_blank"
					rel="noreferrer"
				>
					<FontAwesomeIcon icon={faInstagram} />
				</a>
			</div>
		</div>
	);
}
