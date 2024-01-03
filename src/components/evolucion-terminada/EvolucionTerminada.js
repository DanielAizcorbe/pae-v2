import React, { useState } from "react";
import "./evolucion-terminada.css";

const EvolucionTerminada = () => {

    const [texto, setTexto] = useState("12314");
    const [fueGuardado, setFueGuardado] = useState(false);
    
    return (
        <div className="resumen-container">
            <h1>Vista previa</h1>
            <div className="resumen-cuerpo">
                <textarea className="evolucion-completa" value={texto} onChange={(event) => setTexto(event.target.value)}>
                </textarea>
                <div className="botones-resumen">
                    <button className="btn-copiar-texto">
                        Copiar al portapapeles
                    </button>
                    {fueGuardado ? 
                    <div className="btn-guardado">V Guardado</div> 
                    : <button className="btn-guardar" onClick={() => setFueGuardado(true)}>
                        Guardar
                    </button>}
                </div>
            </div>
        </div>
    );
}

export { EvolucionTerminada }