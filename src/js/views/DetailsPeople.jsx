import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import imgDefault from "../../img/star-wars-logo.png"

export const DetailsPeople = () => {
    const [detalles, setDetalles] = useState(null)
    const { id } = useParams();
    const url = 'https://www.swapi.tech/api/people/' + id;
    const handleOnErrorImg = (e) => {e.target.src = imgDefault}
    console.log(detalles)
    const getDetallePeople = async () => {
        const response = await fetch(url)
        const data = await response.json()
        return data
    }

    useEffect(() => {

        getDetallePeople().then(data => setDetalles(data.result.properties))
    }, [])



    return (
        <>
            {
                detalles !== null && (
                    <div className="bg-dark d-flex justify-content-center">
                           <div className="card m-4 border-dark " style={{ width: "18rem" }}>
                       <img  alt="" src={"https://starwars-visualguide.com/assets/img/characters/" + (id ) + ".jpg"} onError={handleOnErrorImg}/>
                        <h1>{detalles.name}</h1>
                        <div className="card-body ">
                            {/* <h3>{viewDetails.name}</h3> */}
                            <p className="card-text"><strong>Edad:</strong> {detalles.birth_year.toUpperCase()}</p>
                            <p className="card-text"><strong>Color de ojos:</strong> {detalles.eye_color.toUpperCase()}</p>
                            <p className="card-text"><strong>Género:</strong> {detalles.gender.toUpperCase() }</p>
                            <p className="card-text"><strong>Color de pelo:</strong> {detalles.hair_color.toUpperCase()}</p>
                            <p className="card-text"><strong>Altura:</strong> {detalles.height.toUpperCase()}</p>
                        </div>
                    </div>
                    </div>
                 
                )
            
        }
        </>
        )
}