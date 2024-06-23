import React from "react";
import { EtapasEvolucion } from "./EtapasEvolucion";
import { Columns } from "../utils/containers/Containers";
import { Titulo } from "../utils/Titulos";
import { NavBar } from "../generales/NavBar";
import { useSelector } from "react-redux";

const Evolucion = () => {

    const paciente = useSelector(state => state.paciente);

    return (
        <Columns
            elementPosition="top-center"
            height="100%"
            width="100%"
        >
            <NavBar defaultSection={1} />
            <Columns
                elementPosition="center"
                height="20vh"
                width="100%"
            >
                <Titulo texto={paciente.nombre + " " + paciente.apellido} />
            </Columns>
            <EtapasEvolucion />
        </Columns>

    );
}




export { Evolucion }