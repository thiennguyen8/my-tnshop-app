import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { ShoppingCartProvider } from "../Context/ShoppingCart";

export default function Layout() {
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
