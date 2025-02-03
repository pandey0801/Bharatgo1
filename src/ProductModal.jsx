import React from "react";

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
        <button
          className="absolute top-2 right-2 text-gray-600 text-xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-48 object-cover rounded-lg"
        />
        <h2 className="text-2xl font-bold mt-4">{product.title}</h2>
        <p className="text-gray-700 mt-2">{product.description}</p>
        <p className="text-lg font-bold mt-2">Price: ${product.price}</p>
        <p className="text-sm text-gray-500 mt-1">
          Category: {product.category.name}
        </p>
      </div>
    </div>
  );
};

export default ProductModal;
