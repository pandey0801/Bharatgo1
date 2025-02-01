// import logo from "./logo.svg";

import "./App.css";
import Login from "./Login";
// import Nav from "./Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./Home";
// import Clothes from "./Clothes";
// import Electronics from "./Electronics";
// import Furnitures from "./Furnitures";
// import Toys from "./Toys";
import { useSelector } from "react-redux";
import { login } from "./redux/cartSlice";
import Nav from "./Nav";
import Home from "./Home";
import Clothes from "./Clothes";
import Electronics from "./Electronics";
import Furnitures from "./Furnitures";
import Toys from "./Toys";
import MyOrders from "./MyOrders";
import Logout from "./Logout";
import MyAccount from "./MyAccount";
// import MyOrders from "./MyOrders";
// import MyOrders from "./MyOrders";
// import MyAccount from "./MyAccount";
// import Logout from "./Logout";

function App() {
  console.log("check home");
  const islogin = useSelector((state) => state.cart.islogin);
  console.log("islogin", islogin);

  return (
    <>
      {!islogin && <Login></Login>}

      {/* {islogin && (
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
             <Route path="/login" element={<Login />} />
            <Route path="/clothes" element={<Clothes />} />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/furnitures" element={<Furnitures />} />
            <Route path="/toys" element={<Toys />} />
            <Route path="/orders" element={<MyOrders />} />
            <Route path="/account" element={<MyAccount />} />
            <Route path="/logout" element={<Logout />} /> 
          </Routes>
        </Router>
      )} */}

      {islogin && (
        <>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Uncomment your routes when needed */}
            <Route path="/clothes" element={<Clothes />} />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/furnitures" element={<Furnitures />} />
            <Route path="/toys" element={<Toys />} />
            <Route path="/orders" element={<MyOrders />} />
            <Route path="/account" element={<MyAccount />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
