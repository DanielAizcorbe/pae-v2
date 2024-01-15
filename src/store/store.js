import { configureStore } from "@reduxjs/toolkit";
import pacienteReducer from "./slices/paciente";
import etapaReducer from "./slices/etapas";
import marcadoresValoracionReducer from "./slices/mapaMentalValoracion"
import marcadoresEjecucionReducer from "./slices/mapaMentalEjecucion";
import necesidadesReducer from "./slices/necesidades";
import diagnosticosReducer from "./slices/diagnosticos";

export const store = configureStore(
    {
        reducer: {
            paciente: pacienteReducer,
            estadoEtapas: etapaReducer,
            marcadoresValoracion: marcadoresValoracionReducer,
            marcadoresEjecucion: marcadoresEjecucionReducer,
            necesidades: necesidadesReducer,
            diagnosticos: diagnosticosReducer,
        }
    }
);