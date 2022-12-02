import { ContentWrapper } from "../../components/content-wrapper";
import Header from "../../components/header/header";
import { Formik } from "formik";
import { getErrorsState } from "../auth/auth.utils";
import { Input } from "../../components/input";
import { CreateEquipmentStyles as Styled } from "./create-equipment.styles";
import { equipmentValidation } from "./create-equipment.schema";
import { TextArea } from "../../components/text-area";
import { useCreateEquipmentState } from "./create-equipment.state";
import { SingleSelect } from "../../components/select/select";
import { CustomButton } from "../../components/button";

export const CreateEquipmentPage = () => {
  const {
    equipmentTypes,
    statusOptions,
    selectedEquipmentType,
    changeEquipmentType,
    changeStatus,
    createEquipment,
  } = useCreateEquipmentState();
  return (
    <>
      <Header
        title={"Create Equipment"}
        description={"Page for Admin and Manager"}
      />
      <ContentWrapper>
        <Formik
          initialValues={{
            name: "",
            description: "",
            price: 0,
            distributor: "",
          }}
          onSubmit={createEquipment}
          validationSchema={equipmentValidation}
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
                        id="name"
                        placeholder={"Name"}
                        value={values.name}
                        onChange={handleChange}
                        styles={Styled.fullWidthProp}
                      />
                      <Styled.InputError>
                        {validate("name") ? errors.name : ""}
                      </Styled.InputError>
                    </Styled.InputWrapper>
                    <Styled.InputWrapper>
                      <Input
                        id="price"
                        placeholder={"Price"}
                        value={values.price}
                        onChange={handleChange}
                        styles={Styled.fullWidthProp}
                        type="number"
                      />
                      <Styled.InputError>
                        {validate("price") ? errors.price : ""}
                      </Styled.InputError>
                    </Styled.InputWrapper>
                  </Styled.InputBlock>
                  <Styled.BlockTittle>
                    Additional Information
                  </Styled.BlockTittle>
                  <Input
                    id="distributor"
                    placeholder={"Distributor"}
                    value={values.distributor}
                    onChange={handleChange}
                    styles={Styled.fullWidthProp}
                  />
                  <Styled.InputError>
                    {validate("distributor") ? errors.distributor : ""}
                  </Styled.InputError>

                  <TextArea
                    id="description"
                    placeholder={"Description"}
                    value={values.description}
                    onChange={handleChange}
                    styles={Styled.fullWidthProp}
                  />
                  <Styled.InputError>
                    {validate("description") ? errors.description : ""}
                  </Styled.InputError>
                  <Styled.SelectWrapper>
                    <SingleSelect
                      placeholder={"Equipment Type"}
                      options={equipmentTypes}
                      defaultValue={selectedEquipmentType}
                      onChange={changeEquipmentType}
                      isClearable
                    />
                  </Styled.SelectWrapper>
                  <Styled.SelectWrapper>
                    <SingleSelect
                      placeholder={"Status"}
                      options={statusOptions}
                      defaultValue={statusOptions[0]}
                      onChange={changeStatus}
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
