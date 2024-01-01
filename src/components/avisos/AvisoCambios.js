import React from "react";
import { AvisoWarning } from "./AvisoWarning";

const AvisoCambios = ({etapaCambiada}) => {

    return (
        <AvisoWarning text={"Se ha realizado un cambio en la etapa "+etapaCambiada + ", por favor revisa el resto de etapas"}/>
    );
}

export { AvisoCambios }