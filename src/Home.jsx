import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../src/redux/cartSlice";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const dispatch = useDispatch();

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="text-center p-5">
      <h1 className="text-3xl font-bold mb-4">HOME</h1>
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
                onClick={() => openModal(product)}
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

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-600 text-xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={selectedProduct.images[0]}
              alt={selectedProduct.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="text-2xl font-bold mt-4">{selectedProduct.title}</h2>
            <p className="text-gray-700 mt-2">{selectedProduct.description}</p>
            <p className="text-lg font-bold mt-2">
              Price: ${selectedProduct.price}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Category: {selectedProduct.category.name}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
