import React from "react";

const Etapa = ({ nombre, onClick, completado, classes }) => {

    return ( 
            <button
                className={"etapa " + classes}
                onClick={onClick}
            >
                {completado ? "V " : ""}{nombre}
            </button>
    );
}

export { Etapa }