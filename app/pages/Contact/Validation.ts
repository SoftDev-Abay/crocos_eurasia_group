import { object, string, number, date, InferType, boolean } from "yup";

// +7 (654) 564-65-56

const phoneRegExp = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;

let ContactFormSchema = object({
  name: string()
    .min(2, "minField2")
    .max(50, "maxField50")
    .required("requiredField"),
  email: string()
    .email("email")
    .min(5, "minField5")
    .max(50, "maxField50")
    .required("requiredField"),
  phone_number: string()
    .matches(phoneRegExp, "phone")
    .required("requiredField"),
  agree: boolean()
    .test("is-true", "agree", (value) => value === true)
    .required("requiredField"),
});

export type ContactFormType = InferType<typeof ContactFormSchema>;

export default ContactFormSchema;
