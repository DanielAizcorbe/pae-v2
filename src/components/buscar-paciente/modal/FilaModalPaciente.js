import React from 'react'
import { AZUL_PROFUNDO } from '../../datos/colores'

const FilaModalPaciente = ({ children, title }) => {
    return (
        <p>
            <span
                style={{
                    fontWeight: "bold",
                    color: AZUL_PROFUNDO,
                }}
            >
                {title + ": "}
            </span>
            {children}
        </p>
    )
}

export default FilaModalPaciente
