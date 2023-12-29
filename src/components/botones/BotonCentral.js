import React from "react";
import { toggleBotonCentral } from "../datos/ToggleBotonCentral";

const BotonCentral = ({flag}) => {

    return (
        <button className="btn-central">
            {toggleBotonCentral(flag)}
        </button>
    );
}

export { BotonCentral }