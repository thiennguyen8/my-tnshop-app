import Search from "./Search";
import LoginSignup from "./LoginSignup";
import Cart from "./Cart";
import { Select } from "flowbite-react";
import logo from "../Components/Logo.png";

export default function Header() {
  const isLoggedIn = localStorage.getItem("loggedIn");
  console.log(isLoggedIn);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 rounded-lg ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-2">
        <div className="flex flex-grow items-center gap-4">
          {/* Logo + Name */}
          <div>
            <a href="google.com" className="flex items-center">
              <img
                // src="https://play-lh.googleusercontent.com/7CJlJ6xwLVf5wn0fVlKP4l9G8ewf7zeXjy6CUX0RWXQmVpIXWJq4ZD7BKFlLZWMfdg"
                src={logo}
                className="mr-3 h-6 sm:h-9"
                alt="Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                TNShop
              </span>
            </a>
          </div>
          {/* Search*/}
          <div className="flex flex-grow md:order-1">
            <Search />
          </div>
        </div>

        <div className="items-center justify-between flex px-3 ">
          {isLoggedIn === "true" ? <Cart /> : <LoginSignup />}
          {/* Language--------------------------------------------------------------------- */}
          <div>
            {/* <select
              className="form-select border-none "
              style={{ width: "80px" }}
            >
              <option value={"en"}>EN</option>
              <option value={"vi"}>VI</option>
            </select> */}
            <div id="select">
              <Select id="countries" required={true}>
                <option>English</option>
                <option>Vietnamese</option>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
