import React, { useState } from 'react'
import { Columns, ContentContainer } from '../utils/containers/Containers'
import Title from 'antd/es/typography/Title'

import FormularioRegistro from './FormularioRegistro'
import InputNombre from './InputNombre'
import InputDocumento from './InputDocumento'
import BotonRegistrar from './BotonRegistrar'
import { InputFechaV2 } from './InputFechaV2'
import { InputFecha } from "./InputFecha";


const Registro = () => {

    const [nombre, setNombre] = useState("");
    const [documento, setDocumento] = useState("");
    const [fechaNacimiento, setFechaNacimiento] = useState("");


    const onChangeName = (event) => {
        setNombre(event.target.value);
    }

    const onChangeDocument = (target) => {
        setDocumento(target.value);
    }

    const onChangeBirthDay = (date) => {
        setFechaNacimiento(date);
    }


    return (
        <ContentContainer>
            <Title level={1}>
                REGISTRAR PACIENTE
            </Title>
            <Columns
                elementPosition={"top-center"}
                padding={"3rem"}
            >
                <FormularioRegistro>
                    <InputNombre
                        nombre={nombre}
                        setNombre={onChangeName}
                    />
                    <InputDocumento
                        documento={documento}
                        setDocumento={onChangeDocument}
                    />
                    <InputFecha
                        value={fechaNacimiento}
                        setValue={onChangeBirthDay}
                    />
                    <Columns
                        elementPosition={"bottom-center"}
                        width="100%"
                        height="60px"
                    >
                        <BotonRegistrar />
                    </Columns>
                </FormularioRegistro>
            </Columns>
        </ContentContainer>
    )
}

export default Registro
