import API from "../api/api";


export const fetchBooks = async () => {
  try {
    const response = await API.get("/books");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch books:", error);
    throw error;
  }
};


export const fetchBookById = async (id) => {
  try {
    const response = await API.get(`/books/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch book with id ${id}:`, error);
    throw error;
  }
};

// Tambah buku baru
export const createBook = async (book) => {
  try {
    const response = await API.post("/books", book);
    return response.data;
  } catch (error) {
    console.error("Failed to create book:", error);
    throw error;
  }
};


export const deleteBook = async (id) => {
  try {
    const response = await API.delete(`/books/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to delete book with id ${id}:`, error);
    throw error;
  }
};


export const updateBook = async (id, book) => {
  try {
    const response = await API.put(`/books/${id}`, book);
    return response.data;
  } catch (error) {
    console.error(`Failed to update book with id ${id}:`, error);
    throw error;
  }
};
