import React from 'react'

const FilaModalPaciente = ({ children, title }) => {
    return (
        <p>
            <span
                style={{
                    fontWeight: "bold",
                }}
            >
                {title + ": "}
            </span>
            {children}
        </p>
    )
}

export default FilaModalPaciente
