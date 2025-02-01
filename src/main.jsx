// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// import { Provider } from "react-redux";
// import store from "./redux/store.js";

// createRoot(document.getElementById("root")).render(
//   // <StrictMode>
//   //   <App />
//   // </StrictMode>,

//   // <Provider store={store}>
//   //   <App />
//   // </Provider>
// );

// import React from "react";
// import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// import store from "./redux/store"; // Import Redux store
// import App from "./App";
// import "./index.css";
// import { BrowserRouter } from "react-router-dom";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </Provider>
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store"; // Import Redux store
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {" "}
      {/* ✅ Wrap everything inside Provider */}
      <BrowserRouter>
        {" "}
        {/* ✅ BrowserRouter inside Provider */}
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
