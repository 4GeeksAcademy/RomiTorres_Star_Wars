import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/Home.jsx";
import { Demo } from "./views/Demo.jsx";
import { Single } from "./views/Single.jsx";
import { People } from "./views/People.jsx";
import injectContext from "./store/appContext";

import { Navbar } from "./component/Navbar.jsx";
import { Footer } from "./component/Footer.jsx";
import { DetailsPeople } from "./views/DetailsPeople.jsx";
import { Planets } from "./views/Planets.jsx";
import { DetailsPlanets } from "./views/DetailsPlanets.jsx";
import { Naves } from "./views/Naves.jsx"
import {DetailsNaves} from "./views/DetailsNaves.jsx"
import { Species } from "./views/Species.jsx";
import { DetailsSpecies } from "./views/DetailsSpecies.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="bg-dark">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="/people" element={<People />} />
						<Route path="/people/:id" element={<DetailsPeople/>} />
						<Route path="/planets" element={<Planets/>} />
						<Route path="/planets/:id" element={<DetailsPlanets/>} />
						<Route path="/starships" element={<Naves/>} />
						<Route path="/starships/:id" element={<DetailsNaves/>} />
						<Route path="/species" element={<Species/>} />
						<Route path="/species/:id" element={<DetailsSpecies/>} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
