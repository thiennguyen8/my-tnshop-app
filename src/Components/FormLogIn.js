import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import logo from "../Components/Logo.png";

export default function FormLogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  // const navigate = useNavigate();

  useEffect(() => {
    // Kiểm tra xem người dùng đã đăng nhập hay chưa
    // Nếu đã đăng nhập thì cập nhật trạng thái loggedIn
    const isLoggedIn = localStorage.getItem("loggedIn");
    if (isLoggedIn === "true") {
      setLoggedIn(true);
    }
  }, []);

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleLogin(event) {
    event.preventDefault();

    // Lấy thông tin từ storage
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    // Kiểm tra thông tin đăng nhập
    if (username === savedUsername && password === savedPassword) {
      // Lưu trạng thái đăng nhập và chuyển hướng đến trang chủ
      localStorage.setItem("loggedIn", "true");
      setLoggedIn(true);
      // navigate.push("/");
    } else {
      alert("Username or password is incorrect");
    }
  }

  if (loggedIn) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="mx-auto text-center">
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            Successfully Log In.
          </p>
          <NavLink
            to="/"
            className="inline-flex text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-900 my-4"
          >
            Back to Home Page
          </NavLink>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            {/* Sign in title  */}
            <div>
              <img
                className="mx-auto h-12 w-auto"
                src={logo}
                alt="Your Company"
              />
              <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                Sign in to your account
              </h2>
            </div>

            {/* Form sign in */}
            <form onSubmit={handleLogin}>
              {/* Email */}
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Username
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="example@company.com"
                  required=""
                />
              </div>
              {/* Password */}
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your password
                </label>
                <input
                  type="text"
                  value={password}
                  onChange={handlePasswordChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required=""
                />
              </div>
              {/* Remember me */}
              {/* <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    defaultValue=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div> */}
              {/* Forget your password */}
              <div className="mb-6 text-sm font-medium text-blue-600 underline dark:text-blue-500">
                <NavLink to="/reset-password">Forget your password</NavLink>
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
