import React from "react";
import { useState } from "react";

const Etapa = ({ nombre, onClick, onEdit, completada, classes }) => {

    const [nombreBoton, setNombreBoton] = useState(nombre);


    return ( 
            <button
                className={"etapa " + classes + (completada ? " completada" : "")}
                onClick={completada ? () => alert("EDITAR " + nombre) : onClick}
                onMouseEnter={ () => setNombreBoton(completada ? "EDITAR" : nombre)}
                onMouseLeave={ () => setNombreBoton(nombre) }
            >
                {nombreBoton}
            </button>
    );
}

export { Etapa }