import Title from "antd/es/typography/Title";
import React from "react";
import { styled } from "styled-components";

const Titulo = ({ texto, id }) => {

    return (
        <Title level={1} id={id}>
            {texto}
        </Title>
    );
}

const H1 = styled.h1`
    background-color: var(--fondo-resaltado);
    color: var(--color-fondo);
    padding: 1rem;
    border-radius: 1rem;
    margin: 2rem;
    font-size: 3rem;
    text-align: center;
`;

export { Titulo }