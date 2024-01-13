import React from "react";
import { evoluciones } from "../datos/datos-evoluciones";
import { Columns } from "../utils/Containers";
import { styled } from "styled-components";
import { ItemEvoluciones } from "./ItemEvoluciones";

const EvolucionesAnteriores = ({ openEvolucion }) => {
    return (
        <Columns
            elementPosition="top-center"
            width="auto"
            height="auto"
        >
            <ListaEvolucionesAnteriores>
                <TituloLista>
                    Evoluciones Anteriores
                </TituloLista>
                <List>
                    <ItemEvoluciones evoluciones={evoluciones} openEvolucion={openEvolucion} />
                </List>
            </ListaEvolucionesAnteriores>
        </Columns>
    );
}

const ListaEvolucionesAnteriores = styled.div`
    overflow-y: auto;
    height: 100%;
    max-height: 100vh;
    border-right: 2px solid var(--fondo-resaltado);
    width: 450px;
    
    &::-webkit-scrollbar {
        width: 0.3rem;
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--fondo-resaltado);
        border-radius: 1rem;
        opacity: 0;
    }
`;

const List = styled.ol`
    margin: 0;
    list-style-type: none;
    padding: 0.8rem;
    min-height: 100%;
    height: 100%;
    font-style: italic;
`;

const TituloLista = styled.h2`
    margin: 0;
    text-align: center;
    padding: 0.9rem;
    max-height: 20%;
    background-color: var(--fondo-resaltado);
    -webkit-box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.52);
    -moz-box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.52);
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.52);
`;

export { EvolucionesAnteriores };