import React from "react";
import { EtapasEvolucion } from "./EtapasEvolucion";
import { Columns } from "../utils/Containers";
import { Titulo } from "../utils/Titulos";
import { NavBar } from "../generales/NavBar";

const Evolucion = () => {

    return (
        <Columns
            elementPosition="top-center"
        >
            <Columns
                elementPosition="top-center"
            >
                <NavBar defaultSection={1} />
                <Columns
                    elementPosition="center"
                    height="20vh"
                >
                    <Titulo texto="Evolución paciente" />
                </Columns>
                <EtapasEvolucion />
            </Columns>
        </Columns>
    );
}




export { Evolucion }