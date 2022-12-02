import * as Yup from "yup";
import { ERRORS } from "../../../constants/errors";

export const userValidationSchema = Yup.object().shape({
  email: Yup.string().email(ERRORS.emailExample).required(ERRORS.emailRequired),
  firstName: Yup.string()
    .required("First name is required")
    .matches(/[a-zA-Z]/, ERRORS.passwordOnlyLatinLetters),
  lastName: Yup.string()
    .required("Last name is required")
    .matches(/[a-zA-Z]/, ERRORS.passwordOnlyLatinLetters),
  role: Yup.string()
    .required("Role is Required")
    .matches(/[a-zA-Z]/, ERRORS.passwordOnlyLatinLetters),
  company_role: Yup.string()
    .matches(/[a-zA-Z]/, "Company Role")
    .nullable(),
  status: Yup.string()
    .matches(/[a-zA-Z]/, "Status")
    .nullable(),
});
