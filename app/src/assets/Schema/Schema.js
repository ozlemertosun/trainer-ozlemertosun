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
    .min(3, "*Passwrod must contain at least 3 characters")
    .max(10, "*Password must contain a maximum of 10 characters"),
});
