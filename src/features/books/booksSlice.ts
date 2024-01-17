import { createSlice } from '@reduxjs/toolkit';
import { Book } from './Book';
import booksData from "./bookData";
export type BooksState = Book[];
export const booksSlice = createSlice({
    name: 'books',
    initialState: { books: booksData },
    reducers: {},
});
export default booksSlice.reducer;