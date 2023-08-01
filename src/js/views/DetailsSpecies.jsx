import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import imgDefault from "../../img/placeholder.jpg"


export const DetailsSpecies = () => {
    const [detallesSpecies, setDetallesSpecies] = useState(null)
    const { id } = useParams();
    const url = 'https://www.swapi.tech/api/species/' +  id;
    const handleOnErrorImg = (e) => {e.target.src = imgDefault}
    console.log(detallesSpecies)

    const getDetalleSpecies = async () => {
        const response = await fetch(url)
        const data = await response.json()
        return data
    }

    useEffect(() => {

        getDetalleSpecies().then(data => setDetallesSpecies(data.result.properties))
    }, [])



    return (
        <>
            {
                detallesSpecies !== null && 
                (
                    <div className="bg-dark d-flex justify-content-center">
                           <div className="card m-4 border-dark " style={{ width: "18rem" }}>
                       <img  alt="" src={"https://starwars-visualguide.com/assets/img/species/" + (id ) + ".jpg"} onError={handleOnErrorImg}/>
                        <h1>{detallesSpecies.name}</h1>
                        <div className="card-body ">
                            {/* <h3>{viewDetails.name}</h3> */}
                            <p className="card-text"><strong>Edad:</strong> {detallesSpecies.classification}</p>
                            <p className="card-text"><strong>Color de ojos:</strong> {detallesSpecies.designation}</p>
                            <p className="card-text"><strong>Género:</strong> {detallesSpecies.created }</p>
                            <p className="card-text"><strong>Color de pelo:</strong> {detallesSpecies.surface_water}</p>
                            <p className="card-text"><strong>Altura:</strong> {detallesSpecies.terrain}</p>
                        </div>
                    </div>
                    </div>
                 
                )
            
        }
        </>
        )
}