import React from "react";
import { toggleBotonCentral } from "../datos/ToggleBotonCentral";

const BotonCentral = ({flag}) => {

    return (
        <div>
            {toggleBotonCentral(flag)}
        </div>
    );
}

export { BotonCentral }