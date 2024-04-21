import React, { useState } from "react";
import { Columns } from "../utils/containers/Containers";
import { InputNroDocumento } from "./InputNroDocumento";
import { AvisoWarning } from "../avisos/AvisoWarning";
import { ModalDatosPaciente } from "./ModalDatosPaciente";
import { useDispatch } from "react-redux";
import { evolucionar } from "../../store/slices/paciente";
import { Titulo } from "../utils/Titulos";
import { message } from "antd";

const BusquedaPaciente = () => {

    const dispatch = useDispatch();
    const [docBuscado, setDocBuscado] = useState("");
    const [mensajeMostrado, setMensajeMostrado] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const nombreCompleto = "JUAN PEREZ GONZALES CRUZ";
    const documento = "11111";
    const fechaNacimiento = "09-09-1990";

    const [messageApi, contextHolder] = message.useMessage();

    const mostrarAvisoDocNoIngresado = () => {
        if (!mensajeMostrado) {
            setMensajeMostrado(true);
            messageApi.open({
                type: 'warning',
                content: "Ingrese un documento",
                duration: 2,
                style: {
                    fontSize: "15px",
                    marginTop: "60px",
                },
                onClose: () => setMensajeMostrado(false)
            });
        }
    }

    const mostrarMensajeDocNoEncontrado = () => {
        if (!mensajeMostrado) {
            setMensajeMostrado(true);
            messageApi.open({
                type: 'error',
                content: "El documento " + docBuscado + " no se encuentra registrado",
                duration: 2,
                style: {
                    fontSize: "15px",
                    marginTop: "60px",
                },
                onClose: () => setMensajeMostrado(false)
            });
        }
    }

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



    const closeModal = () => {
        setShowModal(false);
    }

    const handleModalPaciente = () => {

        if (documento === docBuscado) {
            setShowModal(true);
            fetchDatosPaciente();
        } else if (docBuscado === "") {
            mostrarAvisoDocNoIngresado();
        } else {
            mostrarMensajeDocNoEncontrado()
        }
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
            <ModalDatosPaciente
                closeModal={closeModal}
                nextPage={"/evolucion"}
                openCondition={showModal}
            />
            {contextHolder}
        </Columns>
    );
}

export { BusquedaPaciente }