import { NavLink } from "react-router-dom";
export default function ComingSoon() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="flex justify-center items-center h-screen">
        <div className="mx-auto text-center">
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            Coming soon...
          </p>

          <NavLink
            to="/"
            className="inline-flex text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-900 my-4"
          >
            Back to Homepage
          </NavLink>
        </div>
      </div>
    </section>
  );
}
