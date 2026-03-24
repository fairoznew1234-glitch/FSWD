import { useState } from "react";
import productsData from "./data/products";
import ProductList from "./components/ProductList";
import Filters from "./components/Filters";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const filteredProducts = productsData.filter((product) => {
    return (
      product.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "" || product.category === category)
    );
  });

  return (
    <div>
      <h1>🛒 Product Store</h1>

      <Filters setSearch={setSearch} setCategory={setCategory} />

      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;