import { Form } from 'antd';
import Input from 'antd/es/input/Input'
import React from 'react'

const InputDocumento = ({ setDocumento, documento }) => {
    return (
        <Form.Item
            label="Documento (sin puntos)"
            htmlFor='documento'
            rules={[
                {
                    required: true,
                    message: "Ingrese un documento"
                }
            ]}
            name="documento"
            validateTrigger="onSubmit"
        >
            <Input
                allowClear
                onChange={setDocumento}
                value={documento}
                id='documento'
            />
        </Form.Item>
    )
}

export default InputDocumento;
