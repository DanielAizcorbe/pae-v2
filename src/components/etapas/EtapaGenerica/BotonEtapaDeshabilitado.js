import React from 'react'
import { GRIS_AZULADO } from '../../datos/colores'

export const BotonEtapaDeshabilitado = ({ classes, openMessage, rotar, etapa }) => {
    return (
        <div
            className={'etapa ' + classes}
            onClick={openMessage}
            style={{
                backgroundColor: GRIS_AZULADO,
            }}
        >
            <p
                style={{
                    transform: (rotar ? "rotate(180deg)" : ""),
                }}
            >{etapa}</p>
        </div>
    )
}
