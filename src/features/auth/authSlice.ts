import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    userinfo: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        //Abmelden
        logout: (state) => {
            try {
                localStorage.removeItem("access_Token");
                state.userinfo = null;
                // state.userToken = null;
            } catch (error){
                console.error("Error logout:", error);
            }

        },

        //Anmeldeinformationen "setzen" -> Speichern in Local Storage
        setCredentials: (state, {payload})=> {
            try {
                localStorage.setItem("access_Token", payload.access_token)
                state.userinfo = payload
            } catch (error){
                console.error("Error setting credentials:", error);
            }
        },

    },
})

export const {logout, setCredentials} = authSlice.actions
export default authSlice.reducer