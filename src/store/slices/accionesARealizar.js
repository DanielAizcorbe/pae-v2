import { createSlice } from "@reduxjs/toolkit";

const agregarAtributos = (i) => {

    return {
        ...i,
        completado: false,
        minutos: "",
    }
}

const transformar = (o) => {

    return {
        diagnostico: o.diagnostico,
        acciones: o.acciones.map(a => agregarAtributos(a))
    }
}

const reducers = {

    addAcciones: (state, action) => {
        const acciones = action.payload.map(o => transformar(o));
        console.log("acciones recibidas: ", acciones);
        state.splice(0, state.length, ...acciones);
    },

    completarAccion: (state, action) => {
        const { accionId, minutos } = action.payload;
        console.log(accionId, minutos)

        const diagnosticoIndex = state.findIndex(diagnostico =>
            diagnostico.acciones.some(accion => accion.id === accionId)
        );

        console.log("index del diagnostico: ", diagnosticoIndex)

        if (diagnosticoIndex !== -1) {
            
            console.log("if: ", diagnosticoIndex !== -1);

            let acciones = state[diagnosticoIndex].acciones;
            console.log("acciones: ",acciones);

            const accionIndex = acciones.findIndex(
                accion => accion.id === accionId
            );

            console.log("indice de la accion: ", accionIndex);

            if (accionIndex !== -1) {

                state[diagnosticoIndex].acciones[accionIndex].minutos = minutos;
                state[diagnosticoIndex].acciones[accionIndex].completado = true;

            }
        }

    },
    modificarTiempo: (state, action) => {
        const { accionId, minutos } = action.payload;

        state[state.indexOf(a => a.id === accionId)].minutos = minutos;
    }
};

const accionesARealizarSlice = createSlice({
    name: "accionesARealizar",
    initialState: [],
    reducers: reducers
});

export const {
    addAcciones,
    completarAccion,
    resetAcciones,
    modificarTiempo } = accionesARealizarSlice.actions;

export default accionesARealizarSlice.reducer;