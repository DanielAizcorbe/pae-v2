import React from "react";

const Etapa = ({nombre, onClick}) => {

    return (
            <button className="btn" onClick={onClick}>
                {nombre}
            </button>
    );
}

export { Etapa }