import React from "react";

const AvisoWarning = ({text}) => {

    return (
        <div className="contexto-relativo-cartel-aviso"> 
            <div className="aviso-modificacion warning" >
                {text}
            </div>
            <button className="cerrar-cartel" onClick={() => alert("cerrar aviso")}>
                x
            </button>
        </div>
    );
}

export { AvisoWarning }