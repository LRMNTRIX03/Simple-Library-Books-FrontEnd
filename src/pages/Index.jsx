import { Link } from "react-router-dom";
import BookList from "../features/components/BookList";
import useBooks from "../features/hooks/useBooks";

export default function Index() {
  const { books, loading, error, removeBook } = useBooks();

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Book List</h1>
        <Link
          to="/books/create"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          + Create Book
        </Link>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error.message}</p>}

      <BookList books={books} deleteBook={removeBook} />
    </div>
  );
}
