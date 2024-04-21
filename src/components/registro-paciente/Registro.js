import React, { useState } from 'react'
import { Columns, ContentContainer } from '../utils/containers/Containers'
import Title from 'antd/es/typography/Title'

import InputNombre from './InputNombre'
import InputDocumento from './InputDocumento'
import BotonRegistrar from './BotonRegistrar'
import { InputFechaV2 } from './InputFechaV2'
import { useNavigate } from 'react-router-dom'
import { validarDocumento, validarFecha, validarNombre } from './validacionesFormRegistro'

const formStyle = {
    width: "700px",
    border: "1px solid black",
    padding: "3rem",
    borderRadius: "10px",
}

const registrarPaciente = (paciente) => {
    const { nombre, documento, fechaNacimiento } = paciente;

    console.log("paciente: ", paciente);
}

const Registro = () => {

    const [nombre, setNombre] = useState("");
    const [documento, setDocumento] = useState("");
    const [fechaNacimiento, setFechaNacimiento] = useState("");
    const [nombreError, setErrorNombre] = useState({});
    const [documentoError, setErrorDocumento] = useState({});
    const [fechaError, setErrorFecha] = useState({});

    const navegar = useNavigate();

    const onChangeName = (event) => {
        setNombre(event.target.value);
        setErrorNombre({});
    }

    const onChangeDocument = (event) => {
        setDocumento(event.target.value);
        setErrorDocumento({});
    }

    const onChangeBirthDay = (date) => {
        setFechaNacimiento(date);
        setErrorFecha({});
    }

    const losCamposSonValidos = () => {
        const errorFecha = validarFecha(fechaNacimiento);
        const errorNombre = validarNombre(nombre);
        const errorDocumento = validarDocumento(documento);

        if (
            Object.keys(errorFecha).length === 0 &&
            Object.keys(errorNombre).length === 0 &&
            Object.keys(errorDocumento).length === 0
        ) {
            return true;
        }

        setErrorDocumento(errorDocumento);
        setErrorFecha(errorFecha);
        setErrorNombre(errorNombre);
        return false;
    }

    const estaRegistrado = (datosPaciente) => {
        return true;
    }

    const informar = (informe) => {
        console.log(informe);
    }

    const continuar = () => {

        if (losCamposSonValidos()) {

            const datosPaciente = {
                nombre: nombre,
                documento: documento,
                fechaNacimiento: fechaNacimiento
            };

            if (estaRegistrado(datosPaciente)) {
                informar({ type: "warning", message: "El paciente ya está registrado" })
            } else {
                registrarPaciente(datosPaciente);
            }

            navegar("/");
        }
    }

    return (
        <ContentContainer>
            <Title level={1}>
                REGISTRAR PACIENTE
            </Title>
            <Columns
                elementPosition={"top-center"}
                padding={"3rem"}
                width="100%"
                height="100%"
            >
                <Columns
                    width="100%"
                    height="100%"
                    style={formStyle}
                    elementPosition="top-center"
                >
                    <InputNombre
                        nombre={nombre}
                        onChange={onChangeName}
                        error={nombreError}
                    />
                    <InputDocumento
                        documento={documento}
                        onChange={onChangeDocument}
                        error={documentoError}
                    />
                    <InputFechaV2
                        value={fechaNacimiento}
                        onChange={onChangeBirthDay}
                        error={fechaError}
                    />
                    <Columns
                        elementPosition={"bottom-center"}
                        width="100%"
                        height="100%"
                    >
                        <BotonRegistrar
                            onClick={continuar}
                        />
                    </Columns>
                </Columns>
            </Columns>
        </ContentContainer>
    )
}

export default Registro
