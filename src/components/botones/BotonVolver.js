import React from "react";
import { styled } from "styled-components";
import { BOTON_SECUNDARIO, HOVER_BOTON_SECUNDARIO } from "../datos/colores";

const BotonVolver = ({ onClick }) => {

    return (
        <BtnVlvr onClick={onClick}>
            Volver
        </BtnVlvr>
    )
}

const BtnVlvr = styled.button`
    border-radius: 1rem;
    padding: 1rem 2rem;
    width: 12rem;
    height: 4rem;
    color: black;
    outline: none;
    cursor: pointer;
    border: none;
    font-size: 1.3rem;
    background-color: inherit;

    &:hover {
        color: ${HOVER_BOTON_SECUNDARIO};
        transition: color 100ms linear;
    }
`

export { BotonVolver }