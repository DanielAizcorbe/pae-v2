import { formatDatosPaciente, formatNombre } from "../registro-paciente/utilsRegistro";

const getNombreCompletoFormateado = (paciente) => {

    let pacienteFormateado = formatDatosPaciente(paciente);
    return `${pacienteFormateado.nombre}  ${pacienteFormateado.apellido}`
} 

const tieneNombreSimilar = (paciente, nombreBuscado) => {
    let nombreFormateado = formatNombre(nombreBuscado);

    if (nombreBuscado === "") {
        return false;
    }
    
    return getNombreCompletoFormateado(paciente).includes(nombreFormateado);

}

export { tieneNombreSimilar, getNombreCompletoFormateado}