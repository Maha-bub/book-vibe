'use client'
import IBooks from '@/app/types/Book.types';
import { BooksContext } from '@/contex/BooksContext';
import { useContext } from 'react';
import { toast } from 'react-toastify';


const ReadButton = ({ book }: { book: IBooks }) => {
    const bookProvider = useContext(BooksContext);
    console.log(bookProvider)
    const { readBooks, setReadBooks } = bookProvider;

    const handleReadBook = () => {
        console.log('read book btn triggered')

        setReadBooks([...readBooks, book])
        // console.log(readBooks)
        toast.success(`${book.bookName} successfully Added Read books`)
    }
    return <button className="btn btn-primary" onClick={handleReadBook}>Read Book</button>

};

export default ReadButton;