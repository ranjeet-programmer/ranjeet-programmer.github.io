import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="font-mont overflow-hidden">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
