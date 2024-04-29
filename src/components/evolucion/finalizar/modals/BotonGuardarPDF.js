import { Button } from 'antd'
import React from 'react'

export const BotonGuardarPDF = ({ paciente }) => {

    const convertToPDF = () => {
    };

    return (
        <Button
            type='primary'
            size='large'
            onClick={convertToPDF}
        >
            Guardar
        </Button>
    )
}
