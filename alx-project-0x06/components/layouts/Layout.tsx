import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";
import { LayoutProps } from "@/interface";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
