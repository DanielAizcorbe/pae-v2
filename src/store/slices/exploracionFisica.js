import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    inspeccion: "",
    auscultacion: "",
    percusion: "",
    palpacion: "",
};

const reducers = {
    updateEtapa: (state, action) => {
        state[action.payload.etapa] = action.payload.texto;
    },
};

const exploracionFisicaSlices = createSlice({
    name: "exploracionFisica",
    initialState: initialState,
    reducers: reducers
})

export const { updateEtapa } = exploracionFisicaSlices.actions;
export default exploracionFisicaSlices.reducer;