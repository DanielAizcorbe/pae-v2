import { Input, Form } from 'antd';
import React, { useState } from 'react'

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

    let formattedDate = `${day}${month}${year}`;
    console.log(formattedDate);
    return formattedDate;
};

export const InputFecha = ({ value, setValue }) => {

    const [newValue, setNewValue] = useState(value);

    const handleChange = (e) => {
        const inputValue = e.target.value;
        const formattedValue = formatDate(inputValue);
        setValue(formattedValue);
    };

    const validateDate = (rule, inputValue) => {
        console.group("validateDate");
        console.log("valor a validar: ", inputValue);
        // Formatear la fecha
        let formattedDate = formatDate(inputValue);

        // Expresión regular para validar el formato de fecha (DD/MM/AAAA)
        let dateRegex = /^\d{2}\-\d{2}\-\d{4}$/;

        if (formattedDate && !dateRegex.test(formattedDate)) {
            console.log("formato no valido");
            return Promise.reject('La fecha ingresada no es válida');
        }
        console.log("formato valido");
        console.groupEnd();
        return Promise.resolve();

    };

    const validateDateRange = (rule, inputValue) => {
        // Formatear la fecha
        const formattedDate = formatDate(inputValue);
        console.group("validateDateRange");
        console.log("valor a validar: ", inputValue);

        if (formattedDate) {
            const [day, month, year] = formattedDate.split('-');
            console.log("Fecha spliteada: ", day, month, year);
            const enteredDate = new Date(`${year}-${month}-${day}`);
            console.log("Fecha armada: ", enteredDate);
            const currentDate = new Date();
            console.log("fecha actual: ", currentDate);
            if (formattedDate.length !== 10 || enteredDate.toString() === "Invalid Date" || enteredDate > currentDate) {
                console.log("fecha pasada de rango")
                console.groupEnd();
                return Promise.reject('La fecha no puede ser posterior a la fecha actual');
            }
        }
        console.log("fecha correcta");
        console.groupEnd();
        return Promise.resolve();
    };

    const fechaNoVacia = (rule, inputValue) => {
        return value === "" ? Promise.reject() : Promise.resolve();
    }

    return (
        <div>
            <Form.Item
                label="Fecha de nacimiento"
                htmlFor="fechaNacimiento"
                name="fechaNacimiento"
                required
                rules={
                    [
                        {
                            validator: fechaNoVacia,
                            message: "Ingrese la fecha de nacimiento"
                        },
                        {
                            validator: validateDate,
                            message: "La fecha ingresada no es válida"
                        },
                        {
                            validator: validateDateRange,
                            message: 'La fecha no puede ser posterior a la fecha actual'
                        }
                    ]
                }
                validateTrigger="onSubmit"
                valuePropName="value"
            >
                
                <input
                    type="text"
                    value={value}
                    onChange={handleChange}
                    placeholder="DD-MM-YYYY"
                    id='fechaNacimiento'
                />
            </Form.Item>
            <p style={{
                display: "block"
            }}>
                {value}
            </p>
        </div>
    )
}
