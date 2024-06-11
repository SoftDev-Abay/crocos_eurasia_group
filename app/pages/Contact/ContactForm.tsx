import React, { useState } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import Button from "@/app/components/Button/Button";
import FormInputPhone from "@/app/components/Form/FormInputPhone";
import FormInputText from "@/app/components/Form/FormInputText";
// import "./style.scss";
import { useForm } from "react-hook-form";
import { FormInputCheckbox } from "@/app/components/Form/FormChechbox";
import { sendContactForm } from "@/app/services/ContactUsService";

import ContactFormSchema, { ContactFormType } from "./Validation";
import { yupResolver } from "@hookform/resolvers/yup";

const defaultValues = {
  name: "",
  email: "",
  phone_number: "",
  agree: false,
};

const ContactForm = () => {
  const { register, handleSubmit, reset, control, setValue } =
    useForm<ContactFormType>({
      defaultValues,
      resolver: yupResolver(ContactFormSchema),
    });

  const onSubmit = async (data: ContactFormType) => {
    try {
      console.log(data);

      const dataToSend = {
        name: data.name,
        phone_number: Number(data.phone_number.replace(/\D/g, "")),
        email: data.email,
      };

      const responce = await sendContactForm(dataToSend);

      alert("Форма отправлена");
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form>
        <div className="inputs-wrapper">
          <FormInputText control={control} name="name" label="Имя" />
          <FormInputText control={control} name="email" label="Email" />
          <FormInputPhone
            control={control}
            name="phone_number"
            label="Телефон"
          />

          <FormInputCheckbox
            name="agree"
            control={control}
            label={
              <p>
                Я соглашаюсь{" "}
                <span
                  className="highlighted"
                  style={{ textDecoration: "underline" }}
                >
                  с политикой конфиденциальности
                </span>
              </p>
            }
          />
        </div>

        <Button onClick={handleSubmit(onSubmit)}>Отправить</Button>
      </form>
    </>
  );
};

export default ContactForm;
