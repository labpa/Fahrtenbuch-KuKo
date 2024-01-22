import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Book, InputBook } from './Book';
import booksData from '../books/bookData'
import uuid from "react-uuid";



export type BooksState = {
    books: Book[];
};

export const booksSlice = createSlice({
    name: 'books',
    initialState: { books: booksData},
    reducers: {
        remove(state, action: PayloadAction<number>) {
            const index = state.books.findIndex((book) => book.id === action.payload);
            state.books.splice(index, 1);
        },
        save(state, action: PayloadAction<InputBook>) {
            if (action.payload.id) {
                const index = state.books.findIndex(
                    (book) => book.id === action.payload.id
                );
                state.books[index] = action.payload as Book;
            } else {
                const nextId = uuid();
                state.books.push({ ...action.payload, id: nextId });
            }
        },
    },
});






export const { remove, save} = booksSlice.actions;

export const selectBooks = (state: RootState) => state.books.books;

export default booksSlice.reducer;