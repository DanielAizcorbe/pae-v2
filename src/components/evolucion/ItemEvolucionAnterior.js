import React from "react";
import { styled } from "styled-components";
import { ImportantText } from "../utils/Spans";

const ItemEvolucionAnterior = ({ evolucionAnterior, onClick }) => {

    return (
        <EvolucionAnterior key={evolucionAnterior.id} onClick={() => onClick(evolucionAnterior)}>
            <ImportantText underline={false}>
                {evolucionAnterior.hora + "-" + evolucionAnterior.fecha}
            </ImportantText>
            {"-" + evolucionAnterior.sector}
        </EvolucionAnterior>
    );
};

const EvolucionAnterior = styled.li`
    margin-bottom: 10px;
    border: 1px solid black;
    border-radius: 1rem;
    padding: 1rem;
    cursor: pointer;
    background-color: var(--fondo-resaltado);
    font-size: 1rem;
    -webkit-box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.52);
    -moz-box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.52);
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.52);
    max-width: 1000px;
    width: 100%

    &:hover {
        background-color: var(--celeste-claro);
        transition: background-color 100ms linear;
    }
`;



export { ItemEvolucionAnterior }