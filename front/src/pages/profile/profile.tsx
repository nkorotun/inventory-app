import { FC } from "react";
import { ContentWrapper } from "../../components/content-wrapper";
import Header from "../../components/header/header";
import { EditUser } from "./edit/edit";
import { IProfile, useProfileState } from "./profile.state";

export const ProfilePage: FC<IProfile> = () => {
  const { isEdit, user, changeEditMode } = useProfileState();

  return (
    <>
      <Header title={"Profile"} description={"Page For All"} />
      <ContentWrapper>
        {isEdit ? (
          <EditUser user={user} close={changeEditMode} />
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
              {user.name}
            </p>
            <p style={{ fontSize: 18, color: "#33333380" }}>
              email: {user.email}
            </p>
            <p>
              company role:{" "}
              {user.company_role?.name || "Company role is not setted"}
            </p>
            <p>status: {user.status}</p>
            <p>permission level: {user.role}</p>
          </div>
        )}
      </ContentWrapper>
    </>
  );
};
