'use client'
import IBooks from '@/app/types/Book.types';
import { BooksContext } from '@/contex/BooksContext';
import { useContext } from 'react';


const WishListButton = ({ book }: { book: IBooks }) => {
    const bookProvider = useContext(BooksContext);
    // console.log(bookProvider)
    const {wishlistBooks, setWishListBooks} = bookProvider;

    const handleWishListButton = () => {
        console.log('wishlist book btn triggered')

        setWishListBooks([...wishlistBooks, book])
        console.log(wishlistBooks)
    }
    return <button className="btn btn-primary" onClick={handleWishListButton}>WishList</button>

};

export default WishListButton;