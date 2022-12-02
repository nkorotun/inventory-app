import { ContentWrapper } from "../../components/content-wrapper";
import Header from "../../components/header/header";
import { Formik } from "formik";
import { getErrorsState } from "../auth/auth.utils";
import { Input } from "../../components/input";
import { SingleSelect } from "../../components/select/select";
import { userValidation } from "./create-user.schema";
import { useCreateUserState } from "./create-user.state";
import { CreateUserStyles as Styled } from "./create-user.styles";
import { USER_STATUS_OPTIONS } from "../../constants/selectOptions";
import { ISelectOption } from "../settings/settings.state";
import { CustomButton } from "../../components/button";

export const CreateUserPage = () => {
  const {
    permissionLevel,
    permissionOptions,
    isPermissionError,
    selectedStatus,
    companyRoles,
    selectedCompanyRole,
    changePermissionLevel,
    createUser,
    changeStatus,
    changeCompanyRole,
  } = useCreateUserState();

  return (
    <>
      <Header title={"Create User"} description={"Page for Admin"} />
      <ContentWrapper>
        This page is in progress.
        <Formik
          initialValues={{
            email: "",
            password: "",
            firstName: "",
            lastName: "",
          }}
          onSubmit={createUser}
          validationSchema={userValidation}
        >
          {(props) => {
            const { values, touched, errors, handleChange, handleSubmit } =
              props;

            const validate = getErrorsState(errors, touched);
            return (
              <Styled.Form onSubmit={handleSubmit}>
                <Styled.FormWrapper>
                  <Styled.BlockTittle>Basic Information</Styled.BlockTittle>
                  <Styled.InputBlock>
                    <Styled.InputWrapper>
                      <Input
                        id="email"
                        placeholder={"Email"}
                        value={values.email}
                        onChange={handleChange}
                        styles={Styled.fullWidthProp}
                      />
                      <Styled.InputError>
                        {validate("email") ? errors.email : ""}
                      </Styled.InputError>
                    </Styled.InputWrapper>
                    <Styled.InputWrapper>
                      <Input
                        id="password"
                        placeholder={"Password"}
                        value={values.password}
                        onChange={handleChange}
                        type="password"
                        styles={Styled.fullWidthProp}
                      />
                      <Styled.InputError>
                        {validate("password") ? errors.password : ""}
                      </Styled.InputError>
                    </Styled.InputWrapper>
                  </Styled.InputBlock>

                  <Styled.InputBlock>
                    <Styled.InputWrapper>
                      <Input
                        id="firstName"
                        placeholder={"First Name"}
                        value={values.firstName}
                        onChange={handleChange}
                        styles={Styled.fullWidthProp}
                      />
                      <Styled.InputError>
                        {validate("firstName") ? errors.firstName : ""}
                      </Styled.InputError>
                    </Styled.InputWrapper>
                    <Styled.InputWrapper>
                      <Input
                        id="lastName"
                        placeholder={"Last Name"}
                        value={values.lastName}
                        onChange={handleChange}
                        styles={Styled.fullWidthProp}
                      />
                      <Styled.InputError>
                        {validate("lastName") ? errors.lastName : ""}
                      </Styled.InputError>
                    </Styled.InputWrapper>
                  </Styled.InputBlock>

                  <Styled.BlockTittle>Permission Level</Styled.BlockTittle>
                  <Styled.SelectWrapper>
                    <SingleSelect
                      placeholder={"Select Permission level"}
                      defaultValue={permissionLevel}
                      options={permissionOptions}
                      isClearable
                      onChange={changePermissionLevel}
                    />
                  </Styled.SelectWrapper>
                  <Styled.InputError>
                    {isPermissionError ? "This is required field" : ""}
                  </Styled.InputError>

                  <Styled.BlockTittle>
                    Additional Information
                  </Styled.BlockTittle>
                  <Styled.SelectWrapper>
                    <SingleSelect
                      placeholder={"Select Status"}
                      options={USER_STATUS_OPTIONS}
                      defaultValue={selectedStatus}
                      onChange={changeStatus}
                    />
                  </Styled.SelectWrapper>

                  <Styled.SelectWrapper>
                    <SingleSelect
                      placeholder={"Select Company Role"}
                      options={companyRoles.map((el: ISelectOption) => {
                        return { label: el.name, value: el.id };
                      })}
                      defaultValue={selectedCompanyRole}
                      isClearable
                      onChange={changeCompanyRole}
                    />
                  </Styled.SelectWrapper>
                  <CustomButton label={"Confirm"} type="submit" />
                </Styled.FormWrapper>
              </Styled.Form>
            );
          }}
        </Formik>
      </ContentWrapper>
    </>
  );
};
