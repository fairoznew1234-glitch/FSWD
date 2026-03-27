const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = 5000;

// API route to fetch books
app.get("/books", async (req, res) => {
  try {
    const response = await fetch("https://library-api.postmanlabs.com/books");
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch books" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});