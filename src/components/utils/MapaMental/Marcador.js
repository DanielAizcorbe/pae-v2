import React, { useState } from "react";

const Marcador = ({ text, tipoOperacion, color, posX, posY }) => {

    const [showText, setShowText] = useState(false);

    const AGREGAR = 1;
    const QUITAR = 2;
    const CONSULTAR = 3;

    const style = {
        left: posX,
        top: posY,
        color: {color}
    };

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