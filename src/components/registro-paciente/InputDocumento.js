import { Form } from 'antd';
import Input from 'antd/es/input/Input'
import React from 'react'

const InputDocumento = ({setDocumento, documento}) => {
    return (
        <Form.Item label="Documento (sin puntos)" htmlFor='documento' required>
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
