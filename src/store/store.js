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
import { loadDataFromLocalStorage, loadDataFromSessionStorage, saveOnLocalStorage, saveOnSessionStorage } from "./saveData";

const accionesARealizarSessionStorage = loadDataFromSessionStorage('accionesARealizar');
const avisosSessionStorage = loadDataFromSessionStorage('avisos');
const diagnosticosSessionStorage = loadDataFromSessionStorage('diagnosticos');
const etapasSessionStorage = loadDataFromSessionStorage('estadoEtapas');
const exploracionFisicaSessionStorage = loadDataFromSessionStorage('exploracionFisica');
const marcadoresMapaMentalSessionStorage = loadDataFromSessionStorage('marcadores');
const necesidadesSessionStorage = loadDataFromSessionStorage('necesidades');
const pacienteSessionStorage = loadDataFromSessionStorage('paciente');
const prioridadesSessionStorage = loadDataFromSessionStorage('prioridades');
const pacientesRegistradosLocalStorage = loadDataFromLocalStorage("pacientesRegistrados");

const preloadedState = {
    accionesARealizar: accionesARealizarSessionStorage,
    avisos: avisosSessionStorage,
    diagnosticos: diagnosticosSessionStorage,
    estadoEtapas: etapasSessionStorage,
    exploracionFisica: exploracionFisicaSessionStorage,
    marcadores: marcadoresMapaMentalSessionStorage,
    necesidades: necesidadesSessionStorage,
    paciente: pacienteSessionStorage,
    prioridades: prioridadesSessionStorage,
    pacientesRegistrados: pacientesRegistradosLocalStorage,
};

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
        preloadedState: preloadedState
    }
);

store.subscribe(() => {

    const state = store.getState();
    
    saveOnLocalStorage("pacientesRegistrados", state.pacientesRegistrados);

    saveOnSessionStorage("paciente",state.paciente);
    saveOnSessionStorage("diagnosticos",state.diagnosticos);
    saveOnSessionStorage("necesidades",state.necesidades);
    saveOnSessionStorage("exploracionFisica",state.exploracionFisica);
    saveOnSessionStorage("accionesARealizar",state.accionesARealizar);
    saveOnSessionStorage("prioridades",state.prioridades);
    saveOnSessionStorage("marcadores",state.marcadores);
    saveOnSessionStorage("estadoEtapas",state.estadoEtapas);
    saveOnSessionStorage("avisos",state.avisos);
});

