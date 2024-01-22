export type Buch = {
    buch_id:any;
    autor_id: any;
    isbn: string;
    titel: string;
}

export type InputBuch = Omit<Buch, 'buch_id'> & {
    buch_id?:any;
}