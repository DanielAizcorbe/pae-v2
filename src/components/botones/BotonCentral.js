import React from "react";
import { toggleBotonCentral } from "../datos/ToggleBotonCentral";

const BotonCentral = ({flag}) => {

    return (
        <>
            {toggleBotonCentral(flag)}
        </>
    );
}

export { BotonCentral }