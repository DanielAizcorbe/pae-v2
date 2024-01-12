const FISIOLOGICAS = "Fisiológicas";
const PREVENCION = "Prevención";
const COMUNICACION = "Comunicación";
const PSICOSOCIALES = "Psicosociales";
const EDUCACION = "Educación";

const diagnosticos = [
    {
        nombre: "Alteración del patrón respiratorio", id: 1, tipo: FISIOLOGICAS,
        acciones: [
            "Posicionar la cabecera a 45°",
            "Aspirar secreciones",
            "Administrar oxigenoterapia sim",
            "Realizar nebulización sim",
            "Administrar medicación sim"
        ]
    },
    {
        nombre: "Desequilibrio nutricional", id: 2, tipo: FISIOLOGICAS,
        acciones: [
            "Colocar acceso venoso sim",
            "Control de ingesta",
            "Asistir en la alimentación",
            "Aplicar cuidados de SNE",
            "Aplicar cuidados de NPT"
        ]
    },
    {
        nombre: "Deterioro de la eliminación", id: 3, tipo: FISIOLOGICAS,
        acciones: [
            "Asistir al paciente en la deambulación",
            "Sentar al paciente al borde de la cama",
            "Sentar al paciente en el sillón",
            "Movilizar al paciente con dispositivos aux.",
            "Asistir al paciente para ir al baño"
        ]
    },
    {
        nombre: "Deterioro de la movilidad física", id: 4, tipo: FISIOLOGICAS,
        acciones: [
            "Asistir al paciente en la deambulación",
            "Sentar al paciente al borde de la cama",
            "Sentar al paciente en el sillón",
            "Movilizar al paciente con dispositivos aux.",
            "Asistir al paciente para ir al baño"
        ]
    },
    {
        nombre: "Trastornos del patrón del sueño", id: 5, tipo: FISIOLOGICAS,
        acciones: [
            "Crear un ambiente tranquilo y de apoyo",
            "Respetar el patrón de sueño",
            "Evitar interrupciones innecesarias del descanso"
        ]
    },
    {
        nombre: "Desequilibrio de la temperatura corporal", id: 6, tipo: FISIOLOGICAS,
        acciones: [
            "Colocar al paciente ropa de abrigo",
            "Colocar al paciente medios físicos",
            "Administrar antitérmico sim",
            "Reevaluar temperatura corporal",
            "Adecuar la temperatura del ambiente"
        ]
    },
    {
        nombre: "Déficit del autocuidado. Alteración de la integridad cutánea", id: 7, tipo: PREVENCION,
        acciones: [
            "Asistir al paciente en el baño en ducha",
            "Realizar al paciente baño en cama",
            "Mantener la piel del paciente limpia y seca",
            "Colocar al paciente cremas hidratantes",
            "Colocar dispositivos preventivos",
            "Rotar de decúbito cada 2 horas"
        ]
    },
    {
        nombre: "Incapacidad de mantener la integridad física para si y para terceros", id: 8, tipo: PREVENCION,
        acciones: [
            "Adecuar la unidad del paciente",
            "Adaptar la rutina del paciente",
            "Educar a la familia sobre medidas de seguridad",
            "Acompañar al paciente y familia",
            "Brindar apoyo emocional al paciente"
        ]
    },
    {
        nombre: "Deterioro de la comunicación ", id: 9, tipo: COMUNICACION,
        acciones: [
            "Escuchar con atención al paciente",
            "Utilizar palabras sencillas y frases cortas",
            "Utilizar los medios de comunicación disponibles",
            "Evitar interrupciones durante la comunicación",
            "Incorporar un traductor"
        ]
    },
    {
        nombre: "Dificultad para actuar según creencias y valores", id: 10, tipo: PSICOSOCIALES,
        acciones: [
            "Atender a las creencias del paciente",
            "Respetar las decisiones del paciente"
        ]
    },
    {
        nombre: "Disconfort", id: 11, tipo: PSICOSOCIALES,
        acciones: [
            "Integrar al paciente en el plan de cuidados",
            "Escuchar al paciente activamente",
            "Empatizar con el paciente",
        ]
    },
    {
        nombre: "Déficit de actividades recreativas", id: 12, tipo: PSICOSOCIALES,
        acciones: [
            "Estimular en el paciente la creatividad",
            "Fomentar la lectura, escuchar música, mirar TV"
        ]
    },
    {
        nombre: "Conocimientos deficientes", id: 13, tipo: EDUCACION,
        acciones: [
            "Realizar educación al paciente",
            "Incorporar a la familia en el cuidado",
            "Informar al paciente sobre los procedimientos"
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