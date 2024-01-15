const FISIOLOGICAS = "Fisiológicas";
const PREVENCION = "Prevención";
const COMUNICACION = "Comunicación";
const PSICOSOCIALES = "Psicosociales";
const EDUCACION = "Educación";

const diagnosticos = [
    {
        nombre: "Alteración del patrón respiratorio", id: 1, tipo: FISIOLOGICAS,
        acciones: [
            { id: 1, nombre: "Posicionar la cabecera a 45°", selected: false },
            { id: 2, nombre: "Aspirar secreciones", selected: false },
            { id: 3, nombre: "Administrar oxigenoterapia sim", selected: false },
            { id: 4, nombre: "Realizar nebulización sim", selected: false },
            { id: 5, nombre: "Administrar medicación sim", selected: false }
        ]
    },

    {
        nombre: "Desequilibrio nutricional", id: 2, tipo: FISIOLOGICAS,
        acciones: [
            { id: 6, nombre: "Colocar acceso venoso sim", selected: false },
            { id: 7, nombre: "Control de ingesta", selected: false },
            { id: 8, nombre: "Asistir en la alimentación", selected: false },
            { id: 9, nombre: "Aplicar cuidados de SNE", selected: false },
            { id: 10, nombre: "Aplicar cuidados de NPT", selected: false },
        ]
    },
    {
        nombre: "Deterioro de la eliminación", id: 3, tipo: FISIOLOGICAS,
        acciones: [
            { id: 11, nombre: "Asistir al paciente en la deambulación", selected: false },
            { id: 12, nombre: "Sentar al paciente al borde de la cama", selected: false },
            { id: 13, nombre: "Sentar al paciente en el sillón", selected: false },
            { id: 14, nombre: "Movilizar al paciente con dispositivos aux.", selected: false },
            { id: 15, nombre: "Asistir al paciente para ir al baño", selected: false },
        ]
    },
    {
        nombre: "Deterioro de la movilidad física", id: 4, tipo: FISIOLOGICAS,
        acciones: [
            { id: 16, nombre: "Asistir al paciente en la deambulación", selected: false },
            { id: 17, nombre: "Sentar al paciente al borde de la cama", selected: false },
            { id: 18, nombre: "Sentar al paciente en el sillón", selected: false },
            { id: 19, nombre: "Movilizar al paciente con dispositivos aux.", selected: false },
            { id: 20, nombre: "Asistir al paciente para ir al baño", selected: false },
        ]
    },
    {
        nombre: "Trastornos del patrón del sueño", id: 5, tipo: FISIOLOGICAS,
        acciones: [
            { id: 21, nombre: "Crear un ambiente tranquilo y de apoyo", selected: false },
            { id: 22, nombre: "Respetar el patrón de sueño", selected: false },
            { id: 23, nombre: "Evitar interrupciones innecesarias del descanso", selected: false },
        ]
    },
    {
        nombre: "Desequilibrio de la temperatura corporal", id: 6, tipo: FISIOLOGICAS,
        acciones: [
            { id: 24, nombre: "Colocar al paciente ropa de abrigo", selected: false },
            { id: 25, nombre: "Colocar al paciente medios físicos", selected: false },
            { id: 26, nombre: "Administrar antitérmico sim", selected: false },
            { id: 27, nombre: "Reevaluar temperatura corporal", selected: false },
            { id: 28, nombre: "Adecuar la temperatura del ambiente", selected: false },
        ]
    },
    {
        nombre: "Déficit del autocuidado. Alteración de la integridad cutánea", id: 7, tipo: PREVENCION,
        acciones: [
            { id: 25, nombre: "Asistir al paciente en el baño en ducha", selected: false },
            { id: 26, nombre: "Realizar al paciente baño en cama", selected: false },
            { id: 27, nombre: "Mantener la piel del paciente limpia y seca", selected: false },
            { id: 28, nombre: "Colocar al paciente cremas hidratantes", selected: false },
            { id: 29, nombre: "Colocar dispositivos preventivos", selected: false },
            { id: 30, nombre: "Rotar de decúbito cada 2 horas", selected: false },
        ]
    },
    {
        nombre: "Incapacidad de mantener la integridad física para si y para terceros", id: 8, tipo: PREVENCION,
        acciones: [
            { id: 31, nombre: "Adecuar la unidad del paciente", selected: false },
            { id: 32, nombre: "Adaptar la rutina del paciente", selected: false },
            { id: 33, nombre: "Educar a la familia sobre medidas de seguridad", selected: false },
            { id: 34, nombre: "Acompañar al paciente y familia", selected: false },
            { id: 35, nombre: "Brindar apoyo emocional al paciente", selected: false },
        ]
    },
    {
        nombre: "Deterioro de la comunicación ", id: 9, tipo: COMUNICACION,
        acciones: [
            { id: 36, nombre: "Escuchar con atención al paciente", selected: false },
            { id: 37, nombre: "Utilizar palabras sencillas y frases cortas", selected: false },
            { id: 38, nombre: "Utilizar los medios de comunicación disponibles", selected: false },
            { id: 39, nombre: "Evitar interrupciones durante la comunicación", selected: false },
            { id: 40, nombre: "Incorporar un traductor", selected: false },
        ]
    },
    {
        nombre: "Dificultad para actuar según creencias y valores", id: 10, tipo: PSICOSOCIALES,
        acciones: [
            { id: 41, nombre: "Atender a las creencias del paciente", selected: false },
            { id: 42, nombre: "Respetar las decisiones del paciente", selected: false },
        ]
    },
    {
        nombre: "Disconfort", id: 11, tipo: PSICOSOCIALES,
        acciones: [
            { id: 43, nombre: "Integrar al paciente en el plan de cuidados", selected: false },
            { id: 44, nombre: "Escuchar al paciente activamente", selected: false },
            { id: 45, nombre: "Empatizar con el paciente", selected: false },
        ]
    },
    {
        nombre: "Déficit de actividades recreativas", id: 12, tipo: PSICOSOCIALES,
        acciones: [
            { id: 46, nombre: "Estimular en el paciente la creatividad", selected: false },
            { id: 47, nombre: "Fomentar la lectura, escuchar música, mirar TV", selected: false },
        ]
    },
    {
        nombre: "Conocimientos deficientes", id: 13, tipo: EDUCACION,
        acciones: [
            { id: 48, nombre: "Realizar educación al paciente", selected: false },
            { id: 49, nombre: "Incorporar a la familia en el cuidado", selected: false },
            { id: 50, nombre: "Informar al paciente sobre los procedimientos", selected: false },
        ]
    },
];

const colorByTipo = (tipo) => {
    switch (tipo) {
        case FISIOLOGICAS: return "fisiologica";
        case PREVENCION: return "prevencion";
        case COMUNICACION: return "comunicacion";
        case PSICOSOCIALES: return "psicosociales";
        case EDUCACION: return "educacion";
        default: return "";
    }
}

export { diagnosticos, colorByTipo }