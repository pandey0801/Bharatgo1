import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  toggleCart,
  checkOut,
} from "../src/redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (!isCartOpen) return null;

  return (
    <div className="fixed top-0 right-0 w-[350px] h-full bg-white shadow-xl z-50">
      <div className="flex flex-col h-full px-5 py-3">
        <div className="flex justify-between items-center border-b-2 pb-2">
          <h2 className="text-lg font-semibold">My Order</h2>
          <button className="text-2xl" onClick={() => dispatch(toggleCart())}>
            ✕
          </button>
        </div>
        <div className="flex-grow overflow-y-auto py-3">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex items-center space-x-4 mb-4">
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex-grow pl-2">
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-500">${item.price}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <button
                      className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center"
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                    >
                      -
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                      className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center"
                      onClick={() => dispatch(increaseQuantity(item.id))}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="text-xl text-gray-600 hover:text-gray-800"
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>
        <div className="border-t-2 pt-3 text-center">
          <p className="text-lg font-semibold">
            Total: <strong>${totalPrice}</strong>
          </p>
          <button
            className="w-full py-3 mt-4 bg-black text-white text-lg rounded-md"
            onClick={() => dispatch(checkOut())}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
