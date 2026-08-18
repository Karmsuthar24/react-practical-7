import React from "react";
import "./App.css";

function ProductList() {
  const products = [
    { id: 1, name: "Laptop", price: 55000, category: "Electronics" },
    { id: 2, name: "Smartphone", price: 25000, category: "Electronics" },
    { id: 3, name: "Headphones", price: 2500, category: "Accessories" },
    { id: 4, name: "Keyboard", price: 1500, category: "Accessories" },
  ];

  return (
    <main className="page">
      <div className="container">
        <h1>Product List</h1>
        <div className="products">
          {products.map((product) => (
            <article className="product" key={product.id}>
              <div className="product-icon">🛍️</div>
              <h2>{product.name}</h2>
              <p>{product.category}</p>
              <strong>₹{product.price}</strong>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

export default ProductList;
