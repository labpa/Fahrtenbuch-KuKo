import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import booksReducer from '../features/books/booksSlice'
import {setupListeners} from "@reduxjs/toolkit/query";
import {supabaseApi} from "../features/books/buchApi";


export const store = configureStore({
    reducer: {
        books: booksReducer,
        [supabaseApi.reducerPath]: supabaseApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(supabaseApi.middleware),
    devTools: true,
})


export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

//todo rausfinden was das macht! =>

// setupListeners(store.dispatch);
