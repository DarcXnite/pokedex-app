import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import "./PokemonCard.css";
import loading from "../../assets/flying_pikachu.gif";
import axios from "axios";
import PokemonAbilities from "./PokemonAbilities";

const PokemonCard = () => {
	const [pokemon, setPokemon] = useState({
		name: "",
		id: "",
		height: "",
		weight: "",
	});
	const [pokeDescription, setPokeDescription] = useState("");
	const [abilities, setAbilities] = useState([]);
	const [types, setTypes] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const { pokeIndex, name } = useParams();
	const pokeUrl = `https://pokeapi.co/api/v2/pokemon/${pokeIndex}/`;
	const pokeImg = `https://pokeres.bastionbot.org/images/pokemon/${pokeIndex}.png`;

	let location = useLocation()

	useEffect(() => {
		setIsLoading(true);
		const getPokemonData = async () => {
			const res = await axios.get(pokeUrl);
			const pokeAbilities = await res.data.abilities.map(
				(ability) => ability.ability
			);
			const types = await res.data.types.map((type) => type.type.name);
			await axios.get(res.data.species.url).then((res) => {
				let description = "";
				res.data.flavor_text_entries.some((text) => {
					if (text.language.name === "en") {
						description = text.flavor_text;
					}
					return description;
				});
				setPokeDescription(description);
			});

			setTypes(types);
			setAbilities(pokeAbilities);
			setPokemon((prevState) => {
				return {
					...prevState,
					name: res.data.name,
					id: res.data.id,
					height: res.data.height,
					weight: res.data.weight,
				};
			});
			setIsLoading(false);
		};
		getPokemonData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location]);

	const TYPE_COLORS = {
		normal: "#A0A29F",
		poison: "#BD62D2",
		psychic: "#FD998E",
		grass: "#5BC173",
		ground: "#DB7A4A",
		ice: "#88DAD0",
		fire: "#FBAB48",
		rock: "#D5CA8F",
		dragon: "#027DC7",
		water: "#67B7E3",
		bug: "#ABC635",
		dark: "#6C7182",
		fighting: "#E3434C",
		ghost: "#7272CF",
		steel: "#52899E",
		flying: "#94ACDE",
		electric: "#F8E06A",
		fairy: "#F2A4E7",
	};

	const pokeAbilities = abilities.map((ability) => (
		<PokemonAbilities
			key={ability.name}
			name={ability.name}
			url={ability.url}
		/>
	));

	const pokeTypes = types.map((type) => (
		<span
			key={type}
			style={{ backgroundColor: `${TYPE_COLORS[type]}`, color: "black" }}
			className="badge badge-primary badge-pill mr-1"
		>
			{type
				.toLowerCase()
				.split(" ")
				.map((s) => s.charAt(0).toUpperCase() + s.substring(1))
				.join(" ")}
		</span>
	));

	const height = Math.round((pokemon.height * 0.328084 + 0.0001) * 100) / 100;
	const weight = Math.round((pokemon.weight * 0.220462 + 0.0001) * 100) / 100;

	return (
		<div className="justify-content-center text-center mt-5 pokemon-card container">
			{isLoading ? (
				<img className="pokemon-img mb-4" src={loading} alt={pokemon.name} />
			) : (
				<div>
					<h1 className="pokemon-font">
						{name
							.toLowerCase()
							.split(" ")
							.map((s) => s.charAt(0).toUpperCase() + s.substring(1))
							.join(" ")}
					</h1>
					<p className="float-right">{pokeTypes}</p>
					<img className="pokemon-img mt-5" src={pokeImg} alt={pokemon.name} />
					<div className="container">
						<div className="d-flex justify-content-around font-weight-bold mt-5">
							<span>ID: {pokemon.id}</span>
							<span>HEIGHT: {height}ft</span>
							<span>WEIGHT: {weight}lbs</span>
						</div>
					</div>
					<p className="mt-5">{pokeDescription}</p>
					<div className="container mt-5 text-left pokemond-abilities">
						<h3 className="mb-3">
							<span>&#8226;</span> Abilities
						</h3>
						<div>{pokeAbilities}</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default PokemonCard;
