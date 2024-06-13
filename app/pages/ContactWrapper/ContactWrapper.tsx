import "./style.scss";
import ContactNavbar from "./ContactNavbar";
import ContactFooter from "./ContactFooter";

import { FC, ReactNode, useEffect, useState } from "react";

const ContactWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="contact_layout-wrapper">
      <div className="contact_layout">
        <ContactNavbar />
        <div className="contact_layout-content">{children}</div>
        <ContactFooter />
      </div>
    </div>
  );
};

export default ContactWrapper;
