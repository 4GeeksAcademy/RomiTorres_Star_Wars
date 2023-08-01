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
        <div>
            <div>
            <img  alt="" src={"https://starwars-visualguide.com/assets/img/starships/" + (starships[id - 1].uid ) + ".jpg"} onError={handleOnErrorImg}/>
            </div>
            <div>
                {!detallesNaves.result ? (<Spinner />
                ) : (

                    <div>
                        
                        <p><b>Cost: </b>{detallesNaves.result.properties.cost_in_credits}</p>
                        <p><b>Length: </b>{detallesNaves.result.properties.length}</p>
                        <p><b>Passengers: </b>{detallesNaves.result.properties.passengers}</p>
                        <p><b>Cargo capacity: </b>{detallesNaves.result.properties.cargo_capacity}</p>

                    </div>
                )
                }
            </div>
        </div>
    )
}