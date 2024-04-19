import React from "react";
import medicoImagen from "../../img/medico.png";
import { styled } from "styled-components";

const IconoPaciente = () => {
    return (
        <Imagen>
            <img
                src={medicoImagen}
                alt="icono paciente"
                style={{
                    width: "8rem",
                    height: "8rem"
                }}
            />
            <span style={{fontSize: "1.5rem" }}>
                Juan
            </span>
        </Imagen>
    );
}

const Imagen = styled.div`
    width: 9rem;
    height: 9rem;
    margin: 2.5rem 5rem;
    user-select: none;
    -webkit-user-drag: none;
    -moz-user-select: none;
    pointer-events: none;
    position: absolute;
    bottom: -125px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export { IconoPaciente }