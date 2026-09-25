
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

            {/* Read Books */}
            <section className="mb-10">
                <h4 className="text-2xl font-bold mb-5">
                    Read Books
                    <span className="text-sm font-normal ml-2">
                        ({readBooks.length})
                    </span>
                </h4>

                <div className="space-y-5">
                    {readBooks.map((book: IBooks) => (
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
                    ))}

                    {readBooks.length === 0 && (
                        <p className="text-center text-gray-500 py-10">
                            No books added to Read Books yet.
                        </p>
                    )}
                </div>
            </section>

            {/* Wishlist Books */}
            <section>
                <h4 className="text-2xl font-bold mb-5">
                    Wishlist Books
                    <span className="text-sm font-normal ml-2">
                        ({wishlistBooks.length})
                    </span>
                </h4>

                <div className="space-y-5">
                    {wishlistBooks.map((book) => (
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
                    ))}

                    {wishlistBooks.length === 0 && (
                        <p className="text-center text-gray-500 py-10">
                            No books added to Wishlist yet.
                        </p>
                    )}
                </div>
            </section>

        </div>
    );
};

export default ListedBooks;