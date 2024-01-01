import React from "react";

const AvisoCambios = ({etapaCambiada}) => {

    return (
        <div className="contexto-relativo-cartel-aviso"> 
            <div className="aviso-modificacion warning" >
                Se han realizado cambios en la etapa {etapaCambiada}, compruebe que esto no afecte al resto de etapas
            </div>
            <button className="cerrar-cartel" onClick={() => alert("cerrar aviso")}>
                x
            </button>
        </div>
    );
}

export { AvisoCambios }