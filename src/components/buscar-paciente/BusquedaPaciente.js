import React, { useState } from "react";
import { Columns } from "../utils/containers/Containers";
import { InputNroDocumento } from "./InputNroDocumento";
import { AvisoWarning } from "../avisos/AvisoWarning";
import { ModalDatosPaciente } from "./ModalDatosPaciente";
import { useDispatch } from "react-redux";
import { evolucionar } from "../../store/slices/paciente";
import { Titulo } from "../utils/Titulos";

const BusquedaPaciente = () => {

    const dispatch = useDispatch();
    const [docBuscado, setDocBuscado] = useState("");
    const [errorDocBuscado, setErrorDocBuscado] = useState("");

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
            setErrorDocBuscado(docBuscado);
            setMostrarAviso(true);
        }
    }

    const setMensajeSegun = (errorDocBuscado) => {
        return (errorDocBuscado === "" ? "ingrese un documento" : "No hay ningún paciente registrado con el documento " + errorDocBuscado);
    }

    return (
        <Columns
            elementPosition={"center"}
            height="100vh"
            width="100vw"
            padding={"2rem"}
        >
            <Titulo texto="Evolución de pacientes" />
            <InputNroDocumento
                onChange={(event) => setDocBuscado(event.target.value)}
                value={docBuscado}
                onSearch={handleModalPaciente}
            />
            <AvisoWarning
                closeAviso={closeAviso}
                mensaje={setMensajeSegun(errorDocBuscado)}
                esVisible={mostrarAviso}
            />
            <ModalDatosPaciente
                closeModal={closeModal}
                nextPage={"/evolucion"}
                openCondition={showModal}
            />
        </Columns>
    );
}

export { BusquedaPaciente }