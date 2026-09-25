'use client'
import IBooks from '@/app/types/Book.types';
import { BooksContext } from '@/contex/BooksContext';
import { useContext } from 'react';
import { toast } from 'react-toastify';


const WishListButton = ({ book }: { book: IBooks }) => {
    const bookProvider = useContext(BooksContext);
    // console.log(bookProvider)
    const {wishlistBooks, setWishListBooks} = bookProvider;

    const handleWishListButton = () => {
        console.log('wishlist book btn triggered')

        setWishListBooks([...wishlistBooks, book])
        // console.log(wishlistBooks)
        toast.success(`${book.bookName} successfully added wishlist`);
    }
    return <button className="btn btn-primary" onClick={handleWishListButton}>WishList</button>

};

export default WishListButton;