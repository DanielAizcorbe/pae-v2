import React, { useState } from 'react'
import { Columns, ContentContainer } from '../utils/containers/Containers'
import Title from 'antd/es/typography/Title'

import InputNombre from './inputs/InputNombre'
import InputApellido from './inputs/InputApellido'
import BotonRegistrar from './BotonRegistrar'
import InputFecha from './inputs/InputFecha'
import { useNavigate } from 'react-router-dom'
import { validarApellido, validarFecha, validarNombre } from './inputs/validacionesFormRegistro'
import { AZUL_PRIMARIO } from '../datos/colores'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import registrar from "../../store/slices/pacientesRegistrados";
import { ModalAvisoRegistro } from './modal/ModalAvisoRegistro'
import { WARNING, formatDatosPaciente, mensajePacienteRegistrado } from './utilsRegistro'

const formStyle = {
    width: "600px",
    border: "1px solid " + AZUL_PRIMARIO,
    padding: "2rem",
    borderRadius: "10px",
}

const Registro = () => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [fechaNacimiento, setFechaNacimiento] = useState("");
    const [nombreError, setErrorNombre] = useState({});
    const [apellidoError, setErrorApellido] = useState({});
    const [fechaError, setErrorFecha] = useState({});
    const [showModal, setShowModal] = useState(false);

    /**
     * * El error tiene las keys
     * * type : que refiere si fue un warning o un error,
     */
    const [status, setStatus] = useState({});

    const registrados = useSelector(state => state.pacientesRegistrados)
    const dispatch = useDispatch();
    const navegar = useNavigate();

    const registrarPaciente = (paciente) => {
        dispatch(registrar(formatDatosPaciente(paciente)))
    }

    const estaRegistrado = (datosPaciente) => {

        let datosPacienteFormateados = formatDatosPaciente(datosPaciente)
        return registrados.includes(datosPacienteFormateados);
    }

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

    const continuar = () => {

        if (losCamposSonValidos()) {

            const datosPaciente = {
                nombre: nombre,
                apellido: apellido,
                fechaNac: fechaNacimiento
            };

            if (estaRegistrado(datosPaciente)) {
                setShowModal(true);
                setStatus(
                    {
                        type: WARNING,
                        message: mensajePacienteRegistrado(datosPaciente)
                    }
                );
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
                    <InputFecha
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
                    <ModalAvisoRegistro
                        open={showModal}
                        status={status}
                    />
                </Columns>
            </Columns>
        </ContentContainer>
    )
}

export default Registro
