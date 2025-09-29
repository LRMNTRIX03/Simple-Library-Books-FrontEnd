
import { useState, useEffect } from "react";
import { fetchBooks, deleteBook } from "../services/BookServices";

export default function useBooks() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getBooks = async () => {
    try {
      setLoading(true);
      const response = await fetchBooks();
      console.log(response);
      setBooks(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const removeBook = async (id) => {
    try {
      await deleteBook(id);
      getBooks();
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return { books, loading, error, getBooks, removeBook };
}
