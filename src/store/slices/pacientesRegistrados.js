import { createSlice } from "@reduxjs/toolkit";
const { v4: uuidv4 } = require("uuid");

/**
 * ? Los objetos paciente tienen las keys
 * * nombre: STRING // ! en mayúsculas y sin tildes
 * * apellidp: STRING // ! en mayúsculas y sin tildes
 * * fechaNac: DD-MM-YYYY
 */

const pacientes = [
    {
        nombre: "JUAN GONZALO",
        apellido: "WILLNECKER",
        fechaNac: "09-12-1995"
    },
    {
        nombre: "JUAN GONZALO",
        apellido: "GUTIERREZ",
        fechaNac: "09-12-1999"
    },
    {
        nombre: "JUAN GONZALO",
        apellido: "LOPEZ CRUZ",
        fechaNac: "09-12-1980"
    },
    {
        nombre: "JUAN GONZALO",
        apellido: "LOPEZ",
        fechaNac: "09-12-1998"
    },
    {
        nombre: "JUAN GONZALO",
        apellido: "SOSA",
        fechaNac: "09-12-1990"
    },
    {
        nombre: "JUAN GONZALO",
        apellido: "WILLNECKER",
        fechaNac: "09-12-1996"
    },
    {
        nombre: "JUAN GONZALO",
        apellido: "WILLNECKER",
        fechaNac: "09-12-1996"
    },
    {
        nombre: "JUAN GONZALO",
        apellido: "WILLNECKER",
        fechaNac: "09-12-1994"
    },
]

const reducers = {
    registrar: (state, action) => {
        console.log(action.payload);
        state.push({ id: uuidv4(), ...action.payload })
    },

};

const pacientesRegistradosSlice = createSlice({
    name: "pacientesRegistrados",
    initialState: pacientes,
    reducers: reducers
})

export const { registrar } = pacientesRegistradosSlice.actions;
export default pacientesRegistradosSlice.reducer;