import * as Yup from "yup";
import { ERRORS } from "../../../constants/errors";

export const equipmentValidationSchema = Yup.object().shape({
    name: Yup.string()
      .required(ERRORS.validName)
      .matches(/[a-zA-Z0-9]/, "Only letters and numbers"),
    description: Yup.string().matches(/[a-zA-Z0-9]/, "Only letters and numbers"),
    price: Yup.number().required("Price is required").positive("Enter valid price"),
    distributor: Yup.string().matches(/[a-zA-Z0-9]/, ERRORS.validName),
  });
