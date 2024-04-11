import React, { useState } from 'react'
import { Columns } from '../utils/Containers'
import Title from 'antd/es/typography/Title'
import { Button, Form } from 'antd'
import Input from 'antd/es/input/Input'
import { InputFecha } from './InputFecha'
import FormularioRegistro from './FormularioRegistro'



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
                    <Form.Item label="Nombre Completo" htmlFor='nombre-completo' required>
                        <Input
                            allowClear
                            onChange={onChangeName}
                            value={nombre}
                            id="nombre-completo"
                        />
                    </Form.Item>
                    <Form.Item label="Documento (sin puntos)" htmlFor='documento' required>
                        <Input
                            allowClear
                            onChange={onChangeDocument}
                            value={documento}
                            id='documento'
                        />
                    </Form.Item>
                    <Form.Item label="Fecha de nacimiento">
                        <InputFecha
                            value={fechaNacimiento}
                            setValue={onChangeBirthDay}
                        />
                    </Form.Item>
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
