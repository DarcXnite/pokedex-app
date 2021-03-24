import React from "react";
import Pokemon from "../Pokemon/Pokemon";

const PokemonList = ({ pokemons, isLoading }) => {
	const pokemonList = pokemons.map((pokemon) => (
		<Pokemon
			key={pokemon.name}
			name={pokemon.name}
			url={pokemon.url}
			isLoading={isLoading}
		/>
	));

	return (
		<div className="container">
			<div className="row mt-5">{pokemonList}</div>
		</div>
	);
};

export default PokemonList;
