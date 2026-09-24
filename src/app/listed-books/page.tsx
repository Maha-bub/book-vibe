'use client'
import { BooksContext } from '@/contex/BooksContext';
import React, { useContext } from 'react';

const ListedBooks = () => {
    const { readBooks } = useContext(BooksContext)
    console.log(readBooks)
    return (
        <div>
            <h3>Listed books</h3>
        </div>
    );
};

export default ListedBooks;