import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import booksReducer from '../features/books/booksSlice'
import buchReducer from '../features/books/buchSlice'


export const store = configureStore({
    reducer: {
        books: booksReducer,
        buecher: buchReducer,
    },
    devTools: true,
})


export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
