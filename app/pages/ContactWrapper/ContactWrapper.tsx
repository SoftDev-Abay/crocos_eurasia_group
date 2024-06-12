import "./style.scss";
import ContactNavbar from "./ContactNavbar";
import ContactFooter from "./ContactFooter";

import { FC, ReactNode } from "react";

const ContactWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <div className="layout">
        <ContactNavbar />
        <div className="layout-content">{children}</div>
        <ContactFooter />
      </div>
    </div>
  );
};

export default ContactWrapper;
