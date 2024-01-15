import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    valoracion: {
        completada: true,
        text: "",
    },
    diagnostico: {
        completada: true,
        text: "",
    },
    planeacion: {
        completada: true,
        text: "",
    },
    ejecucion: {
        completada: true,
        text: "",
    },
    evaluacion: {
        completada: true,
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