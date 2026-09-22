import IBooks from "@/app/types/Book.types";
import BookCard from "../components/sheared/BookCard";


const booksData = async () => {
    const res = await fetch('http://localhost:3000/booksData.json');
    return res.json()
}
const Books = async () => {
    const books = await booksData()
    return (
        <div className="space-y-7">
            <h3 className="text-2xl font-semibold text-amber-500 text-center">Our Collections</h3>
            <h2 className="text-4xl text-center font-semibold my-4">Explore All Books Here.</h2>
            <p className="text-lg text-slate-400 font-semibold text-center">Discover amazing stories, timeless classics and inspiring books from talented author</p>
            <div className="grid grid-cols-3 gap-2">
                {
                    books.map((book: IBooks) => <BookCard key={book.bookId} book={book}></BookCard>)
                }
            </div>
        </div>
    );
};

export default Books;