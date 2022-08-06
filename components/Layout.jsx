import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Menu />
      <main>{children}</main>
      <Footer />
    </>
  );
}
