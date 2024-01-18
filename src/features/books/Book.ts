export type Book = {
    id: any;
    title: string;
    author: string;
    isbn: string;
    rating?: number;
};

export type InputBook = Omit<Book, 'id'> & {
    id?: any;
};
