'use client'
import { BooksContext } from '@/contex/BooksContext';
import React, { useContext } from 'react';

const ListedBooks = () => {
    const { readBooks,wishlistBooks } = useContext(BooksContext)
    console.log(wishlistBooks, 'wishListed Books')
    console.log(readBooks, 'Read books')
    return (
        <div>
            <h3>Listed books</h3>
        </div>
    );
};

export default ListedBooks;