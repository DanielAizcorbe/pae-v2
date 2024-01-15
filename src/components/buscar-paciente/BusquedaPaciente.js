import React, { useState } from "react";
import { Columns, Rows } from "../utils/Containers";
import { InputNroDocumento } from "./InputNroDocumento";
import { BotonIcono } from "../botones/BotonIcono";
import { styled } from "styled-components";
import { Titulo } from "../utils/Titulos";
import { AvisoWarning } from "../avisos/AvisoWarning";
import { ModalDatosPaciente } from "./ModalDatosPaciente";
import { useDispatch } from "react-redux";
import { evolucionar } from "../../store/slices/paciente";

const BusquedaPaciente = () => {

    const dispatch = useDispatch();
    const [docBuscado, setDocBuscado] = useState("");

    const nombreCompleto = "JUAN PEREZ GONZALES CRUZ";
    const documento = "11111";
    const fechaNacimiento = "09-09-1990";

    const fetchDatosPaciente = () => {
        dispatch(
            evolucionar(
                {
                    nombreCompleto: nombreCompleto,
                    fechaNacimiento: fechaNacimiento,
                    documento: documento
                }
            )
        );
    }

    const [showModal, setShowModal] = useState(false);

    const closeModal = () => {
        setShowModal(false);
    }

    const [mostrarAviso, setMostrarAviso] = useState(false);

    const closeAviso = () => {
        setMostrarAviso(false);
    }

    const handleModalPaciente = () => {

        if (documento === docBuscado) {
            setShowModal(true);
            fetchDatosPaciente();
        } else {
            setMostrarAviso(true);
        }
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
                <InputNroDocumento
                    onChange={(event) => setDocBuscado(event.target.value)}
                    value={docBuscado}
                />
                <BotonIcono onClick={handleModalPaciente}>
                    <FlechaDerecha />
                </BotonIcono>
            </Rows>
            {
                mostrarAviso ?
                    <AvisoWarning closeAviso={closeAviso} text={"No hay ningún paciente registrado con el documento " + docBuscado} />
                    : ""
            }
            {showModal ? (
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