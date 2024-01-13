import React from "react";
import { FilaDatoModal, TituloModal, VentanaModal } from "../utils/VentanaModal";
import { BotonVolver } from "../botones/BotonVolver";
import { ImportantText } from "../utils/Spans";
import { Columns } from "../utils/Containers";
import { styled } from "styled-components";

const ModalEvolucionAnterior = ({ evolucionSeleccionada, closeModal }) => {

    const evolucionFalsa = "Labore laborum sit irure sint duis ea nostrud magna in do fugiat ut cillum. Sit ad ad eu eiusmod est commodo laborum aute nisi. Mollit ipsum nostrud veniam mollit in nulla fugiat sint aliqua eu.\n\n" +
        "Consectetur cillum velit nostrud in ipsum labore fugiat aliquip nisi Lorem adipisicing minim. Ut reprehenderit ad quis eiusmod anim tempor amet sunt exercitation amet ullamco in cillum quis. Eiusmod tempor exercitation exercitation cillum magna sint velit velit id incididunt laborum occaecat reprehenderit eiusmod.\n\n" +

        "Deserunt ea ad enim irure aliquip laborum sunt proident esse minim. Aliqua elit sit culpa non laborum id esse tempor sit reprehenderit. Ut magna quis consectetur in. Cillum voluptate voluptate laborum eu ut occaecat. Minim reprehenderit reprehenderit labore magna mollit qui nulla fugiat officia voluptate."

    return (
        <VentanaModal
            position={"center"}
            width="40rem"
            height="45rem"
        >
            <TituloModal>
                {"Evolución"}
            </TituloModal>
            <Columns
                elementPosition="top-center"
                height="100%"
            >
                <FilaDatoModal>
                    <ImportantText>{"Fecha:"}</ImportantText> {" " + evolucionSeleccionada.hora + " - " + evolucionSeleccionada.fecha}
                </FilaDatoModal>
                <FilaDatoModal>
                    <ImportantText>{"Sector:"}</ImportantText>{" " + evolucionSeleccionada.sector}
                </FilaDatoModal>
                <TextoEvolucionAnterior
                    readOnly
                    value={evolucionFalsa}
                />
                <BotonVolver
                    onClick={closeModal}
                />
            </Columns>

        </VentanaModal>
    );
}

const TextoEvolucionAnterior = styled.textarea`
    padding: 1.7rem 2rem;
    border-radius: 2rem;
    background-color: white;
    font-size: 1.1rem;
    resize: none;
    outline: none;
    width: 100%;
    height: 100%;
    max-height: 450px;
    border: 2px solid white;

    &::selection {
        background-color: white;
    }

    &:focus {
        border: 2px solid var(--fondo-resaltado);
        transition: border 100ms linear;
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--fondo-resaltado);
        border-radius: 1rem;
        opacity: 0;
    }

    &::-webkit-scrollbar {
        width: 0.3rem;
    }
`;

export { ModalEvolucionAnterior }