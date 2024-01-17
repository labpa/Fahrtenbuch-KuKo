import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import nationReducer from '../features/nation/nationSlice'


export const store = configureStore({
    reducer: {
        nation: nationReducer,
    },
    devTools: true,
})


export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
