import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    inspeccion: "",
    auscultacion: "",
    percusion: "",
    palpacion: "",
};

const reducers = {
    updateAll: (state, action) => {
        return action.payload;
    },
};

const exploracionFisicaSlices = createSlice({
    name: "exploracionFisica",
    initialState: initialState,
    reducers: reducers
})

export const { updateAll } = exploracionFisicaSlices.actions;
export default exploracionFisicaSlices.reducer;