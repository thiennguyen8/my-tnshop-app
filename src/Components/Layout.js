import Header from "./Header";
// import Body from "./Home";
import Footer from "./Footer";
// import Header2 from "./Header2";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="container mx-auto">
      <Header />
      {/* <Header2 /> */}
      <Outlet />
      <Footer />
    </div>
  );
}
