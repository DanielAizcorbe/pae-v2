import { Button, Modal, message } from 'antd'
import React, { useState } from 'react'
import { Rows, Columns } from '../../../utils/containers/Containers'
import { ParrafoEditable } from './ParrafoEditable'
import { copyToClipboard } from './copyToClipboard'

const containerStyle = {
    minHeight: "400px",
}


const ModalCopiar = ({ open, value, close }) => {

    const [editableText, setEditableText] = useState(value);
    const [messageApi, contextHolder] = message.useMessage();

    const informarError = () => {
        messageApi.error("¡Ups! no se pudo copiar ☹, intentelo manualmente", 3)
    }

    const informarSuccess = () => {
        messageApi.success("¡Copiado!", 3)
    }

    const copiar = () => {
        copyToClipboard(editableText, informarSuccess, informarError);
    }
    return (
        <Modal
            open={open}
            footer={[]}
            style={containerStyle}
            centered
            closable
            maskClosable={false}
            onCancel={close}
            width={"60%"}
            destroyOnClose
        >
            <Columns
                padding="1.5rem 1rem 0 1rem"
                elementPosition="top-center"
                width="100%"
            >
                <ParrafoEditable
                    editableText={editableText}
                    setEditableText={setEditableText}
                />
                <Rows
                    height="60px"
                    width="50%"
                    elementPosition="bottom-center"
                    style={{}}
                >
                    <Button
                        size='large'
                        type='text'
                        style={{ width: "8rem" }}
                        onClick={() => setEditableText(value)}
                    >
                        restaurar
                    </Button>
                    <Button
                        size='large'
                        type='primary'
                        onClick={copiar}
                        style={{ width: "8rem" }}
                    >
                        copiar
                    </Button>
                </Rows>
            </Columns>
            {contextHolder}
        </Modal>
    )
}

export default ModalCopiar
