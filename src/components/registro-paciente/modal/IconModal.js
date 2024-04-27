import React from 'react'
import { ERROR, SUCCED, WARNING } from '../utilsRegistro'
import { AMARILLO, AZUL_PRIMARIO } from '../../datos/colores';
import { WarningOutlined, CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

const fontSize = "2rem"

const succedStyle = {
    color: AZUL_PRIMARIO,
    fontSize: fontSize,
}

const warningStyle = {
    color: AMARILLO,
    fontSize: fontSize,
}

const errorStyle = {
    color: AZUL_PRIMARIO,
    fontSize: fontSize,
}

const getIcon = (status) => {

    switch (status) {
        case SUCCED: return <CheckCircleOutlined style={succedStyle} />;
        case ERROR: return <CloseCircleOutlined style={errorStyle} />;
        case WARNING: return <WarningOutlined style={warningStyle} />;
        default: return "";
    }
}

const IconModal = ({ statusType }) => {
    return (
        <>
            {getIcon(statusType)}
        </>

    )
}

export default IconModal
