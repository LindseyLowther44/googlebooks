import axios from "axios";

export default {
  // Gets all books
  getAllBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getOneBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(newBook) {
    return axios.post("/api/books", newBook);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
};
