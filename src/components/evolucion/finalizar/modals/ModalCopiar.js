import { Button, Modal } from 'antd'
import React, { useState } from 'react'
import { Columns } from '../../../utils/containers/Containers'
import { ParrafoEditable } from './ParrafoEditable'
import { copyToClipboard } from './copyToClipboard'

const containerStyle = {
    minHeight: "400px",
}


const ModalCopiar = ({ open, value }) => {

    const [editableText, setEditableText] = useState(value);

    /**
     * ! No implementado
     */
    const informarError = () => { }
    /**
     * ! No implementado
     */
    const informarSuccess = () => { }

    const copiar = () => {
        copyToClipboard(editableText, informarSuccess, informarError);
    }
    return (
        <Modal
            open={open}
            footer={[]}
            style={containerStyle}
            centered
        >
            <Columns
                padding="1.5rem 1rem"
                elementPosition="top-center"
            >
                <ParrafoEditable
                    editableText={editableText}
                    setEditableText={setEditableText}
                />
            </Columns>
            <Button onClick={copiar}>
                copiar
            </Button>
        </Modal>
    )
}

export default ModalCopiar
