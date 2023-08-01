import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import imgDefault from "../../img/placeholder.jpg"


export const DetailsPlanets = () => {
    const [detallesPlanets, setDetallesPlanets] = useState(null)
    const { id } = useParams();
    const url = 'https://www.swapi.tech/api/planets/' +  id;
    const handleOnErrorImg = (e) => {e.target.src = imgDefault}
    console.log(detallesPlanets)
    // const viewDetails = JSON.parse(localStorage.getItem('peopleLocal')); // aca leo la nueva variable ue tiene los 10 detalles de los 10 primeros
    // filtrar por el que sea = .uid = id
    // console.log(viewDetails);
    const getDetallePlanets = async () => {
        const response = await fetch(url)
        const data = await response.json()
        return data
    }

    useEffect(() => {

        getDetallePlanets().then(data => setDetallesPlanets(data.result.properties))
    }, [])



    return (
        <>
            {
                detallesPlanets !== null && 
                (
                    <div className="bg-dark d-flex justify-content-center">
                           <div className="card m-4 border-dark " style={{ width: "18rem" }}>
                       <img  alt="" src={"https://starwars-visualguide.com/assets/img/planets/" + (id ) + ".jpg"} onError={handleOnErrorImg}/>
                        <h1>{detallesPlanets.name}</h1>
                        <div className="card-body ">
                            {/* <h3>{viewDetails.name}</h3> */}
                            <p className="card-text"><strong>Edad:</strong> {detallesPlanets.climate.toUpperCase()}</p>
                            <p className="card-text"><strong>Color de ojos:</strong> {detallesPlanets.gravity.toUpperCase()}</p>
                            <p className="card-text"><strong>Género:</strong> {detallesPlanets.created.toUpperCase() }</p>
                            <p className="card-text"><strong>Color de pelo:</strong> {detallesPlanets.surface_water.toUpperCase()}</p>
                            <p className="card-text"><strong>Altura:</strong> {detallesPlanets.terrain.toUpperCase()}</p>
                        </div>
                    </div>
                    </div>
                 
                )
            
        }
        </>
        )
}