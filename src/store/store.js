import { configureStore } from "@reduxjs/toolkit";
import pacienteReducer from "./slices/paciente";

export const store = configureStore(
    {
        reducer: {
            paciente: pacienteReducer,

        }
    }
);