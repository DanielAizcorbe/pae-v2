import Input from 'antd/es/input/Input'
import React from 'react'


const InputDocumento = ({ onChange, documento, error }) => {
    return (
        <label
            style={{ width: "100%" }}
            htmlFor='documento'
            name="fechaNacimiento"
        >
            <p>
                Documento
            </p>
            <Input
                allowClear
                onChange={onChange}
                value={documento}
                id='documento'
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

export default InputDocumento;
