import { createSlice } from "@reduxjs/toolkit";

const nombreSlice = "datosPaciente";
const defaultPaciente = {
    nombre: "",
    fechaNac: "",
    apellido: ""
};

const pacienteReducer = {
    evolucionar: (state, action) => {
        state.nombre = action.payload.nombre;
        state.fechaNac = action.payload.fechaNac;
        state.apellido = action.payload.apellido;
    },
    finalizar: (state) => {
        state = defaultPaciente;
    }
};

const pacienteSlice = createSlice(
    {
        name: nombreSlice,
        initialState: defaultPaciente,
        reducers: pacienteReducer
    }
);

export const { evolucionar, finalizar } = pacienteSlice.actions;
export default pacienteSlice.reducer;
