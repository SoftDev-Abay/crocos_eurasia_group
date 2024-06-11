import { object, string, number, date, InferType, boolean } from "yup";

// +7 (654) 564-65-56

const phoneRegExp = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;

let ContactFormSchema = object({
  name: string().min(2).max(50).required(),
  email: string().email().min(5).max(50).required(),
  phone_number: string()
    .matches(
      phoneRegExp,
      "Phone number is not valid. Please use the following format: +7 (123) 456-78-90"
    )
    .required(),
  agree: boolean()
    .test("is-true", "You must agree to continue", (value) => value === true)
    .required(),
});

export type ContactFormType = InferType<typeof ContactFormSchema>;

export default ContactFormSchema;
