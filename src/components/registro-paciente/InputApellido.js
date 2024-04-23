import Input from 'antd/es/input/Input'
import React from 'react'


const InputApellido = ({ onChange, apellido, error }) => {
    return (
        <label
            style={{ width: "100%" }}
            htmlFor='apellido'
            name="apellido"
        >
            <p>
                Apellido
            </p>
            <Input
                allowClear
                onChange={onChange}
                value={apellido}
                id='apellido'
                autoComplete='off'
            />
            {
                Object.keys(error).length > 0 && error.message ?
                    <p style={{ color: "red", margin: "0" }}>
                        {error.message}
                    </p> : ""
            }
        </label>
    )
}

export default InputApellido;
