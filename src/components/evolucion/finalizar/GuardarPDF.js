import React, { useState } from 'react'
import { ModalGuardarPDF } from './modals/ModalGuardarPDF';
import { Button } from 'antd';

const GuardarPDF = ({textoEtapas, paciente}) => {

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
                textoEtapas={textoEtapas}
                paciente={paciente}
            />
        </>
    )
}

export default GuardarPDF
