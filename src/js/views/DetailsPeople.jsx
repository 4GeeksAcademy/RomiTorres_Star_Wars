import React from "react";
import { Link, useParams } from "react-router-dom";

export const DetailsPeople = () => {
    const params = useParams();
    const id = params.id - 1;
    const viewDetails = JSON.parse(localStorage.getItem('peopleLocal')); // aca leo la nueva variable ue tiene los 10 detalles de los 10 primeros
    // filtrar por el que sea = .uid = id
    console.log(viewDetails);

    return (

        <div className="card" style={{width: "18rem"}}>
            <img src="..." className="card-img-top" alt="..."/>
            <h1 key={params.id}>{id + 1}</h1>
                <div className="card-body">
                     {/* <h3>{viewDetails[id].results.name}</h3> */}
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
        </div>
    )
}