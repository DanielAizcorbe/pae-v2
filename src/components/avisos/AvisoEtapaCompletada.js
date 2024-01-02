import React, { useState } from "react";

const AvisoEtapaCompletada = ({ etapaCambiada }) => {

    const [mostrarAviso, setMostrarAviso] = useState(true);

    const closeAviso = () => {
        setMostrarAviso(false);
    }

    return (
        <>
            {
                mostrarAviso ?
                    <div className="contexto-relativo-cartel-aviso">
                        <div className="aviso-modificacion confirm" >
                            Se completó la etapa {etapaCambiada}
                        </div>
                        <button className="cerrar-cartel" onClick={closeAviso}>
                            x
                        </button>
                    </div>
                    : ""
            }
        </>
    );
}

export { AvisoEtapaCompletada }