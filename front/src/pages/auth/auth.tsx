import { FC } from "react";
import * as Styled from "./auth.styles";
import { CustomButton } from "../../components/button";
import { Input } from "../../components/input";
import { Formik } from "formik";
import { PLACEHOLDERS } from "../../constants/placeholders";
import { useAuthState } from "./auth.state";
import { getErrorsState } from "./auth.utils";

export const Auth: FC<Element> = () => {
  const { login, authValidation } = useAuthState();

  return (
    <Styled.AuthWrapper>
      <Styled.AuthHeader>
        <Styled.HeaderText>Sign In</Styled.HeaderText>
      </Styled.AuthHeader>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={login}
        validationSchema={authValidation}
      >
        {(props) => {
          const { values, touched, errors, handleChange, handleSubmit } = props;

          const validate = getErrorsState(errors, touched);
          return (
            <Styled.AuthForm onSubmit={handleSubmit}>
              <Input
                id="email"
                placeholder={PLACEHOLDERS.email}
                value={values.email}
                onChange={handleChange}
                styles={{ width: "100%" }}
              />
              <Styled.ErrorText>
                {validate("email") && errors.email}
              </Styled.ErrorText>
              <Input
                id="password"
                placeholder={PLACEHOLDERS.password}
                value={values.password}
                onChange={handleChange}
                type="password"
                styles={{ width: "100%" }}
              />
              <Styled.ErrorText>
                {validate("password") && errors.password}
              </Styled.ErrorText>
              <CustomButton type="submit" label="Login" />
            </Styled.AuthForm>
          );
        }}
      </Formik>
    </Styled.AuthWrapper>
  );
};
