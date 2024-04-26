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
import pacientesRegistradosReducer from "./slices/pacientesRegistrados";

const savedState = JSON.parse(sessionStorage.getItem('reduxState'));
const initialStateFromStorage = savedState ? savedState : {};

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
            pacientesRegistrados: pacientesRegistradosReducer,
        },
        preloadedState: initialStateFromStorage
    }
);

store.subscribe(() => {

    const state = store.getState();
    sessionStorage.setItem('accionesARealizar', JSON.stringify(state.accionesARealizar));
    sessionStorage.setItem('avisos', JSON.stringify(state.avisos));
    sessionStorage.setItem('diagnosticos', JSON.stringify(state.diagnosticos));
    sessionStorage.setItem('etapas', JSON.stringify(state.etapas));
    sessionStorage.setItem('exploracionFisica', JSON.stringify(state.exploracionFisica));
    sessionStorage.setItem('marcadoresMapaMental', JSON.stringify(state.marcadoresMapaMental));
    sessionStorage.setItem('necesidades', JSON.stringify(state.necesidades));
    sessionStorage.setItem('paciente', JSON.stringify(state.paciente));
    sessionStorage.setItem('prioridades', JSON.stringify(state.prioridades));

    localStorage.setItem("pacientesRegistrados", JSON.stringify(state.pacientesRegistrados));
});

