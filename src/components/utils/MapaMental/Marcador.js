import React, { useState } from "react";

const Marcador = ({ color, posX, posY, numero }) => {

    const [showText, setShowText] = useState(false);

    const style = {
        left: posX,
        top: posY,
        color: {color}
    };

    return (
        <div className="marcador" style={style} onClick={() => alert("quitar marcador")}>
            <span>{numero}</span>
        </div>
    );
}

export { Marcador }