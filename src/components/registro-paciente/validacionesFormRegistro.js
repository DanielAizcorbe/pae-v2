const validarFecha = (fecha) => {
    // Verificar si la fecha no está vacía
    if (!fecha.trim()) {
        return {
            message: "Ingrese una fecha"
        };
    }

    console.log("se ingreso una fecha");
    const formatoFechaRegex = /^\d{2}-\d{2}-\d{4}$/;

    if (!formatoFechaRegex.test(fecha)) {
        return {
            message: "Ingrese una fecha válida"
        }
    }

    const partesFecha = fecha.split("-");
    const dia = parseInt(partesFecha[0]);
    const mes = parseInt(partesFecha[1]) - 1; // Se resta 1 porque los meses en JavaScript van de 0 a 11
    const año = parseInt(partesFecha[2]);

    console.log(dia, mes, año);

    if (isNaN(dia) || isNaN(mes) || isNaN(año) ||
        dia < 1 || dia > 31 || mes < 0 || mes > 11 || año < 1000 || año > 9999) {
        return {
            message: "Ingrese una fecha válida"
        };
    }

    const fechaIngresada = new Date(año, mes, dia);
    const fechaActual = new Date();
    fechaActual.setHours(0, 0, 0, 0);

    if (fechaIngresada > fechaActual) {
        return { message: "La fecha debe ser anterior al día de hoy" };
    }

    return {};
};

const validarNombre = (nombre) => {

    if (nombre === "") {
        return {
            message: "Ingrese el nombre del paciente"
        }
    }

    return {};
}

const validarApellido = (string) => {

    if (string === "") {
        return {
            message: "Ingrese el apellido del paciente"
        }
    }

    return {};
}

export { validarApellido, validarNombre, validarFecha }