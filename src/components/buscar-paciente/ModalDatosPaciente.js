import React from "react";
import { VentanaModal, FilaDatoModal, TituloModal } from "../utils/VentanaModal";
import { BotonSiguiente } from "../botones/BotonSiguiente";
import { BotonVolver } from "../botones/BotonVolver";
import { BotonContainer, Columns } from "../utils/Containers";
import { ImportantText } from "../utils/Spans";
import { useSelector } from "react-redux";

const ModalDatosPaciente = ({ closeModal, nextPage }) => {

    const datosPaciente = useSelector((state) => state.paciente);

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
                        <ImportantText>Nombre:</ImportantText>{" " + datosPaciente.nombreCompleto}
                    </FilaDatoModal>
                    <FilaDatoModal>
                        <ImportantText>Nacimiento:</ImportantText>{" " + datosPaciente.fechaNacimiento}
                    </FilaDatoModal>
                    <FilaDatoModal>
                        <ImportantText>Documento:</ImportantText>{" " + datosPaciente.documento}
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