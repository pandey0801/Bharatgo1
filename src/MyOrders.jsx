import React from "react";
import { useSelector } from "react-redux";

const MyOrders = () => {
  //   const checkOutItems = useSelector((state) => state.cart.checkOutItems);
  const checkOutItems = useSelector((state) => state.cart.checkOutItems || []);
  console.log("order", checkOutItems);

  // Calculate total price
  const totalAmount =
    checkOutItems && checkOutItems.length > 0
      ? checkOutItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        )
      : 0;

  // Get current date and time
  const orderDate = new Date().toLocaleString();

  return (
    <div className="max-w-4xl mx-auto my-12 p-6 bg-white shadow-lg rounded-lg text-center">
      <h1 className="text-2xl font-bold mb-6">My Orders</h1>
      {checkOutItems.length === 0 ? (
        <p className="text-lg text-gray-500">No orders yet.</p>
      ) : (
        <div className="text-left">
          <p className="text-lg font-semibold mb-4">Order Date: {orderDate}</p>
          <table className="w-full border-collapse mb-6">
            <thead>
              <tr>
                <th className="px-4 py-2 text-sm font-semibold bg-blue-500 text-white">
                  Image
                </th>
                <th className="px-4 py-2 text-sm font-semibold bg-blue-500 text-white">
                  Product
                </th>
                <th className="px-4 py-2 text-sm font-semibold bg-blue-500 text-white">
                  Quantity
                </th>
                <th className="px-4 py-2 text-sm font-semibold bg-blue-500 text-white">
                  Price
                </th>
                <th className="px-4 py-2 text-sm font-semibold bg-blue-500 text-white">
                  Subtotal
                </th>
              </tr>
            </thead>
            <tbody>
              {checkOutItems.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="px-4 py-2 text-center">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md mx-auto"
                    />
                  </td>
                  <td className="px-4 py-2">{item.title}</td>
                  <td className="px-4 py-2 text-center">{item.quantity}</td>
                  <td className="px-4 py-2 text-center">
                    ${item.price.toFixed(2)}
                  </td>
                  <td className="px-4 py-2 text-center">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h2 className="text-xl font-bold text-red-500">
            Total: ${totalAmount.toFixed(2)}
          </h2>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
