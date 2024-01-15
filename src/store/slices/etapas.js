import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    valoracion: {
        completada: false,
        text: "",
    },
    diagnostico: {
        completada: false,
        text: "",
    },
    planeacion: {
        completada: false,
        text: "",
    },
    ejecucion: {
        completada: false,
        text: "",
    },
    evaluacion: {
        completada: false,
        text: "",
    },
}

const reducers = {
    completarEtapa: (state, action) => {
        const { etapa, completada, text } = action.payload;
        state[etapa].completada = completada;
        state[etapa].text = text;
    },
};

const etapasSlice = createSlice(
    {
        name: "estadoEtapas",
        initialState: initialState,
        reducers: reducers
    }
);

export const { completarEtapa } = etapasSlice.actions;
export default etapasSlice.reducer;