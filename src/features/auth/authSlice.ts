import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    userinfo: {},
    userToken: null,
    error: null,
    success: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    // extraReducers: {}, //todo need help!
})

export default authSlice.reducer