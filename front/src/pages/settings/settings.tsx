import { CustomButton } from "../../components/button";
import { ContentWrapper } from "../../components/content-wrapper";
import Header from "../../components/header/header";
import { Input } from "../../components/input";
import { SingleSelect } from "../../components/select/select";
import { ISelectOption, useSettingsState } from "./settings.state";
import { SettingsStyles as Styled } from "./settings.styles";

export const SettingsPage = () => {
  const {
    companyRole,
    equipType,
    roleList,
    equipList,
    isDeleteRole,
    isDeleteEquip,
    changeSelectedRole,
    changeSelectedEquip,
    changeCompanyRole,
    changeEquipType,
    createNewRole,
    createNewEquipType,
    deleteRole,
    deleteEquipType,
  } = useSettingsState();

  return (
    <>
      <Header title={"Settings"} description={"Page For Manager and Admin"} />
      <ContentWrapper>
        <p>This page is in progress.</p>
        <Styled.Wrapper>
          <h4>Company Role</h4>
          <Styled.InputWrapper>
            <Input
              id="companyRole"
              placeholder={"Company Role"}
              type="text"
              value={companyRole}
              onChange={(e) => changeCompanyRole(e.target.value)}
              styles={Styled.inputStyles}
            />
            <CustomButton
              label="Create new role"
              onClick={createNewRole}
              styles={Styled.buttonStyles}
            />
          </Styled.InputWrapper>
          <Styled.InputWrapper>
            <Styled.SelectWrapper>
              <SingleSelect
                placeholder={"Select Company Role"}
                options={roleList.map((el: ISelectOption) => {
                  return { label: el.name, value: el.id };
                })}
                onChange={changeSelectedRole}
              />
            </Styled.SelectWrapper>
            <CustomButton
              label="Delete"
              onClick={deleteRole}
              disabled={isDeleteRole}
              styles={Styled.buttonStyles}
            />
          </Styled.InputWrapper>
        </Styled.Wrapper>
        <Styled.Wrapper>
          <h4>Equipment Type</h4>
          <Styled.InputWrapper>
            <Input
              id="equipmentType"
              placeholder={"Equipment Role"}
              type="text"
              value={equipType}
              onChange={(e) => changeEquipType(e.target.value)}
              styles={Styled.inputStyles}
            />
            <CustomButton
              label="Create new type"
              onClick={createNewEquipType}
              styles={Styled.buttonStyles}
            />
          </Styled.InputWrapper>
          <Styled.InputWrapper>
            <Styled.SelectWrapper>
              <SingleSelect
                placeholder={"Select Equipment Type"}
                options={equipList.map((el: ISelectOption) => {
                  return { label: el.name, value: el.id };
                })}
                onChange={changeSelectedEquip}
              />
            </Styled.SelectWrapper>
            <CustomButton
              label="Delete"
              onClick={deleteEquipType}
              disabled={isDeleteEquip}
              styles={Styled.buttonStyles}
            />
          </Styled.InputWrapper>
        </Styled.Wrapper>
      </ContentWrapper>
    </>
  );
};
