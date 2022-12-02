import { authApiServices } from "./auth.api";
import * as Yup from "yup";
import { ERRORS } from "../../constants/errors";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { loginUser, catchErrors } from "../../redux/reducers/user";

export const useAuthState = () => {
  const dispatch = useDispatch();

  const login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const data = {
      email,
      password,
    };

    try {
      const userData = await authApiServices.login(data);
      dispatch(loginUser(userData.data));
    } catch (err: any) {
      dispatch(catchErrors(err.response.data.message));
    }
  };

  const authValidation = Yup.object().shape({
    email: Yup.string()
      .email(ERRORS.emailExample)
      .required(ERRORS.emailRequired),
    password: Yup.string()
      .required(ERRORS.passwordRequired)
      .min(8, ERRORS.passwordToShort)
      .matches(/[a-zA-Z]/, ERRORS.passwordOnlyLatinLetters),
  });

  return {
    login,
    authValidation,
  };
};
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      marginTop: theme.spacing(1.5),
      marginBottom: theme.spacing(2.5),
    },
    marginWithError: {
      marginTop: theme.spacing(1.5),
      marginBottom: theme.spacing(0),
    },
    marginBottom: {
      marginBottom: theme.spacing(2.5),
    },
  })
);
