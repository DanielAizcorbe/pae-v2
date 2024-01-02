import React from "react";
import { VentanaModal } from "../modal/VentanaModal";


const ModalDatosPaciente = ({ closeModal }) => {
    return (
        <VentanaModal classes={"datos-container"}>
            <h2>Paciente</h2>
            <p><span>Nombre:</span> JUAN CARLOS</p>
            <p><span>Apellidos:</span> DEL CAMPO</p>
            <p><span>Documento:</span> 11111111</p>
            <p><span>Fecha nacimiento:</span> 12-08-1990</p>
            <div className="btn-container">
                <button className="btn-volver" onClick={closeModal}>
                    Volver
                </button>
                <button className="btn-continuar"onClick={closeModal}>
                    Continuar
                </button>
            </div>
        </VentanaModal>
    );
}

export { ModalDatosPaciente }