import { createSlice } from "@reduxjs/toolkit"

const initialState = []

const reducers = {
    agregar: (state, action) => {
        state.push(action.payload);
    },
    quitar: (state, action) => {
        const indiceMarcador = state.findIndex(m => m.id === action.payload.id);

        if (indiceMarcador !== -1) {
            state.splice(indiceMarcador, 1);
        }
    },
};

const marcadoresMapaEjecucionSlice = createSlice({
    name: "marcadoresValoracion",
    initialState: initialState,
    reducers: reducers
})

export const { agregar, quitar } = marcadoresMapaEjecucionSlice.actions;
export default marcadoresMapaEjecucionSlice.reducer;