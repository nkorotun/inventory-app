import { Formik } from "formik";
import { getErrorsState } from "../../auth/auth.utils";
import { IUser } from "../../../redux/reducers/user";
import { SingleSelect } from "../../../components/select/select";
import { userValidationSchema } from "./edit.schema";
import { EditStyles as Styled } from "./edit.styles";
import { ISelectOption } from "../../settings/settings.state";
import { useEditState } from "./edit.state";
import { CustomButton } from "../../../components/button";
import { Input } from "../../../components/input";
import { USER_STATUS_OPTIONS } from "../../../constants/selectOptions";

export const EditUser = ({
  user,
  close,
}: {
  user: IUser;
  close: () => void;
}) => {
  const {
    companyRoles,
    defaultCompanyRole,
    permissionOptions,
    changeCompanyRole,
    changePermissionRole,
    changeStatus,
    editUser,
  } = useEditState(user);

  return (
    <Formik
      initialValues={{
        firstName: user.name.split(" ")[0],
        lastName: user.name.split(" ")[1],
        email: user.email,
        company_role: user.company_role ? user.company_role.id : null,
        role: user.role,
        status: user.status,
      }}
      onSubmit={editUser}
      validationSchema={userValidationSchema}
    >
      {(props) => {
        const { values, touched, errors, handleChange, handleSubmit } = props;

        const validate = getErrorsState(errors, touched);
        return (
          <Styled.Form onSubmit={handleSubmit}>
            <Styled.FormWrapper>
              <Styled.BlockTittle>Personal info</Styled.BlockTittle>
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
              <Styled.BlockTittle>Additional Information</Styled.BlockTittle>
              <Styled.SelectWrapper>
                <SingleSelect
                  placeholder={"Select Status"}
                  options={USER_STATUS_OPTIONS}
                  defaultValue={{ label: user.status, value: user.status }}
                  onChange={changeStatus}
                />
              </Styled.SelectWrapper>

              <Styled.SelectWrapper>
                <SingleSelect
                  placeholder={"Select Company Role"}
                  options={companyRoles.map((el: ISelectOption) => {
                    return { label: el.name, value: el.id };
                  })}
                  defaultValue={defaultCompanyRole}
                  isClearable
                  onChange={changeCompanyRole}
                />
              </Styled.SelectWrapper>
              <Styled.BlockTittle>Permission level</Styled.BlockTittle>
              <Styled.SelectWrapper>
                <SingleSelect
                  placeholder={"Select Permission Role"}
                  options={permissionOptions}
                  defaultValue={{ label: user.role, value: user.role }}
                  onChange={changePermissionRole}
                />
              </Styled.SelectWrapper>
              <Styled.ButtonBlock>
                <CustomButton type="button" label={"Cancel"} onClick={close} />
                <CustomButton type="submit" label={"Confirm"} />
              </Styled.ButtonBlock>
            </Styled.FormWrapper>
          </Styled.Form>
        );
      }}
    </Formik>
  );
};
