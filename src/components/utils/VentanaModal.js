import React from "react";
import { styled } from "styled-components";
import { Columns } from "./Containers";

const VentanaModal = ({ children, showbackground, position, height, width }) => {

    return (
        <Overlay $showbackground={showbackground || false} >
            <Columns
                elementPosition={position}
            >
                <Columns
                    elementPosition="top-center"
                    height={height}
                    width={width}
                >
                    <Contenido>
                        {children}
                    </Contenido>
                </Columns>
            </Columns>
        </Overlay>
    );
}

const Overlay = styled.div`
    background-color: ${props => props.$showbackground ? "transparent" : "rgba(0, 0, 0, 0.5)"};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
    display: inline-flex;

`;

const Contenido = styled.div`
    background-color: aliceblue;
    border-radius: 1rem;
    padding: 2rem;
    width: 100%;
    height: 100%;

`;

const TituloModal = styled.h2`
    font-size: 2.2rem;
    margin: 0;
`;

const FilaDatoModal = styled.div`
    width: 100%;
    font-style: italic;
    padding: 1rem 0.8rem;
`;

export { VentanaModal, TituloModal, FilaDatoModal }