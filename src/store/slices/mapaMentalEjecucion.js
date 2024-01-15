import { createSlice } from "@reduxjs/toolkit"

const initialState = []

const reducers = {
    agregarMarcadorE: (state, action) => {
        state.push(action.payload);
    },
    quitarMarcadorE: (state, action) => {
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

export const { agregarMarcadorE, quitarMarcadorE } = marcadoresMapaEjecucionSlice.actions;
export default marcadoresMapaEjecucionSlice.reducer;