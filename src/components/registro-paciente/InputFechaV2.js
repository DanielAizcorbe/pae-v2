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

export const InputFechaV2 = ({ value, setValue }) => {

    const handleChange = (e) => {
        const inputValue = e.target.value;
        const formattedValue = formatDate(inputValue);
        setValue(formattedValue);
    };

    return (
        <input
            type="text"
            value={value}
            onChange={handleChange}
            placeholder="DD-MM-YYYY"
            id='fechaNacimiento'
        />
    );
}
