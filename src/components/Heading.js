import React from "react";
import { Link } from "react-router-dom";

const Heading = () => {
	return (
		<header className="navbar navbar-light bg-light App-header">
			<Link to="/pokedex-app">
				<h1 href="/pokedex-app" className="pokemon-font navbar-brand mb-0 h1">
					Pokedex
				</h1>
			</Link>
		</header>
	);
};

export default Heading;
