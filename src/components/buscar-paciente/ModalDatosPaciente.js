import React from "react";
import { VentanaModal, FilaDatoModal, TituloModal } from "../utils/VentanaModal";
import { BotonSiguiente } from "../botones/BotonSiguiente";
import { BotonVolver } from "../botones/BotonVolver";
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

export { ModalDatosPaciente }