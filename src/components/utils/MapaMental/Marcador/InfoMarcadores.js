import React from "react";
import { styled } from "styled-components";

const InfoMarcadores = ({ marcadores }) => {

    return (
        <ListaInfoMarcadores>
            {
                marcadores
                    .map(m =>
                        <InfoMarcador key={m.id}>
                            {m.text}
                        </InfoMarcador>)
            }
        </ListaInfoMarcadores>
    );
}

const ListaInfoMarcadores = styled.ol`
    position: relative;
    max-width: 40rem;
    min-width: 20rem;
    width: 50%;
    left: 32rem;
    height: 600px;
    padding: 1rem 2rem;
    margin: 0;
    z-index: 1;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 0.2rem;
`;

const InfoMarcador = styled.li`
    font-size: 1.3rem;
    padding: 0.5rem;
`;

export { InfoMarcadores }