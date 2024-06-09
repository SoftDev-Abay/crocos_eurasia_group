import "./style.scss";
import Navbar from "./Navbar";
import Footer from "./Footer";

import { FC, ReactNode } from "react";

const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="layout-content">{children}</div>
      <Footer />
    </div>
  );
};

export default Wrapper;
