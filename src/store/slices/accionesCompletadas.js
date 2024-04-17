import { createSlice } from "@reduxjs/toolkit";

const generateObject = (o) => {

    return {
        id: o.id,
        nombre: o.nombre,
        minutos: "",
        completada: false,
    }
}

const reducers = {
    addAcciones: (state, action) => {
        const acciones = action.payload;
        state = acciones.map(a => generateObject(a));
    },
    completarAccion: (state, action) => {
        const { accionId, minutos } = action.payload;

        const index = state.indexOf(a => a.id === accionId);

        state[index].minutos = minutos;
        state[index].completada = true;
    },
    resetAcciones: (state, action) => {
        state = [];
    },
    modificarTiempo: (state, action) => {
        const { accionId, minutos } = action.payload;

        state[state.indexOf(a => a.id === accionId)].minutos = minutos;
    }
};

const accionesCompletadasSlice = createSlice({
    name: "accionesCompletadas",
    initialState: [],
    reducers: reducers
});

export const {
    addAcciones,
    completarAccion,
    resetAcciones,
    modificarTiempo } = accionesCompletadasSlice.actions;

export default accionesCompletadasSlice.reducer;