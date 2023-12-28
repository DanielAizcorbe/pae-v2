import React from "react";

const DatosPaciente = ({nombre, documento}) => {
    return (
        <div className="datos-paciente-container">
            {/*<h1>DATOS PACIENTE</h1>*/}
            <span>{nombre + " - " + documento}</span>
        </div>
    );
}

export {DatosPaciente};