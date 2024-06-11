import Wrapper from "@/app/pages/ContactWrapper/Wrapper";
import "./style.scss";
import Input from "@/app/components/Input/Input";
import Button from "@/app/components/Button/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import ContactForm from "@/app/pages/Contact/ContactForm";
import { useState } from "react";


const ContactUs = () => {
  return (
    <Wrapper>
      <div className="contact-us-page">
        <div className="form-wrapper">
          <h1>Связаться с нами</h1>
          <ContactForm />
        </div>
        <div className="image-wrapper">
          <img src="/imgs/field-tractor.png" alt="" />
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactUs;
