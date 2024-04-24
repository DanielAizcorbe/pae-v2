import { createSlice } from '@reduxjs/toolkit';

const avisosSlice = createSlice({
    name: 'avisos',
    initialState: {
        message: null,
    },
    reducers: {
        setMensaje(state, action) {
            state.message = action.payload;
        },
        limpiarMensaje(state) {
            state.message = null;
        },
    },
});

export const { setMensaje, limpiarMensaje } = avisosSlice.actions;

export default avisosSlice.reducer;
