import { Button, Modal } from 'antd'
import React from 'react'
import { Columns } from '../utils/containers/Containers'
import Paragraph from 'antd/es/typography/Paragraph'
import { Link } from 'react-router-dom'

const ModalConfirmarFinalizar = ({ open, closeModal }) => {

    return (
        <Modal
            open={open}
            mask
            maskClosable
            centered
            onCancel={closeModal}
            closable
            footer={null}
        >
            <Columns
                padding="0.5rem 0.5rem 0"
            >
                <Paragraph
                    strong
                    style={{
                        padding: "10px 0",
                        margin: 0
                    }}
                >
                    Ya no podrá volver a editar las etapas, ¿desea continuar?
                </Paragraph>
                <Link
                    to={"/evolucion/finalizar"}
                >
                    <Button
                        type='primary'
                        size='large'
                    >
                        Continuar
                    </Button>
                </Link>
            </Columns>
        </Modal>
    )
}

export default ModalConfirmarFinalizar
