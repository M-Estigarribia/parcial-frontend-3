import React from "react";
import { useState } from 'react'
import Error from "./Error"

function Form({onSubmitForLuck}) {
    const [nombre, setNombre] = useState("");
    const [animal, setAnimal] = useState("");
    const [error, setError] = useState(false);

    function handleSubmit(e){
        e.preventDefault();
        if((!nombre || !animal) || (!isNaN(nombre) || !isNaN(animal)) || (nombre.trim('').length < nombre.length) || (animal.length < 6)){
            setError(true);
        }
        else  {
            onSubmitForLuck(nombre, animal);
            setNombre("");
            setAnimal("");
            setError(false);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label htmlFor="nombre">Nombre</label>
                    <small>Tu nombre debe tener tres o más letras.</small>
                    <input type="text" name="nombre" placeholder="Ingresa tu nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
                </div>
                
                <div className="input-container">
                    <label htmlFor="animal">Animal favorito</label>
                    <small>Tu animal favorito debe tener seis o más letras. Si tu animal favorito tiene menos de seis letras, elige otro.</small>
                    <input type="text" name="animal" placeholder="Ingresa tu animal favorito" value={animal} onChange={(e)=>setAnimal(e.target.value)}/>
                </div>
                <div className="input-container">
                    <input className="input-button" type="submit" value="Descubre tu número y color de la suerte!" />
                </div>
            </form>
            <Error error={error}/>
        </>
    )

}

export default Form;