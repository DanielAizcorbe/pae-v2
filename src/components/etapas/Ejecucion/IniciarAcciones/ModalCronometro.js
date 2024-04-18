import Modal from 'antd/es/modal/Modal'
import React from 'react'
import { Cronometro } from '../Cronometro'

export const ModalCronometro = ({open, tareaIniciada, closeModal, setMinutos}) => {
    return (
        <Modal
            footer={null}
            open={open}
            closable={false}
        >
            <Cronometro 
                tareaIniciada={tareaIniciada}
                cerrar={closeModal}
                setMinutos={setMinutos}
            />
        </Modal>
    )
}

