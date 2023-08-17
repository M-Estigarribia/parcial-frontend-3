import React from "react";

function Card({color, numero, mostrarCard}) {
  return (
    <div className= {mostrarCard ? "card card-display" : "card card-hidden" }>
      <div>
        <p>Tu número de la suerte es:</p>
        <div className="number-block-container"> <p>{numero}</p></div>
      </div>
      <div className="color-container">
        <p>Tu color de la suerte es:</p>
        <div className="color-block-container" style={{backgroundColor: color}}></div>
      </div>
    </div>
  )
  
};

export default Card;