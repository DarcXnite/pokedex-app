import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./SearchBar.css";

const SearchBar = ({ allPokemon, pokemonNamesList }) => {
	const [userInput, setUserInput] = useState("");
	const [pokeCheck, setPokeCheck] = useState(true);
	const [suggestions, setSuggestions] = useState([]);
	const [cursor, setCursor] = useState(-1);
	const wrapperRef = useRef(null);
	const inputRef = useRef();

	let history = useHistory();

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const handleClickOutside = (e) => {
		const { current: wrap } = wrapperRef;
		if (wrap && !wrap.contains(e.target)) {
			setSuggestions([]);
		}
	};

	const getPokemonIndex = async () => {
		const lowerCaseInput = userInput.toLowerCase();
		const res = await allPokemon.find(
			(pokemon) => pokemon.name === lowerCaseInput
		);
		if (res) {
			setPokeCheck(true);
			const index = res.url.split("/")[res.url.split("/").length - 2];
			history.push(`/pokemon/${index}`);
		} else {
			setPokeCheck(false);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		getPokemonIndex();
		setUserInput("");
		setSuggestions([]);
	};

	const handleChange = (e) => {
		const { value } = e.target;
		setUserInput(value);
		let newSuggestions = [];
		if (value.length > 0) {
			const regex = new RegExp(`^${value}`, "i");
			newSuggestions = pokemonNamesList.sort().filter((v) => regex.test(v));
		}
		setSuggestions(newSuggestions);
	};

	const suggestionClicked = (value) => {
		setUserInput(value);
		setSuggestions([]);
		inputRef.current.focus();
	};

	const onKeyDown = (e) => {
		if (e.key === "ArrowDown") {
			if(suggestions) {
				setCursor((prevState) => (prevState < suggestions.length - 1 ? prevState + 1 : prevState));
				setUserInput(suggestions[cursor + 1])
			}
		}
		if (e.key === "ArrowUp") {
			setCursor((prevState) => (prevState > 0 ? prevState - 1 : 0));
			setUserInput(suggestions[cursor - 1])
		}
		// if (e.key === "Enter" && cursor > 0) {
		// 	setUserInput( suggestions[cursor] );
		// 	setSuggestions([]);
		// }
		if (e.key === "Escape") {
			setSuggestions([]);
		}
		console.log(cursor);
		console.log(e.key);
		
	};

	const renderSuggestions = () => {
		if (suggestions.length === 0) {
			return null;
		}
		return (
			<ul onKeyDown={(e) => onKeyDown(e)}>
				{suggestions.map((poke, index) => (
					<li
						className={cursor === index ? "highlight" : null}
						key={poke}
						tabIndex="0"
						onClick={() => suggestionClicked(poke)}
					>
						{poke}
					</li>
				))}
			</ul>
		);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="form-inline justify-content-center mt-4"
			ref={wrapperRef}
		>
			<div className="autocomplete">
				<input
					onChange={handleChange}
					value={userInput}
					className="form-control mr-sm-2"
					type="search"
					placeholder={pokeCheck ? "Search Pokedex" : "Pokemon doesn't exist"}
					aria-label="Search"
					ref={inputRef}
					onKeyDown={(e) => onKeyDown(e)}
				/>
				<div>{renderSuggestions()}</div>
			</div>

			<button
				className="btn btn-outline-success my-2 my-sm-0 searchBtn"
				type="submit"
			>
				Search
			</button>
		</form>
	);
};

export default SearchBar;
