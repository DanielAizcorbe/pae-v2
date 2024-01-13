import React from "react";
import { ItemEvolucionAnterior } from "./ItemEvolucionAnterior";
import { styled } from "styled-components";

const ItemEvoluciones = ({ openEvolucion, evoluciones }) => {

    return (
        <>
            {
                (evoluciones.length === 0) ?
                    <SinEvolucionesRegistradas>
                        No hay evoluciones anteriores registradas
                    </SinEvolucionesRegistradas>
                    :
                    evoluciones
                        .map(evolucion =>
                            <ItemEvolucionAnterior
                                evolucionAnterior={evolucion}
                                onClick={() => openEvolucion(evolucion)}
                            />)
            }
        </>
    );
}

const SinEvolucionesRegistradas = styled.p`
    background-color: var(--color-fondo);
    text-align: center;
    width: 100%;
    padding: 1rem;
    border-radius: 1rem;
    margin: auto;
    margin-top: 2rem;
`;

export { ItemEvoluciones }