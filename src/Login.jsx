import React, { useRef, useState } from "react";
import { login } from "./redux/cartSlice";
import { useDispatch } from "react-redux";

function Login() {
  const email = useRef("");
  const password1 = useRef("");
  const password2 = useRef("");

  const dispatch = useDispatch();
  const [isLogIn, setIsLogIn] = useState(true);

  const switchMode = () => {
    setIsLogIn((prevState) => !prevState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const pas1 = password1.current.value;
    const pas2 = password2.current.value;
    const enteredEmail = email.current.value;

    if (pas1 === pas2) {
      let url = isLogIn
        ? "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=YOUR_FIREBASE_API_KEY"
        : "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=YOUR_FIREBASE_API_KEY";

      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: pas1,
          returnSecureToken: true,
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          const token = data.idToken;
          //   dispatch(login({ token }));
          console.log("Token:", token);
        })
        .catch((err) => {
          alert("Authentication failed: " + err.message);
        });
    } else {
      alert("Passwords do not match!");
      password1.current.value = "";
      password2.current.value = "";
    }
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {isLogIn ? "Log In" : "Sign Up"}
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-600 text-left">Email</label>
              <input
                type="email"
                ref={email}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 text-left">
                Enter Password
              </label>
              <input
                type="password"
                ref={password1}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 text-left">
                Confirm Password
              </label>
              <input
                type="password"
                ref={password2}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
            >
              {isLogIn ? "Log In" : "Sign Up"}
            </button>
          </form>
          <button
            className="mt-4 text-blue-600 hover:text-blue-800 text-sm"
            onClick={switchMode}
          >
            {isLogIn ? "Create an account" : "Have an account? Log In"}
          </button>
          <button
            type="button"
            className="mt-4 w-full p-2 bg-gray-600 text-white font-semibold rounded hover:bg-gray-700 transition"
            onClick={() => dispatch(login({ token: "guest" }))}
          >
            Login as Guest
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
