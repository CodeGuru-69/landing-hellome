import React, { PropsWithChildren } from "react";
import Header from "./header";
import Footer from "./footer";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="pt-20 bg-black px-6">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
