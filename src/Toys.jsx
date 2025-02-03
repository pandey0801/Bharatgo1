import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../src/redux/cartSlice";
import ProductModal from "./ProductModal"; // Import the modal component

const Toys = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) =>
        setProducts(
          data.filter((product) => product.category.name === "Miscellaneous")
        )
      )
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const dispatch = useDispatch();

  return (
    <div className="text-center p-5">
      <h1 className="text-3xl font-bold mb-4">Toys</h1>
      <input
        type="text"
        placeholder="Search a product"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-1/2 p-2 mb-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {products
          .filter((product) =>
            product.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((product) => (
            <div
              key={product.id}
              className="relative bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-48 object-cover rounded-lg cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              />
              <button
                className="absolute top-2 right-2 bg-white p-2 text-xl font-bold rounded-full shadow-md hover:bg-gray-200 transition duration-300"
                onClick={() => dispatch(addItem(product))}
              >
                +
              </button>
              <span className="absolute bottom-2 left-2 bg-black text-white text-xs px-3 py-1 rounded">
                {product.category.name}
              </span>
              <h3 className="mt-3 text-lg font-semibold">{product.title}</h3>
              <p className="text-xl font-bold text-gray-700">
                ${product.price}
              </p>
            </div>
          ))}
      </div>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};

export default Toys;
