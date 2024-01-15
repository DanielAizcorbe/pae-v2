import { createSlice } from "@reduxjs/toolkit";
import {necesidades} from "../../components/datos/datos-necesidades";

const reducers = {
    toggleSeleccion: (state, action) => {
        console.log("🚀 ~ reducers.action:", action);
        state[action.payload - 1].selected = !state[action.payload - 1].selected;
    }
};

const necesidadesSlice = createSlice({
    name: "necesidades",
    initialState: necesidades,
    reducers: reducers
})

export const { toggleSeleccion } = necesidadesSlice.actions;
export default necesidadesSlice.reducer;