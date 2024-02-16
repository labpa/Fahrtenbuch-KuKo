import { configureStore} from '@reduxjs/toolkit'
import booksReducer from '../features/books/booksSlice'
import {supabaseApi} from "../Api/buchApi";
import {productsApi} from "../apiSlice";
import {supabaseApiFahrt} from "../Api/fahrtApi";
import authReducer from '../features/auth/authSlice';


export const store = configureStore({
    reducer: {
        books: booksReducer,
        auth: authReducer,
        [supabaseApi.reducerPath]: supabaseApi.reducer,
        [productsApi.reducerPath]: productsApi.reducer,
        [supabaseApiFahrt.reducerPath]: supabaseApiFahrt.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(supabaseApi.middleware, productsApi.middleware, supabaseApiFahrt.middleware),

    devTools: true,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
