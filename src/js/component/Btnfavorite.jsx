import React, { useContext } from "react";

import { Context } from "../store/appContext.js";


export const BtnFavorite = () => {
    const { store, actions } = useContext(Context);
    let myFavorites = store.favorites;


    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Favorites
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">
                    {myFavorites.length}
                </span>
            </button>
            <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end">
                {myFavorites.length === 0 ? (
                    <li><span className="dropdown-item">No favorites selected</span></li>
                ) : (
                    myFavorites.map((item, id) => (
                        <li key={id} className="d-flex align-items-center">
                            <span className="dropdown-item">{item}</span>
                            <button type="button" className="btn btn-outline-danger me-2"
                                onClick={(e) =>{e.stopPropagation(); actions.removeFavorite(id)}}>
                                <i className="fa fa-trash"></i>
                            </button>
                        </li>
                    ))
                )}
            </ul>
        </div>
    )
}