import React from "react";
import { GENERAR_EVOLUCION } from "./ToggleBotonCentral";

const BotonGenerarEvolucion = () => {
    return (
        <button className="btn-central btn-generar">
            {GENERAR_EVOLUCION}
        </button>
    );
}

export {BotonGenerarEvolucion}