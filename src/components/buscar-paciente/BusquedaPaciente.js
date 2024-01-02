import React, { useState } from "react";
import { AvisoWarning } from "../avisos/AvisoWarning";
import "./busqueda-paciente.css";
import { Overlay } from "../modal/Overlay";
import { ModalDatosPaciente } from "../modal/ModalDatosPaciente";

const BusquedaPaciente = ({ seBuscoDocumentoInexistente }) => {

    const [modal, setModal] = useState(false);

    const openModal = () => {
        setModal(true);
    }

    const closeModal = () => {
        setModal(false);
    }

    return (
        <div className="busqueda-container">
            <h1>Evolución de pacientes</h1>
            <div className="busqueda-paciente">
                <div className="container">
                    <label htmlFor="nro-documento">
                        <input
                            type="text"
                            name="nro-documento"
                            id="nro-documento"
                            autoComplete="off"
                            maxLength={30}
                            minLength={1}
                            spellCheck={false}
                            placeholder="Ingrese el documento del paciente"
                        />
                    </label>
                    <button onClick={openModal}>
                        <div className="flecha-derecha">

                        </div>
                    </button>
                </div>
            </div>
            {
                seBuscoDocumentoInexistente ?
                    <AvisoWarning text={"No hay ningún paciente registrado con ese documento"} />
                    : ""
            }
            {modal ? (
                <ModalDatosPaciente closeModal={closeModal} />
            ) : ""}
        </div>
    );
}

export { BusquedaPaciente }