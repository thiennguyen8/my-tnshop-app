import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { ShoppingCartProvider } from "../Context/ShoppingCart";
import { useContext } from "react";
import ThemeContext from "./ThemeContext";

export default function Layout() {
  const themeCtx = useContext(ThemeContext);
  return (
    <div className="container mx-auto">
      <ShoppingCartProvider>
        <Header />
        <Outlet />
        <Footer />
      </ShoppingCartProvider>
    </div>
  );
}
