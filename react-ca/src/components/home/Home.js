import React from "react";
import Heading from "../layout/Heading";
import GamesList from "../games/GamesList";

export function Home() {
	return (
		<>
			<Heading title="Popular games" />
			<GamesList />
		</>
);
}

export default Home;
