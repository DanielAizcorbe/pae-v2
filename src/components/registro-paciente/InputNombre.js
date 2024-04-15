import React from 'react'
import Input from 'antd/es/input/Input'
import { Form } from 'antd'



const InputNombre = ({ setNombre, nombre }) => {


    return (
        <Form.Item
            label="Nombre Completo"
            htmlFor='nombreCompleto'
            name='nombreCompleto'
            rules={[
                {
                    required: true,
                    message: "Ingrese un nombre"
                }
            ]}
            validateTrigger="onSubmit"
        >
            <Input
                allowClear
                onChange={setNombre}
                value={nombre}
                id="nombreCompleto"
            />
        </Form.Item>
    )
}

export default InputNombre;

