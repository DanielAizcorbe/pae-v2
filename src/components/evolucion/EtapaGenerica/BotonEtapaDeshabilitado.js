import React from 'react'

export const BotonEtapaDeshabilitado = ({ classes, openMessage, rotar, etapa}) => {
    return (
        <div
            className={'etapa ' + classes}
            onClick={openMessage}
            style={{
                backgroundColor: "gray",
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
