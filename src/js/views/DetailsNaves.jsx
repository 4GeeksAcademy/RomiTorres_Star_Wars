import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import imgDefault from "../../img/placeholder.jpg"
import { Spinner } from "../component/Spinner.jsx";


export const DetailsNaves = () => {

    const { id } = useParams();
    const [starships, setStarships] = useState(
        JSON.parse(localStorage.getItem("navesLocal"))
    );
    console.log(starships)
    const [detallesNaves, setDetallesNaves] = useState({});
    const host = "https://www.swapi.tech/api/starships/";
    const handleOnErrorImg = (e) => { e.target.src = imgDefault }

    const fetchNaves = async () => {
        const url = host + (starships[id - 1].uid );
        const request = {
            method: "GET",
        };

        const response = await fetch(url, request);

        if (response.ok) {
            const data = await response.json();
            setDetallesNaves(data);
        } else {
            console.log("Error", response.status, response.statusText);
        }
    };

    useEffect(() => {
        fetchNaves();
    }, [id]);





    return (
        <>
        {
           !detallesNaves.result ? (<Spinner/>) :
            (
                <div className="bg-dark d-flex justify-content-center">
                       <div className="card m-4 border-dark " style={{ width: "18rem" }}>
                       <img  alt="" src={"https://starwars-visualguide.com/assets/img/starships/" + (starships[id - 1].uid ) + ".jpg"} onError={handleOnErrorImg}/>
                    <h1>{detallesNaves.name}</h1>
                    <div className="card-body ">
                        {/* <h3>{viewDetails.name}</h3> */}
                        <p className="card-text"><strong>Costo:</strong> {detallesNaves.result.properties.cost_in_credits}</p>
                        <p className="card-text"><strong>Largo:</strong> {detallesNaves.result.properties.length}</p>
                        <p className="card-text"><strong>Pasajeros:</strong> {detallesNaves.result.properties.passengers}</p>
                        <p className="card-text"><strong>Capacidad de carga:</strong> {detallesNaves.result.properties.cargo_capacity}</p>
                    </div>
                </div>
                </div>
             
            )
        
    }
    </>
    )
}