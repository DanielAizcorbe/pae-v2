import { Button, Form } from 'antd'
import React from 'react'

const BotonRegistrar = () => {
    return (
        <Form.Item>
            <Button
                type='primary'
                htmlType="submit"
            >
                Registrar
            </Button>
        </Form.Item>
    )
}

export default BotonRegistrar
