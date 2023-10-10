import React from "react";
import { Nav } from "../components/nav";
import { Footer } from "../components/footer";

// Pass the child props
const Layout = (({children}) => {
  return (
    <div>
      <Nav />
      {/* display the child prop */}
      {children}
      <Footer />
    </div>
  );
});

export { Layout };