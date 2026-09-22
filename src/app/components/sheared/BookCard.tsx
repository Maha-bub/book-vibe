import Image from "next/image";
import IBooks from "@/app/types/Book.types";

interface BookDataProps {
    book: IBooks;
}

const BookCard = ({ book }: BookDataProps) => {
    const {
        bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing,
    } = book;

    return (
        <div className="group w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            {/* Image */}
            <div className="relative h-72 overflow-hidden bg-gray-100">
                <Image
                    src={image}
                    alt={bookName}
                    width={300}
                    height={300}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Category */}
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-indigo-600 shadow backdrop-blur">
                    {category}
                </span>

                {/* Rating */}
                <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-black/70 px-3 py-1 text-sm font-medium text-white backdrop-blur">
                    <span className="text-yellow-400">★</span>
                    {rating}
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <h2 className="line-clamp-1 text-xl font-bold text-gray-900 transition-colors group-hover:text-indigo-600">
                    {bookName}
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                    by <span className="font-medium text-gray-700">{author}</span>
                </p>

                {/* Review */}
                <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-600">
                    {review}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {tags?.slice(0, 3).map((tag, index) => (
                        <span
                            key={index}
                            className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600 transition-colors hover:bg-indigo-100"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Book Info */}
                <div className="mt-5 grid grid-cols-2 gap-3 border-y border-gray-100 py-4 text-sm">
                    <div>
                        <p className="text-gray-400">Pages</p>
                        <p className="font-semibold text-gray-800">{totalPages}</p>
                    </div>

                    <div>
                        <p className="text-gray-400">Published</p>
                        <p className="font-semibold text-gray-800">
                            {yearOfPublishing}
                        </p>
                    </div>

                    <div>
                        <p className="text-gray-400">Publisher</p>
                        <p className="truncate font-semibold text-gray-800">
                            {publisher}
                        </p>
                    </div>

                    <div>
                        <p className="text-gray-400">Rating</p>
                        <p className="font-semibold text-gray-800">⭐ {rating}/5</p>
                    </div>
                </div>

                {/* Button */}
                <button className="mt-5 w-full rounded-xl bg-indigo-600 px-4 py-3 font-semibold text-white transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg active:scale-95">
                    View Details →
                </button>
            </div>
        </div>
    );
};

export default BookCard;