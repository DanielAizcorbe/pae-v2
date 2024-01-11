const FISIOLOGICAS = "Fisiológicas";
const PREVENCION = "Prevención";
const COMUNICACION = "Comunicación";
const PSICOSOCIALES = "Psicosociales";
const EDUCACION = "Educación";

const diagnosticos = [
    { nombre: "Alteración del patrón respiratorio", id: 1, tipo: FISIOLOGICAS },
    { nombre: "Desequilibrio nutricional", id: 2, tipo: FISIOLOGICAS },
    { nombre: "Deterioro de la eliminación", id: 3, tipo: FISIOLOGICAS },
    { nombre: "Deterioro de la movilidad física", id: 4, tipo: FISIOLOGICAS },
    { nombre: "Trastornos del patrón del sueño", id: 5, tipo: FISIOLOGICAS },
    { nombre: "Desequilibrio de la temperatura corporal", id: 6, tipo: FISIOLOGICAS },
    { nombre: "Déficit del autocuidado. Alteración de la integridad cutánea", id: 7, tipo: PREVENCION },
    { nombre: "Incapacidad de mantener la integridad física para si y para terceros", id: 8, tipo: PREVENCION },
    { nombre: "Deterioro de la comunicación ", id: 9, tipo: COMUNICACION },
    { nombre: "Dificultad para actuar según creencias y valores", id: 10, tipo: PSICOSOCIALES },
    { nombre: "Disconfort", id: 11, tipo: PSICOSOCIALES },
    { nombre: "Déficit de actividades recreativas", id: 12, tipo: PSICOSOCIALES },
    { nombre: "Conocimientos deficientes", id: 13, tipo: EDUCACION },
];

const colorByTipo = (tipo) => {
    switch(tipo) {
        case FISIOLOGICAS: return "fisiologica";
        case PREVENCION: return "prevencion";
        case COMUNICACION: return "comunicacion";
        case PSICOSOCIALES: return "psicosociales";
        case EDUCACION: return "educacion";
        default: return "";
    }
}

export { diagnosticos, colorByTipo }