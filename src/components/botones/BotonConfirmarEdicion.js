import React from "react";
import { FALTA_CONFIRMAR_EDICION } from "./ToggleBotonCentral";

const BotonConfirmarEdicion = () => {

    return (
        <button className="btn-central btn-confirmar">
            {FALTA_CONFIRMAR_EDICION}
        </button>
    );
}

export { BotonConfirmarEdicion }