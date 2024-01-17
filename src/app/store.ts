import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import nationReducer from '../features/nation/nationSlice'
import booksReducer from '../features/books/booksSlice'


export const store = configureStore({
    reducer: {
        nation: nationReducer,
        books: booksReducer,
    },
    devTools: true,
})


export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
