import React from "react";
import { styled } from "styled-components";

const TextArea = ({ text, setText }) => {
    return (
        <Textarea
            value={text}
            onChange={(event) => setText(event.target.value)}
        />
    );
};

const Textarea = styled.textarea`
    width: 60rem;
    height: 36rem;
    padding: 1.7rem 2rem;
    border-radius: 2rem;
    background-color: var(--color-fondo);
    border: 2px solid;
    font-size: 1.1rem;
    resize: none;
    margin-bottom: 2rem;
    outline: none;

    &::selection {
        background-color: var(--fondo-resaltado);
    }

    &:focus {
        border: 2px solid var(--fondo-resaltado);
        transition: border 100ms linear;
    }
`;


export { TextArea };
