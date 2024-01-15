import { createSlice } from "@reduxjs/toolkit"

const initialState = []

const reducers = {
    agregarMarcadorV: (state, action) => {
        state.push(action.payload);
    },
    quitarMarcadorV: (state, action) => {
        const indiceMarcador = state.findIndex(m => m.id === action.payload.id);

        if (indiceMarcador !== -1) {
            state.splice(indiceMarcador, 1);
        }
    },
};

const marcadoresMapaValoracionSlice = createSlice({
    name: "marcadoresValoracion",
    initialState: initialState,
    reducers: reducers
})

export const { agregarMarcadorV, quitarMarcadorV } = marcadoresMapaValoracionSlice.actions;
export default marcadoresMapaValoracionSlice.reducer;