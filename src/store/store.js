import { configureStore } from "@reduxjs/toolkit";
import pacienteReducer from "./slices/paciente";
import etapaReducer from "./slices/etapas";

export const store = configureStore(
    {
        reducer: {
            paciente: pacienteReducer,
            estadoEtapas: etapaReducer,
        }
    }
);