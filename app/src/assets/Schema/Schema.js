import * as yup from "yup";

export const schema = yup.object().shape({
  username: yup
    .string()
    .required("*Please enter your username to login")
    .min(2, "*Your username must contain at least 2 characters")
    .max(15, "*Your username must contain a maximum of 15 characters"),
  password: yup
    .string()
    .required("*Please enter your personal code to enter")
    .min(3, "*kodeord skal indeholde minimum 4 karakterer")
    .max(20, "*kodeord skal indeholde maximum 20 karakterer"),
});
