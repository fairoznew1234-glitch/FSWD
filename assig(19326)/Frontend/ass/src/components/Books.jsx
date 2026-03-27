import { useEffect, useState } from "react";

function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then(data => {
        setBooks(data);
        setLoading(false);
      })
      .catch(err => {
        setError("Error loading data ❌");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Retrieving data... ⏳</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="books-container">
      {books.map((book, index) => (
        <div key={index} className="book-card">
          <h3>{book.title}</h3>
          <p>
            <strong>Status:</strong>{" "}
            {book.checkedOut ? "Checked Out ❌" : "Available ✅"}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Books;