import React from "react";
import { useState } from "react";
import { styled } from "styled-components";
import { BOTON_PRIMARIO, WARNING_COLOR } from "../datos/colores";
import { useNavigate } from "react-router-dom";

const Etapa = ({ nombre, link, completada, bgcolor }) => {

    const [nombreBoton, setNombreBoton] = useState(nombre);

    const navegar = useNavigate();

    const goToEtapa = () => {
        navegar(link);
    }

    return (
        <BotonEtapa
            $completada={completada}
            onClick={goToEtapa}
            onMouseEnter={() => setNombreBoton(completada === true ? "EDITAR" : nombre)}
            onMouseLeave={() => setNombreBoton(nombre)}
            $bgcolor={bgcolor}
        >
            {nombreBoton}
        </BotonEtapa>
    );
}

const BotonEtapa = styled.button`
    margin: 0 2.5rem;
    width: 15.6rem;
    height: 7.25rem;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    -webkit-box-shadow: -2px 4px 31px -14px rgba(0, 0, 0, 0.95);
    -moz-box-shadow: -2px 4px 31px -14px rgba(0, 0, 0, 0.95);
    box-shadow: -2px 4px 31px -14px rgba(0, 0, 0, 0.95);
    box-shadow: -2px 4px 31px -14px rgba(0, 0, 0, 0.95);
    background-color: ${props => props.$completada == true ? BOTON_PRIMARIO : props.$bgcolor};
    text-align: center;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: black;
    cursor: pointer;
    color: white;
    font-size: 1.25rem;
    border: none;

    &:hover {
        background-color: ${props => props.$completada == true ? WARNING_COLOR : BOTON_PRIMARIO};
        transform: scale(1.05, 1.05);
        transition: transform 100ms linear;
    }
`;

export { Etapa }