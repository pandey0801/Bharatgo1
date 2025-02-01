import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../src/redux/cartSlice";

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout()); // Dispatch logout action
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <button
        className="px-6 py-3 text-xl bg-red-500 text-white rounded-lg hover:bg-red-700 transition duration-300"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
