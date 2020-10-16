import React from 'react';
import Heading from "./components/layout/Heading";
import Layout from "./components/layout/Layout";
import './App.css';

function App() {
	return (
		<Layout>
			<Heading title="Title from prop" />
		</Layout>
	);
}

export default App;
