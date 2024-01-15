import { configureStore } from "@reduxjs/toolkit";
import pacienteReducer from "./slices/paciente";
import etapaReducer from "./slices/etapas";
import marcadoresValoracionReducer from "./slices/mapaMentalValoracion"
import marcadoresEjecucionReducer from "./slices/mapaMentalEjecucion";

export const store = configureStore(
    {
        reducer: {
            paciente: pacienteReducer,
            estadoEtapas: etapaReducer,
            marcadoresValoracion: marcadoresValoracionReducer,
            marcadoresEjecucion: marcadoresEjecucionReducer,
        }
    }
);