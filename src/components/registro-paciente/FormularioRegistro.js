import Form from 'antd/es/form/Form'
import React from 'react'

const FormularioRegistro = ({children}) => {

    const formStyle = {
        width: "700px",
        border: "1px solid black",
        padding: "3rem",
        borderRadius: "10px",
        backgroundColor: "lightblue",
        
    };

    return (
        <Form
            variant='outlined'
            layout='vertical'
            size='middle'
            requiredMark="default"
            style={formStyle}
        >
            {children}
        </Form>
    )
}

export default FormularioRegistro
