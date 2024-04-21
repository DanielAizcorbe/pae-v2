import { configureStore } from "@reduxjs/toolkit";
import pacienteReducer from "./slices/paciente";
import etapaReducer from "./slices/etapas";
import necesidadesReducer from "./slices/necesidades";
import diagnosticosReducer from "./slices/diagnosticos";
import prioridadesReducer from "./slices/prioridades";
import exploracionFisicaReducer from "./slices/exploracionFisica";
import marcadoresMapaMentalReducer from "./slices/marcadoresMapaMental";
import accionesARealizarReducer from "./slices/accionesARealizar";
import avisosReducer from "./slices/avisosSlice"

export const store = configureStore(
    {
        reducer: {
            paciente: pacienteReducer,
            estadoEtapas: etapaReducer,
            marcadores: marcadoresMapaMentalReducer,
            necesidades: necesidadesReducer,
            diagnosticos: diagnosticosReducer,
            prioridades: prioridadesReducer,
            exploracionFisica: exploracionFisicaReducer,
            accionesARealizar: accionesARealizarReducer,
            avisos: avisosReducer,
        }
    }
);