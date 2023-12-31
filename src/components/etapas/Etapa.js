import React from "react";

const Etapa = ({nombre, onClick, completado}) => {

    return (
            <button className="etapa" onClick={onClick}>
                {completado ? "V " : ""}{nombre}
            </button>
    );
}

export { Etapa }