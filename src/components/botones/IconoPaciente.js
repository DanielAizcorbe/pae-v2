import React from "react";
import medicoImagen from "../../img/medico.png";
import { styled } from "styled-components";

const IconoPaciente = () => {
    return (
        <Imagen src={medicoImagen} alt="icono paciente"/>
    );
}

const Imagen = styled.img`
    width: 9rem;
    height: 9rem;
    margin: 2.5rem 5rem;
    user-select: none;
    -webkit-user-drag: none;
    -moz-user-select: none;
    pointer-events: none;
    position: absolute;
    bottom: -125px;
`;

export { IconoPaciente }