import React from "react";
import { styled } from "styled-components";

const DatosPaciente = ({ nombre, documento, fechaNac }) => {
    return (
        <DatosPacienteContainer>
            <DatosPacienteBody>
                {nombre + " | " + fechaNac + " | " + documento}
            </DatosPacienteBody>
        </DatosPacienteContainer>
    );
}

const DatosPacienteContainer = styled.div`
    border: 3px solid black;
    border-radius: 15px;
    max-width: 50vw;
    width: 100%;
    min-width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background-color: var(--fondo-resaltado);
`;

const DatosPacienteBody = styled.span`
    color: var(--color-texto);
    font-size: large;
    font-weight: bolder;
    font-size: 1.3rem;
`;

export { DatosPaciente };