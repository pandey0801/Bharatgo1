import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "../src/redux/cartSlice";
import Cart from "./Cart";
// import Cart from "./Cart";

const Nav = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-white border-b shadow-sm p-4 md:flex md:items-center md:justify-between">
        {/* Left Section */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">Vin</h2>
          <button
            className="text-3xl md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`md:flex md:items-center md:space-x-6 transition-all duration-300 ${
            menuOpen ? "block mt-4" : "hidden"
          } md:block`}
        >
          <li>
            <Link to="/" className="nav-link">
              All
            </Link>
          </li>
          <li>
            <Link to="/clothes" className="nav-link">
              Clothes
            </Link>
          </li>
          <li>
            <Link to="/electronics" className="nav-link">
              Electronics
            </Link>
          </li>
          <li>
            <Link to="/furnitures" className="nav-link">
              Furnitures
            </Link>
          </li>
          <li>
            <Link to="/toys" className="nav-link">
              Toys
            </Link>
          </li>
        </ul>

        {/* Right Section */}
        {/* <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-6 "> */}

        <div
          className={`flex flex-col md:flex-row items-center mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-6 ${
            menuOpen ? "block mt-4" : "hidden"
          } md:block`}
        >
          <span className="text-gray-500 text-sm">
            vinaypandey0801@gmail.com
          </span>
          <Link to="/orders" className="text-blue-500 hover:underline">
            My Orders
          </Link>
          <Link to="/account" className="text-blue-500 hover:underline">
            My Account
          </Link>
          <button
            className="relative text-xl cursor-pointer p-2"
            onClick={() => dispatch(toggleCart())}
          >
            🛒
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {cartItems.length}
            </span>
          </button>
          <Link to="/logout" className="text-red-500 hover:underline">
            LogOut
          </Link>
        </div>
      </nav>

      {/* Cart Component */}
      <Cart />
    </>
  );
};

export default Nav;
