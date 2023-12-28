import React from "react";
import { Valoracion } from "./etapas/Valoracion";
import { BotonCentral } from "./botones/BotonCentral";
import { FALTAN_ETAPAS, FALTA_CONFIRMAR_EDICION, GENERAR_EVOLUCION } from "./datos/ToggleBotonCentral";

const EtapasEvolucion = () => {

    return (
        <div>
            <Valoracion />
            <BotonCentral flag={FALTA_CONFIRMAR_EDICION}/>
        </div>
    );
}

export {EtapasEvolucion}