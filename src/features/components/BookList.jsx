import { Link } from "react-router-dom";

export default function BookList({ books, deleteBook }) {
  const handleDelete = async (id) => {
    try {
      if (confirm("Mau hapus buku ini?")) {
        await deleteBook(id);
      }
    } catch (error) {
      console.error("Gagal hapus buku:", error);
    }
  };

  return (
    <div className="space-y-4">
      {books.map((book) => (
        <div
          key={book.id}
          className="p-4 border rounded-xl flex justify-between items-center"
        >
          <div>
            <h2 className="text-lg font-semibold">{book.title}</h2>
            <p className="text-gray-600">{book.author}</p>
          </div>
          <div className="space-x-2">
            <Link
              to={`/books/edit/${book.id}`}
              className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600"
            >
              Edit
            </Link>
            <button
              onClick={() => handleDelete(book.id)}
              className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
