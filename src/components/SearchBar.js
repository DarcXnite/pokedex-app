import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const SearchBar = ({ searchPokemon, allPokemon }) => {
	const [userInput, setUserInput] = useState("");
	const [pokeCheck, setPokeCheck] = useState(true);

	let history = useHistory();


	const getPokemonIndex = async () => {
		const lowerCaseInput = userInput.toLowerCase();
		const res = await allPokemon.find(
			(pokemon) => pokemon.name === lowerCaseInput
		);
		if (res) {
			setPokeCheck(true);
			const index = res.url.split("/")[res.url.split("/").length - 2];
			history.push(`/${lowerCaseInput}/${index}`);
		} else {
			setPokeCheck(false);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		getPokemonIndex();
		searchPokemon(userInput)
		setUserInput("");
	};

	const handleChange = (e) => {
		const { value } = e.target;
		setUserInput(value);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="form-inline justify-content-center mt-4"
		>
			<input
				onChange={handleChange}
				value={userInput}
				className="form-control mr-sm-2"
				type="search"
				placeholder={pokeCheck ? "Search Pokedex" : "Pokemon doesn't exist"}
				aria-label="Search"
			/>
			<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
				Search
			</button>
		</form>
	);
};

export default SearchBar;
