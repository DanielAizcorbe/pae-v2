import React from "react";
import { Valoracion } from "./etapas/Valoracion";
import { BotonCentral } from "./botones/BotonCentral";
import { FALTAN_ETAPAS, FALTA_CONFIRMAR_EDICION, GENERAR_EVOLUCION } from "./datos/ToggleBotonCentral";

const EtapasEvolucion = () => {

    return (
        <div className="etapas-container">
            <div className="b1" >
                <button className="btn">
                    BOTON 1
                </button>
            </div>
            <div className="b2">
                <button className="btn">
                    BOTON 1
                </button>
                <BotonCentral flag={FALTA_CONFIRMAR_EDICION} />
                <button className="btn">
                    BOTON 1
                </button>
            </div>
            <div className="b3">
                <button className="btn">
                    BOTON 1
                </button>
                <button className="btn">
                    BOTON 1
                </button>
            </div>
        </div>
    );
}

export { EtapasEvolucion }