
import IBooks from "@/app/types/Book.types";
import Image from "next/image";


interface BookDataProps {
    params: Promise<{ bookId: string }>;
}
const booksData = async () => {
    const res = await fetch("http://localhost:3000/booksData.json");

    if (!res.ok) {
        throw new Error("Failed to fetch books data");
    }

    return res.json();
};

const BookDetailPage = async ({ params }: BookDataProps) => {
    const bookData = await booksData();

    const { bookId } = await params;

    const book = bookData.find(
        (book) => book.bookId === Number(bookId)
    );

    if (!book) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h2 className="text-2xl font-bold text-error">
                    Book not found!
                </h2>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center p-6">
            <div className="card lg:card-side bg-base-100 shadow-xl max-w-5xl w-full overflow-hidden">

                {/* Book Image */}
                <figure className="lg:w-1/3 bg-base-200 p-6">
                    <Image
                        src={book.image}
                        alt={book.bookName}
                        width={300}
                        height={250}
                        unoptimized
                        className="w-full h-96 object-contain rounded-lg"
                    />
                </figure>

                {/* Book Details */}
                <div className="card-body lg:w-2/3">

                    <h1 className="card-title text-3xl font-bold">
                        {book.bookName}
                    </h1>

                    <p className="text-lg text-base-content/70">
                        By <span className="font-semibold">{book.author}</span>
                    </p>

                    <div className="divider"></div>

                    <p className="text-base-content/80">
                        {book.review}
                    </p>

                    {/* Book Information */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">

                        <div>
                            <span className="font-semibold">Category:</span>{" "}
                            {book.category}
                        </div>

                        <div>
                            <span className="font-semibold">Publisher:</span>{" "}
                            {book.publisher}
                        </div>

                        <div>
                            <span className="font-semibold">Pages:</span>{" "}
                            {book.totalPages}
                        </div>

                        <div>
                            <span className="font-semibold">
                                Year of Publishing:
                            </span>{" "}
                            {book.yearOfPublishing}
                        </div>

                        <div>
                            <span className="font-semibold">Rating:</span>{" "}
                            ⭐ {book.rating}
                        </div>

                        <div>
                            <span className="font-semibold">Book ID:</span>{" "}
                            {book.bookId}
                        </div>

                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                        {book.tags.map((tag) => (
                            <span
                                key={tag}
                                className="badge badge-primary badge-outline"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>

                    {/* Action */}
                    <div className="card-actions justify-end mt-6">
                        <button className="btn btn-primary">
                            Read Book
                        </button>

                        <button className="btn btn-outline">
                            Add to Wishlist
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookDetailPage;