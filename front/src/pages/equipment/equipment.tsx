import { ContentWrapper } from "../../components/content-wrapper";
import Header from "../../components/header/header";
import { Icons } from "../../constants/icons";
import { EUserRoles } from "../../constants/roles";
import { useEquipmentState } from "./equipment.state";
import { EquipmentStyles as Styled } from "./equipment.styles";

export const EquipmentPage = () => {
  const { role, equipment, deleteEquipment, createEquipment, goDetails } =
    useEquipmentState();

  return (
    <>
      <Header title={"Equipment"} description={"Page For Manager and Admin"} />
      <ContentWrapper>
        {role !== EUserRoles.user && (
          <Styled.CreateButton onClick={createEquipment}>
            <Icons.Plus width={32} />
          </Styled.CreateButton>
        )}
        {equipment.map((equipment) => {
          return (
            <Styled.EquipmentCardWrapper key={equipment.id}>
              <Styled.EquipmentCard onClick={goDetails(equipment)}>
                <div>
                  <p>{equipment.name}</p>
                  <p>Type: {equipment.type ? equipment.type.name : "none"}</p>
                </div>
                <div>
                  <p>Price: {equipment.price}$</p>
                  <p>Status: {equipment.status}</p>
                </div>
              </Styled.EquipmentCard>
              {role !== EUserRoles.user && (
                <>
                  <Styled.ActionButton
                    onClick={goDetails(equipment, true)}
                  >
                    <Icons.Edit width={32} />
                  </Styled.ActionButton>
                  <Styled.ActionButton onClick={deleteEquipment(equipment.id)}>
                    <Icons.Bucket width={32} />
                  </Styled.ActionButton>
                </>
              )}
            </Styled.EquipmentCardWrapper>
          );
        })}
      </ContentWrapper>
    </>
  );
};
