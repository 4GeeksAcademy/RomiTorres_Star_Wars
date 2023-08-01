import React from "react";
import { Link } from "react-router-dom";
import logoStar from "../../img/star-wars-logo.png"
import {BtnFavorite} from "./Btnfavorite.jsx"; 

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-3 ">
			<div className="container-fluid d-flex justify-content-between mx-md-4 mt-4 mb-1">
				<div><a className="navbar-brand" href="/">
					<img height="55" src={logoStar} />
				</a>
				</div>
				<div>
					<ul className="nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link link-secondary" to="/people">
								<span className="navbar-brand mb-0 h1">Personajes</span>
							</Link>
						</li>
						<li className="nav-item">
						<Link className="nav-link link-secondary" to="/planets">
								<span className="navbar-brand mb-0 h1">Planetas</span>
							</Link>
						</li>
						<li className="nav-item">
						<Link className="nav-link link-secondary" to="/starships">
								<span className="navbar-brand mb-0 h1">Naves</span>
							</Link>
						</li>
						<BtnFavorite/>
						{/* <li className="nav-item">
							<a className="nav-link link-secondary" href="/starships">Starships</a>
						</li> */}
						<li className="nav-item">
							
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
