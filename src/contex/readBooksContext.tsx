import React, { Children, ReactNode } from 'react';
import { createContext } from 'vm';
interface ChildrenProps {
    children: ReactNode;
}
export const BooksContext = createContext({})

const ReadBooksContext = ({ Children }: ChildrenProps) => {
    return (
        <BooksContext.Provider value={null}>
            {Children}
        </BooksContext.Provider>
    );
};

export default ReadBooksContext;