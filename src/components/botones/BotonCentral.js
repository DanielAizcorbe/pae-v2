import React from "react";
import { toggleBotonCentral } from "./ToggleBotonCentral";

const BotonCentral = ({ flag }) => {

    return (
        <>
            {toggleBotonCentral(flag)}
        </>
    );
}

export { BotonCentral }