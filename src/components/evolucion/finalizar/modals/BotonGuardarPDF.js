import { Button } from 'antd'
import React from 'react'
import { generarPDF } from '../../../generar-pdf/generarPDF'

export const BotonGuardarPDF = ({ paciente, pdfRef }) => {

    return (
        <Button
            type='primary'
            size='large'
            onClick={generarPDF}
        >
            Guardar
        </Button>
    )
}
