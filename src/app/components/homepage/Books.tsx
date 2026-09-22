import IBooks from "@/app/types/Book.types";
import BookCard from "../sheared/BookCard";

const booksData = async () => {
    const res = await fetch('http://localhost:3000/booksData.json');
    return res.json()
}
const Books = async () => {
    const books = await booksData()
    return (
        <div className="grid grid-cols-4 gap-2">
            {
                books.map((book:IBooks) => <BookCard key={book.bookId} book={book}></BookCard>)
            }
        </div>
    );
};

export default Books;