import { createSlice } from "@reduxjs/toolkit";
import { diagnosticos } from "../../components/datos/datos-diagnostico";

const reducers = {
    toggleDiagnosticoSeleccion: (state, action) => {
        state[action.payload - 1].selected = !state[action.payload - 1].selected;
    },
    toggleAccionSeleccion: (state, action) => {
        const { diagnostico, accion } = action.payload;
        const item = state.find(item => item.id === diagnostico);

        if (item) {
            const accionEncontrada = item.acciones.find(a => a.id === accion);

            if (accionEncontrada) {
                item.acciones.find(a => a.id === accion).selected = !accionEncontrada.selected;
            }
        }
    },
};

const diagnosticosSlice = createSlice({
    name: "diagnosticos",
    initialState: diagnosticos,
    reducers: reducers
})

export const { toggleDiagnosticoSeleccion, toggleAccionSeleccion } = diagnosticosSlice.actions;
export default diagnosticosSlice.reducer;