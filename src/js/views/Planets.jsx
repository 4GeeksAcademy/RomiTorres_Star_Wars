import React, {useState, useContext} from "react";
import {Link} from "react-router-dom";
import { Spinner } from "../component/Spinner.jsx";
import { Context } from "../store/appContext.js";
import imgDefault from "../../img/robots.jpg" 

export const Planets = () => {
    const [planets, setplanets] = useState(JSON.parse(localStorage.getItem('planetsLocal')));
    const { store, actions } = useContext(Context);
    console.log(planets)

    const handleOnErrorImg = (e) => {e.target.src = imgDefault}


    return (
        <div className="container bg-dark mb-3">
        <h1 className="text-light text-center pt-4">PLANETAS
        </h1>
                {
                    !planets ?
                        <Spinner /> :
                        <div className="d-flex flex-wrap justify-content-between"> {
                            planets.map((item, id) =>
                                <div className="card m-3 rounded" style={{width: "23rem"}} key={id}>
                                    {/* <h2>{item.uid}</h2> */}
                                       
                                        <img  alt="" src={"https://starwars-visualguide.com/assets/img/planets/" + (id + 1) + ".jpg"} onError={handleOnErrorImg}/>
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            <div className="d-flex justify-content-between">
                                                <Link to={`/planets/${id + 1}`}>
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