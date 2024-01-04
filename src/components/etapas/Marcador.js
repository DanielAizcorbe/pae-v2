import React, { useState } from "react";

const Marcador = ({ style, text, tipoOperacion }) => {

    const [showText, setShowText] = useState(false);

    const AGREGAR = 1;
    const QUITAR = 2;
    const CONSULTAR = 3;


    const getOnClic = (operacion) => {
        switch (operacion) {
            case AGREGAR: return (() => {});
            case QUITAR: return (() => alert("quitar marcador"));
            case CONSULTAR: return (() => setShowText(!showText));
            default: return null;
        }
    }

    return (
        <div className="marcador" style={style} onClick={getOnClic(tipoOperacion)}>
            {showText ? <span className="pop-up-marcador">Operación</span> : ""}
        </div>
    );
}

export { Marcador }