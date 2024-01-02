import React, { useState } from "react";
import { AvisoWarning } from "./AvisoWarning";

const AvisoCambios = ({ etapaCambiada }) => {

    const [mostrarAviso ,setMostrarAviso] = useState(true);

    const closeAviso = () => {
        setMostrarAviso(false);
    }
    return (
        <>
            {mostrarAviso ? <AvisoWarning text = { "Se ha realizado un cambio en la etapa "+ etapaCambiada + ", por favor revisa el resto de etapas" } closeAviso={closeAviso}/>  : ""}
        </>
    );
}

export { AvisoCambios }