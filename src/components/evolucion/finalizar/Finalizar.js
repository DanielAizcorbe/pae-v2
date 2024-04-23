import { Button } from 'antd'
import React, { useState } from 'react'
import ModalFinalizar from './ModalFinalizar'

export const Finalizar = () => {

    const [mostrarModal, setMostrarModal] = useState(false);

    const closeModal = () => {
        setMostrarModal(false);
    }

    const openModal = () => {
        setMostrarModal(true);
    }

    return (
        <>
            <Button
                type="primary"
                size="large"
                onClick={openModal}
            >
                Finalizar
            </Button>
            <ModalFinalizar 
                mostrar={mostrarModal}
                closeModal={closeModal}
            />
        </>
    )
}
