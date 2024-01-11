import React, { useState } from "react";
import { AvisoWarning } from "../avisos/AvisoWarning";
import "./busqueda-paciente.css";
import { ModalDatosPaciente } from "./ModalDatosPaciente";
import { useNavigate } from "react-router-dom";

const BusquedaPaciente = ({ seBuscoDocumentoInexistente }) => {

    const [modal, setModal] = useState(false);

    const openModal = () => {
        setModal(true);
    }

    const closeModal = () => {
        setModal(false);
    }

    const [mostrarAviso, setMostrarAviso] = useState(true);

    const closeAviso = () => {
        setMostrarAviso(false);
    }

    const navegar = useNavigate();

    const nextPage = () => {
        navegar("/evolucion");
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
                seBuscoDocumentoInexistente && mostrarAviso ?
                    <AvisoWarning closeAviso={closeAviso} text={"No hay ningún paciente registrado con ese documento"} />
                    : ""
            }
            {modal ? (
                <ModalDatosPaciente closeModal={closeModal} nextPage={nextPage}/>
            ) : ""}
        </div>
    );
}

export { BusquedaPaciente }