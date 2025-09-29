import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FormBook from "../features/components/FormBook";
import { fetchBookById, updateBook } from "../features/services/BookServices";

export default function Update() {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const getBook = async () => {
      try {
        const data = await fetchBookById(id);
        setBook(data.data);
      } catch (err) {
        console.error("Failed to fetch book:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getBook();
  }, [id]);

  
  const handleUpdate = async (formData) => {
    try {
      await updateBook(id, formData);
      navigate("/"); 
    } catch (err) {
      console.error("Failed to update book:", err);
      throw err; 
    }
  };

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error loading book</p>;
  if (!book) return <p className="text-center">Book not found</p>;

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center mb-6">Edit Book</h1>
      <FormBook onAdd={handleUpdate} initialData={book} />
    </div>
  );
}
