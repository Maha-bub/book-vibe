'use client'
import { createContext, ReactNode, useState } from 'react';
interface ChildrenProps {
    children: ReactNode;
}
export const BooksContext = createContext({})

const BooksProvider = ({ children }: ChildrenProps) => {
    const [readBooks, setReadBooks] = useState([])
    const [listBooks, setListBooks] = useState([])
    const shearedData = {
        readBooks, setReadBooks, listBooks, setListBooks
    }
    return (
        <BooksContext.Provider value={shearedData}>
            {children}
        </BooksContext.Provider>
    );
};

export default BooksProvider;