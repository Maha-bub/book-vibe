'use client'
import { createContext, ReactNode, useState } from 'react';
interface ChildrenProps {
    children: ReactNode;
}

export const BooksContext = createContext({})

const BooksProvider = ({ children }: ChildrenProps) => {
    const [readBooks, setReadBooks] = useState([])
    const [wishlistBooks, setWishListBooks] = useState([])
    const shearedData = {
        readBooks, setReadBooks, wishlistBooks, setWishListBooks
    }
    return (
        <BooksContext.Provider value={shearedData}>
            {children}
        </BooksContext.Provider>
    );
};

export default BooksProvider;