import React from "react";
import starWars from "../../img/star-wars-back0.jpg";

import "../../styles/home.css";

export const Home = () => (
	<div className="text-center mt-5 bg-dark">
		<div id="app" className="h-100">
			<div>
				
				<div className="container-fluid text-center my-5 bg-dark">
					<div className="cover-container d-flex w-75 p-4 mx-auto flex-column">
						<img className="d-block w-100" src={starWars} alt="Star Wars timeline" />
					</div>
				</div>
				</div>
				</div>
	</div>
);
