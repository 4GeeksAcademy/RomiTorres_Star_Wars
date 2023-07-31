import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Spinner } from "../component/Spinner.jsx";
import { Context } from "../store/appContext.js";
import {imgDefault} from "../../img/star-wars-logo.png";

export const People = () => {
    const [persons, setPerson] = useState(JSON.parse(localStorage.getItem('peopleLocal')));
    const { store, actions } = useContext(Context);
    const hostData = 'https://www.swapi.tech/api/';
    
    // const hostImg = 'https://starwars-visualguide.com/#/' + id + ".jpg";
    const handleOnErrorImg = (e) => {e.target.src = imgDefault}


    return (
        <div className="container bg-dark mb-3">
            <h1 className="text-light text-center pt-4">HOLA
            </h1>
            <div className="row row-cols-1 row-cols-md-3 row-cols-xl-5 g-2">
                <div className="col">
                    {
                        !persons ?
                            <Spinner /> :
                            <div> {
                                persons.map((item, id) =>
                                    <div key={id}>
                                        <h2>{item.uid}</h2>
                                        <div className="card border-dark my-3 mx-2 text-bg-dark">
                                           
                                            <img alt="" src="https://starwars-visualguide.com/assets/img/characters/{id + 1}.jpg" onError={handleOnErrorImg}/>
                                            <div className="card-body">
                                                <h5 className="card-title">{item.name}</h5>
                                                <div className="d-flex justify-content-between">
                                                    <Link to={`/people/${item.id}`}>
                                                        <span className="navbar-brand mb-0 h1"><i className="me-4 far fa-heart fa-lg"></i>Detalles</span>
                                                    </Link>
                                                    <div className="card-footer text-end">
                                                        <button className="btn btn-danger" onClick={() => { actions.addFavorites(item.name) }}>
                                                            <i className="fas fa-heart"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                    }
                </div>
            </div>
        </div>

    )
}
