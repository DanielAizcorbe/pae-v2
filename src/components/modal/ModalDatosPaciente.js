import React from "react";
import { VentanaModal } from "./VentanaModal";


const ModalDatosPaciente = ({ closeModal}) => {
    return (
        <VentanaModal>
            <h2>Paciente</h2>
            <p>Nombre: JUAN CARLOS</p>
            <p>Apellidos: DEL CAMPO</p>
            <p>Documento: 11111111</p>
            <p>Fecha nacimiento: 12-08-1990</p>
            <div>
                <button onClick={closeModal}>
                    Volver
                </button>
                <button onClick={closeModal}>
                    Continuar
                </button>
            </div>
        </VentanaModal>
    );
}

export { ModalDatosPaciente }