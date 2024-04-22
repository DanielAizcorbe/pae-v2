import React, { useState } from 'react'
import { ModalGuardarPDF } from './ModalGuardarPDF';
import { Button } from 'antd';

const GuardarPDF = () => {

    const [mostrarModalGuardado, setMostrarModalGuardado] = useState(false);

    const handleOnClick = () => {
        setMostrarModalGuardado(true);
    }

    const closeModal = () => {
        setMostrarModalGuardado(false);
    }

    return (
        <>
            <Button
                type="primary"
                size="large"
                onClick={handleOnClick}
            >
                Guardar PDF
            </Button>
            <ModalGuardarPDF 
                closeModal={closeModal}
                showModal={mostrarModalGuardado}
            />
        </>
    )
}

export default GuardarPDF
