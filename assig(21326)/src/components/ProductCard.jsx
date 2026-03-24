function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>₹{product.price}</p>
      <p>{product.category}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;