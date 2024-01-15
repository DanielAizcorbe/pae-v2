import React, { useState } from "react";
import { AvisoBody, AvisoContainer, BtnCierreAviso } from "./Avisos";
import { BOTON_PRIMARIO, HOVER_BOTON_PRIMARIO } from "../datos/colores";

const AvisoEtapaCompletada = ({ etapaCambiada }) => {

    const [mostrarAviso, setMostrarAviso] = useState(true);

    const closeAviso = () => {
        setMostrarAviso(false);
    }

    return (
        <>
            {mostrarAviso ?

                <AvisoContainer>
                    <AvisoBody
                        $bgcolor={BOTON_PRIMARIO}
                    >
                        {"Se completo la etapa " + etapaCambiada}
                    </AvisoBody>
                    <BtnCierreAviso
                        $bgcolor={BOTON_PRIMARIO}
                        $bgcolorhover={HOVER_BOTON_PRIMARIO}
                        onClick={closeAviso}
                    >
                        x
                    </BtnCierreAviso>
                </AvisoContainer>
                : ""
            }
        </>
    );
}

export { AvisoEtapaCompletada }