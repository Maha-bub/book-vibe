
'use client';

import { BooksContext } from '@/contex/BooksContext';
import { useContext } from 'react';
import Image from 'next/image';
import IBooks from '../types/Book.types';

const ListedBooks = () => {
    const { readBooks, wishlistBooks } = useContext(BooksContext);

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">

            {/* Page Title */}
            <h3 className="text-3xl font-bold text-center mb-8">
                Listed Books
            </h3>

            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift">
                <label className="tab">
                    <input type="radio" name="my_tabs_4" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 me-2"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" /></svg>
                    ReadBooks{`(${readBooks.length})`}
                </label>
                {/* Read Books */}
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    <section className="mb-10">

                        <div className="space-y-5">
                            {
                                readBooks.length > 0 ?
                                    readBooks.map((book: IBooks) => (
                                        <div
                                            key={book.bookId}
                                            className="flex gap-5 p-5 border rounded-xl bg-base-100 shadow-sm"
                                        >
                                            {/* Book Image */}
                                            <div className="w-32 h-40 shrink-0">
                                                <Image
                                                    src={book.image}
                                                    alt={book.bookName}
                                                    width={128}
                                                    height={160}
                                                    unoptimized

                                                    className="w-full h-full object-cover rounded-lg"
                                                />
                                            </div>

                                            {/* Book Information */}
                                            <div className="flex-1">
                                                <h2 className="text-xl font-bold mb-2">
                                                    {book.bookName}
                                                </h2>

                                                <p className="text-gray-600 mb-2">
                                                    By <span className="font-semibold">{book.author}</span>
                                                </p>

                                                <div className="flex flex-wrap gap-2 mb-3">
                                                    {book.tags.map((tag) => (
                                                        <span
                                                            key={tag}
                                                            className="badge badge-primary badge-outline"
                                                        >
                                                            #{tag}
                                                        </span>
                                                    ))}
                                                </div>

                                                <p className="text-sm text-gray-600 mb-2">
                                                    <span className="font-semibold">Category:</span>{' '}
                                                    {book.category}
                                                </p>

                                                <p className="text-sm text-gray-600 mb-2">
                                                    <span className="font-semibold">Publisher:</span>{' '}
                                                    {book.publisher}
                                                </p>

                                                <div className="flex flex-wrap gap-4 text-sm">
                                                    <span>
                                                        📄 {book.totalPages} Pages
                                                    </span>

                                                    <span>
                                                        ⭐ {book.rating}
                                                    </span>

                                                    <span>
                                                        📅 {book.yearOfPublishing}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    )) : <p className="text-center text-gray-500 py-10">No read book found here</p>}

                        </div>
                    </section>
                </div>
                <label className="tab">
                    <input type="radio" name="my_tabs_4" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 me-2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
                    WishList{`(${wishlistBooks.length})`}
                </label>
                {/* Wishlist Books */}
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    <section>
                        <div className="space-y-5">
                            {wishlistBooks.length > 0 ?
                                wishlistBooks.map((book: IBooks) => (
                                    <div
                                        key={book.bookId}
                                        className="flex gap-5 p-5 border rounded-xl bg-base-100 shadow-sm"
                                    >
                                        {/* Book Image */}
                                        <div className="w-32 h-40 shrink-0">
                                            <Image
                                                src={book.image}
                                                alt={book.bookName}
                                                width={128}
                                                height={160}
                                                unoptimized
                                                className="w-full h-full object-cover rounded-lg"
                                            />
                                        </div>

                                        {/* Book Information */}
                                        <div className="flex-1">
                                            <h2 className="text-xl font-bold mb-2">
                                                {book.bookName}
                                            </h2>

                                            <p className="text-gray-600 mb-2">
                                                By <span className="font-semibold">{book.author}</span>
                                            </p>

                                            <div className="flex flex-wrap gap-2 mb-3">
                                                {book.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="badge badge-secondary badge-outline"
                                                    >
                                                        #{tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <p className="text-sm text-gray-600 mb-2">
                                                <span className="font-semibold">Category:</span>{' '}
                                                {book.category}
                                            </p>

                                            <p className="text-sm text-gray-600 mb-2">
                                                <span className="font-semibold">Publisher:</span>{' '}
                                                {book.publisher}
                                            </p>

                                            <div className="flex flex-wrap gap-4 text-sm">
                                                <span>
                                                    📄 {book.totalPages} Pages
                                                </span>

                                                <span>
                                                    ⭐ {book.rating}
                                                </span>

                                                <span>
                                                    📅 {book.yearOfPublishing}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )) : <p className="text-center text-gray-500 py-10">No wishlistBooks book found here</p>}

                        </div>
                    </section>
                </div>
            </div>





        </div >
    );
};

export default ListedBooks;