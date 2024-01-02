import React from "react";

const AvisoWarning = ({text, closeAviso}) => {

    return (
        <div className="contexto-relativo-cartel-aviso"> 
            <div className="aviso-modificacion warning" >
                {text}
            </div>
            <button className="cerrar-cartel" onClick={closeAviso}>
                x
            </button>
        </div>
    );
}

export { AvisoWarning }