import { Spinner } from "flowbite-react";
import { NavLink } from "react-router-dom";
export default function AlertProductNotFound() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Spinner aria-label="Default status example" />
      <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
        Sorry, we can't find that page. You'll find lots to explore on the home
        page.
      </p>

      <NavLink
        to="/"
        className="inline-flex text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-900 my-4"
      >
        Back to Homepage
      </NavLink>
    </div>
  );
}
