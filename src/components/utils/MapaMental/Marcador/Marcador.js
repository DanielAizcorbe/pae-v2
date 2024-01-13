import React from "react";
import { styled } from "styled-components";

const Marcador = ({ posX, posY, numero, openModal }) => {

    const removeMarcador = () => {
        openModal(true);
    }

    return (
        <MarcadorBody
            posX={posX + "px"}
            posY={posY + "px"}
            onClick={removeMarcador}
        >
            <NumeroMarcador>
                {numero}
            </NumeroMarcador>
        </MarcadorBody>
    );
}

const MarcadorBody = styled.div`
    position: absolute;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    z-index: 2;
    left: ${props => props.posX};
    top: ${props => props.posY};
    background-color: blue;
    cursor: pointer;
`;

const NumeroMarcador = styled.span`
    position: relative;
    bottom: 15px;
    left: 8px;
    color: black;
`;


export { Marcador }