import {createSlice} from "@reduxjs/toolkit";
import {registerUser, userLogin} from "./authActions";

const initialState = {
    loading: false,
    userinfo: null,
    userToken: null,
    error: null,
    success: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem("access_Token");
            state.userinfo = null;
            state.userToken = null;
        },
        setCredentials: (state, {payload})=> {
            localStorage.setItem("access_Token", payload.access_token)
            state.userinfo = payload
        }
    },
    extraReducers: (builder) => {
        //Registrieren
        builder.addCase(registerUser.pending, (state)=> {
            state.loading = true
            state.error = null
        })
        builder.addCase(registerUser.fulfilled , (state, {payload} : any)=> {
            state.loading = false
            state.success = true
        })
        builder.addCase(registerUser.rejected , (state, {payload} : any) => {
            state.loading = false
            state.error = payload;
        })

        //Anmelden
        builder.addCase(userLogin.pending, (state)=> {
            state.loading= true
            state.error = null
        })
        builder.addCase(userLogin.fulfilled, (state, {payload} : any) => {
            state.loading = false
            state.userinfo = payload
            state.userToken= payload.access_token //todo same :D
        })
        builder.addCase(userLogin.rejected, (state, {payload} : any)=> {
            state.loading = false
            state.error = payload
        })

    },
})
export const {logout, setCredentials} = authSlice.actions
export default authSlice.reducer