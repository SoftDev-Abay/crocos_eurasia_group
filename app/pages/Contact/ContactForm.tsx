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
import { useTranslations } from "next-intl";
import "./style.scss";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

const defaultValues = {
  name: "",
  email: "",
  phone_number: "",
  agree: false,
};

const ContactForm = () => {
  const t = useTranslations();

  const { register, handleSubmit, reset, control, setValue, setError } =
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
      if (
        error instanceof AxiosError &&
        error.response?.data &&
        error.response?.data.errors
      ) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);

        const temp = Object.values(error.response.data.errors);


        toast.error(
          `${
            error.response.data.errors[
              Object.keys(error.response.data.errors)[0]
            ]
          }`
        );
      }
    }
  };

  return (
    <>
      <form>
        <div className="inputs-wrapper">
          <FormInputText
            control={control}
            name="name"
            label={t("pages.contact_us.contact_form.inputs.name.label")}
          />
          <FormInputText
            control={control}
            name="email"
            label={t("pages.contact_us.contact_form.inputs.email.label")}
          />
          <FormInputPhone
            control={control}
            name="phone_number"
            label={t("pages.contact_us.contact_form.inputs.phone.label")}
          />

          <FormInputCheckbox
            name="agree"
            control={control}
            label={
              <p>
                {t("pages.contact_us.contact_form.confidentiality.agree") + " "}

                <span
                  className="highlighted"
                  style={{ textDecoration: "underline" }}
                >
                  {t(
                    "pages.contact_us.contact_form.confidentiality.highlighted"
                  )}
                </span>
              </p>
            }
          />
        </div>

        <Button className="submit-button" onClick={handleSubmit(onSubmit)}>
          {t("pages.contact_us.contact_form.button_submit")}
        </Button>
      </form>
    </>
  );
};

export default ContactForm;
