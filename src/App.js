import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./Components/PageNotFound";
import Layout from "./Components/Layout";
import FormLogIn from "./Components/FormLogIn";
import FormSignUp from "./Components/FormSignUp";
import FormResetPassword from "./Components/FormResetPassword";
import ComingSoon from "./Components/ComingSoon";
import Home from "./Components/Home";
import ProductPage from "./Components/ProductPage";
import ThemeContext from "./Components/ThemeContext";
import AlertProductNotFound from "./Components/AlertProductNotFound";

function App() {
  return (
    <div>
      <ThemeContext.Provider value={{ theme: "light:" }}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/?" element={<AlertProductNotFound />} />
          </Route>
          <Route path="/login" element={<FormLogIn />} />
          <Route path="/signup" element={<FormSignUp />} />
          <Route path="/reset-password" element={<FormResetPassword />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
