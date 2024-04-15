import { Input, Form } from 'antd';
import React from 'react'

const formatDate = (dateString) => {
    console.group("formatDate");
    console.log("fecha recibida en string: ", dateString);

    // Eliminar caracteres no numéricos y barras adicionales
    const cleanedDate = dateString.replace(/[^\d/]|(?<=\/.*)\//g, '');

    // Separar la fecha en día, mes y año
    const day = cleanedDate.substr(0, 2);
    const month = cleanedDate.substr(2, 2);
    const year = cleanedDate.substr(4, 4);

    // Formatear la fecha con guiones
    const formattedDate = `${day}-${month}-${year}`;

    console.log("fecha devuelta: ", formattedDate);
    console.groupEnd();
    return formattedDate;
};

export const InputFecha = ({ value, setValue }) => {

    const handleChange = (e) => {
        console.group("handleChange")
        let inputValue = e.target.value;
        let formattedDate = formatDate(inputValue);
        console.log("valor recibido: ", inputValue);
        console.log("valor formateado: ", formattedDate)
        setValue(formattedDate);
        console.log("valor seteado: ", value);
        console.groupEnd();
    };

    const validateDate = (rule, inputValue) => {
        console.group("validateDate");
        console.log("valor a validar: ", value);
        // Formatear la fecha
        let formattedDate = formatDate(value);

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
        const formattedDate = formatDate(value);
        console.group("validateDateRange");
        console.log("valor a validar: ", value);

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

    const getValue = () => {
        return value;
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
                <Input
                    key={1}
                    placeholder='DD-MM-YYYY'
                    onChange={handleChange}
                    id='fechaNacimiento'
                    type='text'
                    value={value}
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
