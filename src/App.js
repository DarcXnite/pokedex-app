import React, { useEffect, useState } from "react";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Heading from "./components/Heading";
import PokemonList from "./components/PokemonList/PokemonList";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import Pagination from "./components/Pagination";
import PokemonCard from "./components/PokemonCard/PokemonCard";

function App() {
	const [pokemons, setPokemons] = useState([]);
	const [allPokemon, setAllPokemon] = useState([]);
	const [currentUrl, setCurrentUrl] = useState(
		"https://pokeapi.co/api/v2/pokemon?limit=24&offset=0"
	);
	const [nextUrl, setNextUrl] = useState("");
	const [prevUrl, setPrevUrl] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		const getData = async () => {
			await axios.get(currentUrl).then((res) => {
				setPokemons(res.data.results);
				setNextUrl(res.data.next);
				setPrevUrl(res.data.previous);
				setIsLoading(false);
			});
		};

		getData();
	}, [currentUrl]);

	useEffect(() => {
		const getAllPokemon = async () => {
			const res = await axios.get(
				"https://pokeapi.co/api/v2/pokemon?limit=1118&offset=0"
			);
			const allPokemonNames = res.data.results.map((pokemon) => pokemon);
			setAllPokemon(allPokemonNames);
		};

		getAllPokemon();
	}, []);

	const gotoPrevUrl = () => {
		setCurrentUrl(prevUrl);
	};

	const gotoNextUrl = () => {
		setCurrentUrl(nextUrl);
	};

	return (
		<div>
			<Router basename="/">
				<Link to="/">
					<Heading />
				</Link>
				
				<SearchBar allPokemon={allPokemon} />

				<Switch>
					<Route exact path={process.env.PUBLIC_URL + '/'}>
						<Pagination
							prevUrl={prevUrl}
							nextUrl={nextUrl}
							gotoPrevUrl={gotoPrevUrl}
							gotoNextUrl={gotoNextUrl}
						/>
						<PokemonList pokemons={pokemons} isLoading={isLoading} />
						<Pagination
							prevUrl={prevUrl}
							nextUrl={nextUrl}
							gotoPrevUrl={gotoPrevUrl}
							gotoNextUrl={gotoNextUrl}
						/>
					</Route>
					<Route exact path="/:name/:pokeIndex">
						<PokemonCard />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
