import React from 'react'
import Input from 'antd/es/input/Input'
import { Form } from 'antd'


const InputNombre = ({ setNombre, nombre }) => {
    return (
        <Form.Item label="Nombre Completo" htmlFor='nombre-completo' required>
            <Input
                allowClear
                onChange={setNombre}
                value={nombre}
                id="nombre-completo"
            />
        </Form.Item>
    )
}

export default InputNombre;

