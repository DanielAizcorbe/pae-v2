import React from "react";

const AvisoEtapaCompletada = ({etapaCambiada}) => {

    return (
        <div className="contexto-relativo-cartel-aviso"> 
            <div className="aviso-modificacion confirm" >
                Se completó la etapa {etapaCambiada}
            </div>
            <button className="cerrar-cartel" onClick={() => alert("cerrar aviso")}>
                x
            </button>
        </div>
    );
}

export {AvisoEtapaCompletada}