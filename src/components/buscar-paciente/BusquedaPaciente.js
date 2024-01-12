import React, { useState } from "react";
import { Columns, Rows } from "../utils/Containers";
import { InputNroDocumento } from "./InputNroDocumento";
import { BotonIcono } from "../botones/BotonIcono";
import { styled } from "styled-components";
import { Titulo } from "../utils/Titulo";
import { AvisoWarning } from "../avisos/AvisoWarning";
import { ModalDatosPaciente } from "./ModalDatosPaciente";

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

    return (
        <Columns
            elementPosition={"top-center"}
            height="100vh"
            width="100vw"
        >
            <Titulo
                texto="Evolución de pacientes"
            />
            <Rows
                elementPosition="center"
                height="30rem"
            >
                <InputNroDocumento />
                <BotonIcono onClick={openModal}>
                    <FlechaDerecha />
                </BotonIcono>
            </Rows>
            {
                seBuscoDocumentoInexistente && mostrarAviso ?
                    <AvisoWarning closeAviso={closeAviso} text={"No hay ningún paciente registrado con ese documento"} />
                    : ""
            }
            {modal ? (
                <ModalDatosPaciente closeModal={closeModal} nextPage={"/evolucion"} />
            ) : ""}
        </Columns>
    );
}

const FlechaDerecha = styled.div`
    width: 0;
    height: 0;
    border-top: 0.6rem solid transparent;
    border-bottom: 0.6rem solid transparent;
    border-left: 0.6rem solid var(--color-fondo);
`;

export { BusquedaPaciente }