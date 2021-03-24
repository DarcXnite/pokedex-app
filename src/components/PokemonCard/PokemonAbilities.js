import axios from "axios";
import React, { useEffect, useState } from "react";

const PokemonAbilities = ({ name, url }) => {
	const [abilityDescription, setAbilityDescription] = useState("");

	useEffect(() => {
		const getDescription = async () => {
			const res = await axios.get(url);
			let description = "";
			res.data.flavor_text_entries.some((text) => {
				if (text.language.name === "en") {
					description = text.flavor_text;
				}
				return description;
			});
			setAbilityDescription(description);
		};
		getDescription();
	});

	const abilityName = name
		.toLowerCase()
		.split("-")
		.map((s) => s.charAt(0).toUpperCase() + s.substring(1))
		.join(" ");

	return (
		<div className="text-center">
			<h5>{abilityName}</h5>
			<p>{abilityDescription}</p>
		</div>
	);
};

export default PokemonAbilities;
