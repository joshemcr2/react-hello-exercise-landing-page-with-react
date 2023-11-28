import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";

//include images into your bundle


//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<Header />
			<Card />
			<Footer />
		</>

	);
};

export default Home;
