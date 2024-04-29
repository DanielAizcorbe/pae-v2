import TextArea from 'antd/es/input/TextArea';
import React from 'react'
import "./textarea-copyable.css"

export const ParrafoEditable = ({ editableText, setEditableText }) => {

    const textAreaStyle = {
        resize: "none",
    }

    const handleChange = (event) => {
        setEditableText(event.target.value)
    }

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                alert('¡Texto copiado al portapapeles!');
            })
            .catch((err) => {
                console.error('Error al copiar al portapapeles:', err);
            });
    };

    return (
        <TextArea
            style={textAreaStyle}
            autoSize={{
                minRows: 10,
                maxRows: 20
            }}
            className="copyable"
            value={editableText}
            onChange={handleChange}
        />
    )
}
