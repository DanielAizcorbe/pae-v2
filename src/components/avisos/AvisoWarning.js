import React from "react";
import { WARNING_COLOR, WARNING_COLOR_HOVER } from "../datos/colores";
import { AvisoContainer, AvisoBody, BtnCierreAviso } from "./Avisos";

const AvisoWarning = ({ text, closeAviso }) => {

    return (
        <AvisoContainer>
            <AvisoBody
                bgcolor={WARNING_COLOR}
            >
                {text}
            </AvisoBody>
            <BtnCierreAviso
                $bgcolor={WARNING_COLOR}
                $bgcolorhover={WARNING_COLOR_HOVER}
                onClick={closeAviso}
            >
                x   
            </BtnCierreAviso>
        </AvisoContainer>
    );
}

export { AvisoWarning }