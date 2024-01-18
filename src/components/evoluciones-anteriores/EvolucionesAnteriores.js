import React from "react";
import { Columns } from "../utils/Containers";
import { NavBar } from "../generales/NavBar";

const EvolucionesAnteriores = () => {

    return (
        <Columns
            elementPosition={"top-center"}
        >
            <NavBar defaultSection={2} />
        </Columns>
    );
}

export { EvolucionesAnteriores }