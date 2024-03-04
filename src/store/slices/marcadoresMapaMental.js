import { createSlice } from "@reduxjs/toolkit";

const initialState = [

];

const reducers = {
    addMarcador: (state, action) => {
        let marcadorNuevo = action.payload;
        console.log(marcadorNuevo);
        state.push(marcadorNuevo);
    },
    removeMarcador: (state, action) => {
        const indiceMarcador = state.findIndex(m => m.id === action.payload.id);

        if (indiceMarcador !== -1) {
            state.splice(indiceMarcador, 1);
        }
    },
};

const marcadoresMapaMentalSlice = createSlice({
    name: "marcadores",
    initialState: initialState,
    reducers: reducers
})

export const { addMarcador, removeMarcador } = marcadoresMapaMentalSlice.actions;
export default marcadoresMapaMentalSlice.reducer;