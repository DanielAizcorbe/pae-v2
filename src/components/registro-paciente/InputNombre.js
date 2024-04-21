import React from 'react'
import Input from 'antd/es/input/Input'



const InputNombre = ({ onChange, nombre, error }) => {


    return (
        <label
            htmlFor='nombreCompleto'
            name='nombreCompleto'
            style={{ width: "100%" }}
        >
            <p>Nombre completo</p>
            <Input
                allowClear
                onChange={onChange}
                value={nombre}
                id="nombreCompleto"
                autoComplete='off'
            />
            {
                error !== {} ?
                    <p style={{ color: "red", margin: "0" }}>
                        {error.message}
                    </p> : ""
            }
        </label>
    )
}

export default InputNombre;

