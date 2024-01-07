import React from "react";
import { VentanaModal } from "../modal/VentanaModal";


const ModalDatosPaciente = ({ closeModal, nextPage }) => {
    return (
        <VentanaModal
            height={"30rem"}
            width={"30rem"}
            position={"center"}
        >
            <div className="datos-container">
                <h2>Paciente</h2>
                <p><span>Nombre:</span> JUAN CARLOS</p>
                <p><span>Apellidos:</span> DEL CAMPO</p>
                <p><span>Documento:</span> 11111111</p>
                <p><span>Fecha nacimiento:</span> 12-08-1990</p>
            </div>
            <div className="btn-container">
                <button className="btn-volver" onClick={closeModal}>
                    Volver
                </button>
                <button className="btn-continuar" onClick={nextPage}>
                    Continuar
                </button>
            </div>
        </VentanaModal>
    );
}

export { ModalDatosPaciente }