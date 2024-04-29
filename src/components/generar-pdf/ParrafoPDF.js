import React from 'react'

const preStyle = {
    width: "100%",
    fontSize: "1rem"
}

export const ParrafoPDF = ({text}) => {

    return (
        <pre
            style={preStyle}
        >
            {text}
        </pre>
    )
}
