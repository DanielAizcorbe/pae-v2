import { createSlice } from "@reduxjs/toolkit";
import {diagnosticos} from "../../components/datos/datos-diagnostico";

const reducers = {
    toggleSeleccion: (state, action) => {
        console.log("🚀 ~ diagnostico recibido:", action);
        state[action.payload - 1].selected = !state[action.payload - 1].selected;
    }
};

const diagnosticosSlice = createSlice({
    name: "diagnosticos",
    initialState: diagnosticos,
    reducers: reducers
})

export const { toggleSeleccion } = diagnosticosSlice.actions;
export default diagnosticosSlice.reducer;