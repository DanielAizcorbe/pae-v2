import React, { useState } from "react";
import "./planeacion.css";
import { diagnosticos } from "../../datos/datos-diagnostico"
import { Container } from "../../utils/Container/Container";
import { DragDropDiagnostico } from "./DragDropDiagnostico";
import { useNavigate } from "react-router-dom";


const Planeacion = () => {

    const diagnosticosPrueba = diagnosticos.filter(d => d.tipo == "Fisiológicas");

    const navegar = useNavigate();

    const nextPage = () => {
        navegar("/evolucion");
    }

    return (
        <Container
            direction={"column"}

        >
            <h1>Planeación</h1>
            <h2>Ordene los diagnósticos según su urgencia</h2>
            <DragDropDiagnostico
                diagnosticos={diagnosticosPrueba}
            >

            </DragDropDiagnostico>
            <button onClick={nextPage}>
                Siguiente
            </button>
        </Container>
    );
}

export { Planeacion }