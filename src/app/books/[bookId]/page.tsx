const booksData = async () => {
    const res = await fetch('https://localhost:3000/bookData.json')
    return res.json()

}
const BookDetailPage = async ({ params }) => {
    const book = await booksData();
    const { bookId } = await params
    return (
        <div>

        </div>
    );
};

export default BookDetailPage;