import React from "react";
import { styled } from "styled-components";

const InputNroDocumento = ({onChange, docBuscado}) => {

    return (
        <label htmlFor="nro-documento">
            <Input
                type="text"
                name="nro-documento"
                id="nro-documento"
                autoComplete="off"
                maxLength={30}
                minLength={1}
                spellCheck={false}
                placeholder="Ingrese el documento del paciente"
                onChange={onChange}
                value={docBuscado}
            />
        </label>
    );
}

const Input = styled.input`
    width: 30rem;
    border-radius: 10px 0 0 10px;
    font-size: 1.5rem;
    text-align: center;
    height: 2.5rem;
    border: 2px solid var(--fondo-resaltado);
    outline: none;

    &::placeholder {
        font-style: italic;
    }
`;

export { InputNroDocumento }