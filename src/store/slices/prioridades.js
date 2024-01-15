import { createSlice } from "@reduxjs/toolkit";

const reducers = {
    switchOrder: (state, action) => {
        state.splice(0, state.length, ...action.payload);
    }
}

const prioridadesSlice = createSlice({
    name: "prioridades",
    initialState: [],
    reducers: reducers
});

export const { switchOrder } = prioridadesSlice.actions;
export default prioridadesSlice.reducer;
