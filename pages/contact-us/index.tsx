import ContactWrapper from "@/app/pages/ContactWrapper/ContactWrapper";
import "./style.scss";
import Input from "@/app/components/Input/Input";
import Button from "@/app/components/Button/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import ContactForm from "@/app/pages/Contact/ContactForm";
import { useEffect, useState } from "react";

const ContactUs = () => {
  const [rendered, setRendered] = useState(false);
  useEffect(() => {
    setRendered(true);
  }),
    [];

  if (rendered)
    return (
      <ContactWrapper>
        <div className="contact-us-page">
          <div className="form-wrapper">
            <div className="form-container">
              <h1>Связаться с нами</h1>
              <ContactForm />
            </div>
          </div>
          <div className="image-wrapper">
            <img src="/imgs/field-tractor.png" alt="" />
          </div>
        </div>
      </ContactWrapper>
    );
  return null;
};

export default ContactUs;
