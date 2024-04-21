import { createSlice } from '@reduxjs/toolkit';

const avisosSlice = createSlice({
    name: 'avisos',
    initialState: {
        message: null,
    },
    reducers: {
        setMensaje(state, action) {
            state.message = action.payload;
            console.log("se seteo el mensaje: " + action.payload);
        },
        limpiarMensaje(state) {
            state.message = null;
            console.log("se limpio el mensaje");
        },
    },
});

export const { setMensaje, limpiarMensaje } = avisosSlice.actions;

export default avisosSlice.reducer;
