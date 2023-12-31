import React from "react";

const DatosPaciente = ({nombre, documento, fechaNac}) => {
    return (
        <div className="datos-paciente-container">
            {/*<h1>DATOS PACIENTE</h1>*/}
            <span>{nombre + " / " + fechaNac + " / " + documento}</span>
        </div>
    );
}

export {DatosPaciente};