import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import logo from "../Components/Logo.png";
// import { useNavigate } from "react-router-dom";

export default function FormSignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registered, setRegistered] = useState(false);
  // const navigate = useNavigate();

  useEffect(() => {
    // Kiểm tra xem người dùng đã đăng ký hay chưa
    // Nếu đã đăng ký thì cập nhật trạng thái registered
    const isRegistered = localStorage.getItem("registered");
    if (isRegistered === "true") {
      setRegistered(true);
    }
  }, []);

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value);
  }

  function handleRegister(event) {
    event.preventDefault();

    // Kiểm tra thông tin đăng ký
    if (password !== confirmPassword) {
      alert("Password does not match");
    } else {
      // Lưu thông tin đăng ký và chuyển hướng đến trang đăng nhập
      localStorage.setItem("registered", "true");
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      setRegistered(true);
      alert("You have successfully registered an account");
      // navigate.push("/login");
    }
  }

  if (registered) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="mx-auto text-center">
          <NavLink
            to="/login"
            className="inline-flex text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-900 my-4"
          >
            Log in
          </NavLink>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            {/* Create a new account */}
            <div>
              <img
                className="mx-auto h-12 w-auto"
                src={logo}
                alt="Your Company"
              />
              <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                Create new account
              </h2>
            </div>

            {/* Form */}
            <form onSubmit={handleRegister}>
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
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required=""
                />
              </div>

              {/* Repeat Password */}
              <div className="mb-6">
                <label
                  htmlFor="repeat-password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Repeat password
                </label>
                <input
                  type="text"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required=""
                />
              </div>

              {/* Terms */}
              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    type="checkbox"
                    defaultValue=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <label
                  htmlFor="terms"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  I agree with the{" "}
                  <NavLink
                    to="/coming-soon"
                    className="text-blue-600 hover:underline dark:text-blue-500"
                  >
                    terms and conditions
                  </NavLink>
                </label>
              </div>

              {/* Button "Sign up" */}
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
