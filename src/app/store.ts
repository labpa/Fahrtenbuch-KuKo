import { configureStore} from '@reduxjs/toolkit'


import {supabaseApiFahrt} from "../Api/fahrtApi";
import {supabaseAuthApi} from "../Api/authApi";
import authReducer from '../features/auth/authSlice';



export const store = configureStore({
    reducer: {

        auth: authReducer,

        [supabaseApiFahrt.reducerPath]: supabaseApiFahrt.reducer,
        [supabaseAuthApi.reducerPath]: supabaseAuthApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(supabaseApiFahrt.middleware, supabaseAuthApi.middleware),

    devTools: true,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
