import { Form } from 'antd';
import Input from 'antd/es/input/Input';
import React from 'react'

export const InputFecha = ({ value, setValue }) => {

    const handleChange = (e) => {
        let inputDate = e.target.value;
        // Eliminar caracteres no numéricos
        inputDate = inputDate.replace(/\D/g, '');
        let formattedDate = '';

        if (inputDate.length <= 2) {
            // Si hay 2 o menos caracteres, simplemente almacenamos lo que se ha ingresado
            formattedDate = inputDate;
        } else if (inputDate.length <= 4) {
            // Si hay menos de 5 caracteres, formateamos como DD/MM
            formattedDate = `${inputDate.substr(0, 2)}/${inputDate.substr(2)}`;
        } else {
            // Si hay más de 4 caracteres, formateamos como DD/MM/YYYY
            formattedDate = `${inputDate.substr(0, 2)}/${inputDate.substr(2, 2)}/${inputDate.substr(4, 4)}`;
        }

        setValue(formattedDate);
    };

    return (
        <Form.Item label="Fecha de nacimiento" htmlFor="fecha-nacimiento" required>
            <Input
                placeholder='DD/MM/YYYY'
                value={value}
                onChange={handleChange}
                id='fecha-nacimiento'
            />
        </Form.Item>

    )
}
