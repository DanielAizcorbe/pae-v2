import { Input } from 'antd';
import React from 'react'
import { formatDate } from './formatDate';


const InputFecha = ({ value, onChange, error }) => {

    const handleChange = (e) => {
        const inputValue = e.target.value;
        const formattedValue = formatDate(inputValue);
        onChange(formattedValue);
    };

    return (
        <label
            htmlFor='fechaNacimiento'
            style={{ width: "100%" }}
            name="fechaNacimiento"
        >
            <p>
                Fecha nacimiento
            </p>
            <Input
                value={value}
                onChange={handleChange}
                placeholder="DD-MM-YYYY"
                id='fechaNacimiento'
                autoComplete='off'
                name="fechaNacimiento"
                allowClear
            />
            {
                error !== {} ?
                    <p style={{ color: "red", margin: "0" }}>
                        {error.message}
                    </p> : ""
            }
        </label>
    );
}

export default InputFecha