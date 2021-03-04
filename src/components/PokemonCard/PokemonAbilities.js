import axios from "axios";
import React, { useEffect, useState } from "react";

const PokemonAbilities = ({ name, url }) => {
	const [abilityDescription, setAbilityDescription] = useState("");

	useEffect(() => {
		const getDescription = async () => {
			const res = await axios.get(url);
			setAbilityDescription(res.data.flavor_text_entries[0].flavor_text);
		};
		getDescription();
	});

	const abilityName = name
		.toLowerCase()
		.split("-")
		.map((s) => s.charAt(0).toUpperCase() + s.substring(1))
		.join(" ");

	return (
		<div>
			<h5>{abilityName}</h5>
			<p>{abilityDescription}</p>
		</div>
	);
};

export default PokemonAbilities;
