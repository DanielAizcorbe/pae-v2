import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BOTON_PRIMARIO, HOVER_BOTON_PRIMARIO } from "../datos/colores";

const BotonSiguiente = ({ nextPage, text }) => {

    const navegar = useNavigate();
    return (
        <BtnSgnt
            onClick={() => navegar(nextPage)}
        >
            {text ?? "Siguiente"}
        </BtnSgnt>
    );
}

const BtnSgnt = styled.button`
    border-radius: 1rem;
    padding: 1rem 2rem;
    width: 12rem;
    height: 4rem;
    color: white;
    outline: none;
    cursor: pointer;
    border: none;
    font-size: 1.3rem;
    background-color: ${BOTON_PRIMARIO};
    -webkit-box-shadow: -2px 4px 31px -14px rgba(0, 0, 0, 0.95);
    -moz-box-shadow: -2px 4px 31px -14px rgba(0, 0, 0, 0.95);
    box-shadow: -2px 4px 31px -14px rgba(0, 0, 0, 0.95);

    &:hover {
        background-color: ${HOVER_BOTON_PRIMARIO};
        transition: background-color 100ms linear;
    }
`;


export { BotonSiguiente }