import React, { useState } from "react";
import { AvisoBody, AvisoContainer, BtnCierreAviso } from "./Avisos";

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
                        $bgcolor={""}
                    >
                        {"Se completo la etapa " + etapaCambiada}
                    </AvisoBody>
                    <BtnCierreAviso
                        $bgcolor={""}
                        $bgcolorhover={""}
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