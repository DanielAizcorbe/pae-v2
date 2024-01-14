import { createSlice } from "@reduxjs/toolkit";

const nombreSlice = "datosPaciente";
const defaultPaciente = {
    nombreCompleto: "",
    fechaNacimiento: "",
    documento: ""
};

const pacienteReducer = {
    evolucionar: (state, action) => {
        state.nombreCompleto = action.payload.nombreCompleto;
        state.fechaNacimiento = action.payload.fechaNacimiento;
        state.documento = action.payload.documento;
    },
    finalizar: (state) => {
        state.nombreCompleto = "";
        state.fechaNacimiento = "";
        state.documento = "";
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
