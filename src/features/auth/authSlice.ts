import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    userinfo: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem("access_Token");
            state.userinfo = null;
            // state.userToken = null;
        },
        setCredentials: (state, {payload})=> {
            localStorage.setItem("access_Token", payload.access_token)
            state.userinfo = payload
        }
    },
})

export const {logout, setCredentials} = authSlice.actions
export default authSlice.reducer