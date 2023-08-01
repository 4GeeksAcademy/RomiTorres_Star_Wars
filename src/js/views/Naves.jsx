import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Spinner } from "../component/Spinner.jsx";
import { Context } from "../store/appContext.js";
import imgDefault from "../../img/star-wars-logo.png";

export const Naves = () => {
    const [naves, setNaves] = useState(JSON.parse(localStorage.getItem('navesLocal')));
    const { store, actions } = useContext(Context);

    const handleOnErrorImg = (e) => {e.target.src = imgDefault}


    return (
        <div className="container bg-dark mb-3">
            <h1 className="text-light text-center pt-4">NAVES
            </h1>
                    {
                        !naves ?
                            <Spinner /> :
                            <div className="d-flex flex-wrap justify-content-between"> {
                                naves.map((item, id) =>
                                    <div className="card m-3 rounded" style={{width: "23rem"}} key={id}>
                                        {/* <h2>{item.uid}</h2> */}
                                           
                                            <img  alt="" src={"https://starwars-visualguide.com/assets/img/starships/" + (item.uid) + ".jpg"} onError={handleOnErrorImg}/>
                                            <div className="card-body">
                                                <h5 className="card-title">{item.name}</h5>
                                                <div className="d-flex justify-content-between">
                                                    <Link to={`/starships/${id + 1}`}>
                                                        <span className="navbar-brand mb-0 h1 btn btn-outline-secondary me-2">Detalles</span>
                                                    </Link>
                                                    <div className="text-end">
                                                        <button className="btn btn-danger" onClick={() => { actions.addFavorites(item.name) }}>
                                                            <i className="fas fa-heart"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                )}
                            </div>
                    }
                
            </div>

    )
}
