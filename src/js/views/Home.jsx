import React from "react";
import starWars from "../../img/star-wars-back0.jpg";

import "../../styles/home.css";

export const Home = () => (
	<div className="text-center mt-5">
		<div id="app" className="h-100">
			<div>
				
				<div className="container-fluid text-center my-5 bg-dark">
					<div className="cover-container d-flex w-75 p-4 mx-auto flex-column">
						<img className="d-block w-100" src={starWars} alt="Star Wars timeline" />
					</div>
				</div>
				<footer className="footer mt-auto py-3 text-center bg-dark">
					<p className="text-secondary">Made with <i className="fa fa-heart text-danger"></i> by <a className="text-secondary" href="https://chocobar.net" target="_blank">Hector Chocobar-Torrejon</a> and <a className="text-secondary" href="https://4geeksacademy.com" target="_blank">4Geeks Academy</a></p></footer></div></div>
	</div>
);
