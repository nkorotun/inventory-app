import { FC } from "react";
import { ContentWrapper } from "../../components/content-wrapper";
import Header from "../../components/header/header";
import { EditEquipment } from "./edit";
import { IDetails, useEquipmentDetailsState } from "./equipment-details.state";

export const EquipmentDetailsPage: FC<IDetails> = () => {
  const { isEdit, equipment, changeEditMode } = useEquipmentDetailsState();

  return (
    <>
      <Header title={"Profile"} description={"Page For Manager and Admin"} />
      <ContentWrapper>
        {isEdit ? (
          <EditEquipment equipment={equipment} close={changeEditMode} />
        ) : (
          <div style={{ backgroundColor: "#c2c2c220" }}>
            <button onClick={changeEditMode}>Edit</button>
            <p
              style={{
                textDecoration: "underline",
                fontWeight: "bold",
                fontSize: "24px",
              }}
            >
              {equipment.name}
            </p>
            <p style={{ fontSize: 18, color: "#33333380" }}>
              Price: {equipment.price}
            </p>
            <p>
              Distributor:
              {equipment.distributor || "No Distributor"}
            </p>
            <p>Status: {equipment.status}</p>
            <p>Type: {equipment.type?.name}</p>
            <p>Description: {equipment.description || "No Description"}</p>
          </div>
        )}
      </ContentWrapper>
    </>
  );
};
