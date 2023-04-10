import { NavLink } from "react-router-dom";
export default function LoginSignup() {
  return (
    <div>
      {/* LogIn--------------------------------------------------------------------- */}
      <NavLink
        to="/login"
        className=" text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
      >
        Log in
      </NavLink>
      {/*Signup--------------------------------------------------------------------- */}
      <NavLink
        to="/signup"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Sign up
      </NavLink>
    </div>
  );
}
