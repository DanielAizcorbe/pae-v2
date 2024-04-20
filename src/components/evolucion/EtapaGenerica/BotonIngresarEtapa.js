import React from 'react'
import { Link } from 'react-router-dom';

const BotonIngresarEtapa = ({ nextPage, classes, bgColor, etapa, rotar }) => {
    return (
        <Link
            to={nextPage}
            className={'etapa ' + classes}
            style={{
                backgroundColor: bgColor
            }}
        >
            <p
                style={{
                    transform: (rotar ? "rotate(180deg)" : ""),
                }}
            >{etapa}</p>
        </Link>
    )
}

export default BotonIngresarEtapa
