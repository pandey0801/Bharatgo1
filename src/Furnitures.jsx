import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../src/redux/cartSlice";
import ProductModal from "./ProductModal"; // Import the modal component

const Furnitures = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) =>
        setProducts(
          data.filter((product) => product.category.name === "Furniture")
        )
      )
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log("data", cartItems);

  return (
    <div className="text-center p-5">
      <h1 className="text-3xl font-bold mb-4">Furnitures</h1>
      <input
        type="text"
        placeholder="Search a product"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-1/2 p-3 border border-gray-300 rounded-md text-lg mb-4"
      />
      <div className="grid grid-cols-4 gap-5 p-5">
        {products
          .filter((product) =>
            product.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((product) => (
            <div
              key={product.id}
              className="relative bg-white p-4 rounded-xl shadow-lg text-left cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full rounded-lg"
              />
              <div
                className="absolute top-2 right-2 bg-white p-2 text-2xl font-bold cursor-pointer rounded-full shadow-md"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent modal from opening when clicking +
                  dispatch(addItem(product));
                }}
              >
                +
              </div>
              <span className="absolute bottom-2 left-2 bg-black text-white text-xs py-1 px-3 rounded-md">
                {product.category.name}
              </span>
              <h3 className="mt-3 text-xl font-semibold">{product.title}</h3>
              <p className="font-bold text-xl">${product.price}</p>
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

export default Furnitures;
