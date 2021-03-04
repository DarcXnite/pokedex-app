import React, { useState, useEffect } from "react";
import "./Pokemon.css";
import loading from "../../assets/flying_pikachu.gif";
import { Link } from "react-router-dom";

const Pokemon = ({ name, url, isLoading }) => {
	const [pokeIndex, setPokeIndex] = useState("");
	const [pokeImg, setPokeImg] = useState("");

	useEffect(() => {
		const pokemonIndex = url.split("/")[url.split("/").length - 2];
		const imgUrl = `https://pokeres.bastionbot.org/images/pokemon/${pokemonIndex}.png`;

		setPokeImg(imgUrl);
		setPokeIndex(pokemonIndex);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="col col-lg-2 text-center mb-5">
			<Link className="pokemon-text-dec" to={`${name}/${pokeIndex}`}>
				<h6 className="text-left ml-3 pokemon-font"># {pokeIndex}</h6>
				{isLoading ? (
					<img className="pokemon-img mb-4" src={loading} alt={name} />
				) : (
					<img className="pokemon-img mb-4" src={pokeImg} alt={name} />
				)}
				<h1 className="pokemon pokemon-font">
					{name
						.toLowerCase()
						.split(" ")
						.map((s) => s.charAt(0).toUpperCase() + s.substring(1))
						.join(" ")}
				</h1>
			</Link>
		</div>
	);
};

export default Pokemon;
