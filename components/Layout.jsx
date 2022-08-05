import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import layoutStyles from "../styles/Layout.module.scss";

export default Layout = ({ children }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
};
