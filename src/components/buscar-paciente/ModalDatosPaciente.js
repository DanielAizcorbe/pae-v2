import React from "react";
import { VentanaModal } from "../utils/VentanaModal";
import { BotonSiguiente } from "../botones/BotonSiguiente";
import { BotonVolver } from "../botones/BotonVolver";
import { styled } from "styled-components";
import { BotonContainer, Columns } from "../utils/Containers";
import { ImportantText } from "../utils/Spans";


const ModalDatosPaciente = ({ closeModal, nextPage }) => {

    const persona = {
        nombre: "JUAN CARLOS DEL CAMPO",
        documento: "11111111",
        fechaNacimiento: "12-08-1990"
    };

    return (
        <VentanaModal
            position={"center"}
            height="35rem"
            width="35rem"
        >
            <Columns
                elementPosition="top-left"
            >
                <TituloModal>
                    Paciente
                </TituloModal>
                <Columns>
                    <FilaDatoModal>
                        <ImportantText>Nombre:</ImportantText>{" " + persona.nombre}
                    </FilaDatoModal>
                    <FilaDatoModal>
                        <ImportantText>Nacimiento:</ImportantText>{" " + persona.fechaNacimiento}
                    </FilaDatoModal>
                    <FilaDatoModal>
                        <ImportantText>Documento:</ImportantText>{" " + persona.documento}
                    </FilaDatoModal>
                </Columns>
                <BotonContainer>
                    <BotonVolver
                        onClick={closeModal}
                    />
                    <BotonSiguiente
                        text={"Continuar"}
                        nextPage={nextPage}
                    />
                </BotonContainer>
            </Columns>
        </VentanaModal>
    );
}

const TituloModal = styled.h2`
    font-size: 2.2rem;
    margin: 0;
`;

const FilaDatoModal = styled.div`
    width: 100%;
    font-style: italic;
    padding: 1rem 0.8rem;
`;
export { ModalDatosPaciente }