import { configureStore} from '@reduxjs/toolkit'
import booksReducer from '../features/books/booksSlice'
import {supabaseApi} from "../features/books/buchApi";
import {productsApi} from "../apiSlice";


export const store = configureStore({
    reducer: {
        books: booksReducer,
        [supabaseApi.reducerPath]: supabaseApi.reducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(supabaseApi.middleware, productsApi.middleware),

    devTools: true,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
