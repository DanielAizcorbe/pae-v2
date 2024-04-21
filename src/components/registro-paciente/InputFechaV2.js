import { Input } from 'antd';
import React from 'react'

const formatDate = (inputValue) => {
    // Eliminar caracteres no numéricos
    const cleanedValue = inputValue.replace(/[^\d]/g, '');

    // Obtener día, mes y año
    let day = cleanedValue.substr(0, 2);
    let month = cleanedValue.substr(2, 2);
    let year = cleanedValue.substr(4, 4);

    // Formatear la fecha con guiones
    if (day.length === 2 && month.length >= 2) {
        day = day + '-';
        month = month.slice(0, 2) + '-';
    } else if (day.length === 2 && month.length < 2) {
        day = day + '-';
    }

    return `${day}${month}${year}`;
};

export const InputFechaV2 = ({ value, onChange, error }) => {

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
