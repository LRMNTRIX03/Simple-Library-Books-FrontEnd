import { useNavigate } from "react-router-dom";
import FormBook from "../features/components/FormBook";
import { createBook } from "../features/services/BookServices";

export default function Create() {
  const navigate = useNavigate();

 
  const handleAdd = async (formData) => {
    try {
      await createBook(formData);
      navigate("/"); 
    } catch (err) {
      console.error("Failed to create book:", err);
      throw err; 
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center mb-6">Create New Book</h1>
      <FormBook onAdd={handleAdd} />
    </div>
  );
}
