import {createSlice} from "@reduxjs/toolkit";
import {Nation} from "./Nation";
import nationData from "./nationData";

export type NationState = Nation[];

export const nationSlice = createSlice({
    name: 'land',
    initialState: {land: nationData},
    reducers: {},
});

export default nationSlice.reducer;