import { createSlice } from "@reduxjs/toolkit";
const {v4: uuidv4} = require("uuid");

const reducers = {
    registrar: (state, action) => {

        state.push({id: uuidv4(), ...action.payload})

    },

};

const pacientesRegistradosSlice = createSlice({
    name: "pacientesRegistrados",
    initialState: [],
    reducers: reducers
})

export const { registrar } = pacientesRegistradosSlice.actions;
export default pacientesRegistradosSlice.reducer;