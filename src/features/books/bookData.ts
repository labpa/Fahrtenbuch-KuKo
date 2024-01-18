import { Book } from './Book';
import uuid from "react-uuid";

const booksData: Book[] = [
    {
        id: uuid(),
        title: 'JavaScript - das umfassende Handbuch',
        author: 'Philip Ackermann',
        isbn: '978-3836286299',
    },
    {
        id: uuid(),
        title: 'Clean Code',
        author: 'Robert Martin',
        isbn: '978-0132350884',
    },
    {
        id: uuid(),
        title: 'Design Patterns',
        author: 'Erich Gamma',
        isbn: '978-0201633610',
    },
];

export default booksData;
