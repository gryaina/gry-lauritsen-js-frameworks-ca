import React from "react";
import Heading from "../layout/Heading";
import GamesList from "../games/GamesList";

export function Home() {
	return (
		<>
			<Heading title="Games to play" />
			<GamesList />
		</>
);
}

export default Home;
