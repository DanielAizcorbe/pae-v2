import React, { useState } from 'react'
import { Columns } from '../utils/Containers'
import Title from 'antd/es/typography/Title'
import { Button } from 'antd'
import { InputFecha } from './InputFecha'

import FormularioRegistro from './FormularioRegistro'
import InputNombre from './InputNombre'
import InputDocumento from './InputDocumento'




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
        <Columns
            elementPosition={"top-center"}
        >
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
                        elementPosition={"center"}
                        width={"100%"}
                        height={"auto"}
                        padding={"1rem 0 0"}
                    >
                        <Button type='primary'>
                            Registrar
                        </Button>
                    </Columns>
                </FormularioRegistro>
            </Columns>
        </Columns>
    )
}

export default Registro
