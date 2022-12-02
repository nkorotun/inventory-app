import { Formik } from "formik";
import { getErrorsState } from "../../auth/auth.utils";
import { SingleSelect } from "../../../components/select/select";
import { equipmentValidationSchema } from "./edit.schema";
import { EditStyles as Styled } from "./edit.styles";
import { ISelectOption } from "../../settings/settings.state";
import { useEditState } from "./edit.state";
import { CustomButton } from "../../../components/button";
import { Input } from "../../../components/input";
import { USER_STATUS_OPTIONS } from "../../../constants/selectOptions";
import { IDetails } from "../equipment-details.state";
import { IEquipment } from "../../../redux/reducers/equipment";
import { TextArea } from "../../../components/text-area";

export const EditEquipment = ({
  equipment,
  close,
}: {
  equipment: IEquipment;
  close: () => void;
}) => {
  const {
    equipmentTypes,
    selectedEquipmentType,
    statusOptions,
    selectedStatus,
    changeEquipmentType,
    changeStatus,
    editEquipment,
  } = useEditState(equipment, close);

  return (
    <Formik
      initialValues={{
        name: equipment.name,
        description: equipment.description,
        price: equipment.price,
        distributor: equipment.distributor,
      }}
      onSubmit={editEquipment}
      validationSchema={equipmentValidationSchema}
    >
      {(props) => {
        const { values, touched, errors, handleChange, handleSubmit } = props;

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
              <Styled.BlockTittle>Additional Information</Styled.BlockTittle>
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
                  defaultValue={
                    equipment.type
                      ? {
                          label: equipment.type?.name,
                          value: equipment.type?.id,
                        }
                      : null
                  }
                  onChange={changeEquipmentType}
                  isClearable
                />
              </Styled.SelectWrapper>
              <Styled.SelectWrapper>
                <SingleSelect
                  placeholder={"Status"}
                  options={statusOptions}
                  defaultValue={{
                    label: equipment.status,
                    value: equipment.status,
                  }}
                  onChange={changeStatus}
                />
              </Styled.SelectWrapper>
              <CustomButton label={"Confirm"} type="submit" />
            </Styled.FormWrapper>
          </Styled.Form>
        );
      }}
    </Formik>
  );
};
