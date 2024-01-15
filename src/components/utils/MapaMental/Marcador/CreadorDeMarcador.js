import React, { useState } from "react";
import { TituloModal, VentanaModal } from "../../VentanaModal";
import { BotonContainer, Columns } from "../../Containers";
import { styled } from "styled-components";
import { ListaDePracticas } from "./ListaDePracticas";

const CreadorDeMarcador = ({ closeModalFunction, marcadorNuevo, addNuevoMarcador }) => {

    const cancel = () => {
        closeModalFunction();
    }

    const [selectedOption, setSelectedOption] = useState("");

    const create = (event) => {
        event.preventDefault();
        const newMarker = marcadorNuevo;
        newMarker.text = selectedOption;
        addNuevoMarcador(newMarker);
        closeModalFunction();
    };

    return (
        <VentanaModal
            showbackground={false}
            position={"center"}
            width={"30rem"}
            height={"30rem"}
        >
            <Columns
                elementPosition="top-left"
            >
                <TituloModal>
                    Nuevo Marcador
                </TituloModal>
                <MarcadorForm
                    onSubmit={create}
                >
                    <Columns
                        elementPosition="top-center"
                        height={"100%"}
                    >
                        <ListaDePracticas 
                            selected={selectedOption}
                            setSelected={setSelectedOption}
                        />
                        <BotonContainer
                            height={"100%"}
                            padding={"0"}
                        >
                            <Cancelar onClick={cancel}>
                                Cancelar
                            </Cancelar>
                            <Submit value="Crear" />
                        </BotonContainer>
                    </Columns>
                </MarcadorForm>
            </Columns>
        </VentanaModal>
    );
};

const MarcadorForm = styled.form`
    margin-top: 2rem;
    
    width: 100%;
    height: 100%;
`;

const Submit = styled.input.attrs({ type: 'submit' })`
    width: 9rem;
    outline:none;
    border: none;
    padding: 1rem 2rem;
    border-radius: 2rem;
    font-size: 1.1rem;
    text-align: center;
    background-color: green;
    cursor:pointer;
`;

const Cancelar = styled.button`
    width: 9rem;
    outline:none;
    border: none;
    padding: 1rem 2rem;
    border-radius: 2rem;
    font-size: 1.1rem;
    text-align: center;
    background-color: inherit;
    cursor:pointer;
`;

export { CreadorDeMarcador }