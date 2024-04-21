import { Button } from 'antd'
import React from 'react'

const BotonRegistrar = ({ onClick }) => {
    return (
        <Button
            type='primary'
            htmlType="submit"
            size='large'
            onClick={onClick}
        >
            Registrar
        </Button>
    )
}

export default BotonRegistrar
