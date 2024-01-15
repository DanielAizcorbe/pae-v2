import React from "react";
import { toggleBotonCentral } from "./ToggleBotonCentral";
import { useNavigate } from "react-router-dom";

const BotonCentral = ({ flag }) => {

    const navegar = useNavigate();

    const nextPage = () => {
        navegar("/evolucion/finalizar");
    }

    return (
        <>
            {toggleBotonCentral(flag,nextPage)}
        </>
    );
}

export { BotonCentral }