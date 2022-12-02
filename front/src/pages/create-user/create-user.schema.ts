
import * as Yup from "yup";
import { ERRORS } from "../../constants/errors";

export const userValidation = Yup.object().shape({
  email: Yup.string()
    .email(ERRORS.emailExample)
    .required(ERRORS.emailRequired),
  password: Yup.string()
    .required(ERRORS.passwordRequired)
    .min(8, ERRORS.passwordToShort)
    .matches(/[a-zA-Z]/, ERRORS.passwordOnlyLatinLetters),
  firstName: Yup.string()
    .required("First Name is Required")
    .matches(/[a-zA-Z]/, ERRORS.validName),
  lastName: Yup.string()
    .required("last Name is Required")
    .matches(/[a-zA-Z]/, ERRORS.validName),
});