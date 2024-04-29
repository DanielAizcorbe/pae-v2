import { Button, Modal, message } from 'antd'
import React, { useState } from 'react'
import { Columns } from '../../../utils/containers/Containers'
import { ParrafoEditable } from './ParrafoEditable'
import { copyToClipboard } from './copyToClipboard'

const containerStyle = {
    minHeight: "400px",
}


const ModalCopiar = ({ open, value, close }) => {

    const [editableText, setEditableText] = useState(value);
    const [messageApi, contextHolder] = message.useMessage();

    const informarError = () => {
        messageApi.error("¡Ups! no se pudo copiar ☹", 3)
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
        >
            <Columns
                padding="1.5rem 1rem"
                elementPosition="top-center"
                width="100%"
            >
                <ParrafoEditable
                    editableText={editableText}
                    setEditableText={setEditableText}
                />
            </Columns>
            <Button onClick={copiar}>
                copiar
            </Button>
            {contextHolder}
        </Modal>
    )
}

export default ModalCopiar
