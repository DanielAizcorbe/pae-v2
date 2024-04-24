import React, { useState } from 'react'
import { Columns, ContentContainer } from '../utils/containers/Containers'
import Title from 'antd/es/typography/Title'

import InputNombre from './InputNombre'
import InputApellido from './InputApellido'
import BotonRegistrar from './BotonRegistrar'
import { InputFechaV2 } from './InputFechaV2'
import { useNavigate } from 'react-router-dom'
import { validarApellido, validarFecha, validarNombre } from './validacionesFormRegistro'
import { AZUL_PRIMARIO } from '../datos/colores'

const formStyle = {
    width: "600px",
    border: "1px solid " + AZUL_PRIMARIO,
    padding: "2rem",
    borderRadius: "10px",
}

const registrarPaciente = (paciente) => {
    const { nombre, apellido, fechaNacimiento } = paciente;

}

const Registro = () => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [fechaNacimiento, setFechaNacimiento] = useState("");
    const [nombreError, setErrorNombre] = useState({});
    const [apellidoError, setErrorApellido] = useState({});
    const [fechaError, setErrorFecha] = useState({});

    const navegar = useNavigate();

    const onChangeName = (event) => {
        setNombre(event.target.value);
        setErrorNombre({});
    }

    const onChangeSurname = (event) => {
        setApellido(event.target.value);
        setErrorApellido({});
    }

    const onChangeBirthDay = (date) => {
        setFechaNacimiento(date);
        setErrorFecha({});
    }

    const losCamposSonValidos = () => {
        const errorFecha = validarFecha(fechaNacimiento);
        const errorNombre = validarNombre(nombre);
        const errorApellido = validarApellido(apellido);

        if (
            Object.keys(errorFecha).length === 0 &&
            Object.keys(errorNombre).length === 0 &&
            Object.keys(errorApellido).length === 0
        ) {
            return true;
        }

        setErrorApellido(errorApellido);
        setErrorFecha(errorFecha);
        setErrorNombre(errorNombre);
        return false;
    }

    const estaRegistrado = (datosPaciente) => {
        return true;
    }

    const informar = (informe) => {
    }

    const continuar = () => {

        if (losCamposSonValidos()) {

            const datosPaciente = {
                nombre: nombre,
                apellido: apellido,
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
                    <InputApellido
                        apellido={apellido}
                        onChange={onChangeSurname}
                        error={apellidoError}
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
