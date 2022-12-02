import { ContentWrapper } from "../../components/content-wrapper";
import Header from "../../components/header/header";
import { Input } from "../../components/input";
import { SingleSelect } from "../../components/select/select";
import { Icons } from "../../constants/icons";
import { EUserRoles } from "../../constants/roles";
import { useUsersState } from "./users.state";
import { UsersStyles as Styled } from "./users.styles";

export const UsersPage = () => {
  const { role, id, allUsers, deleteUser, createUser, goProfile } =
    useUsersState();

  const searchOptions = ["Name", "Email", "Company Role"];

  return (
    <>
      <Header title={"Users"} description={"Page For Manager and Admin"} />

      <ContentWrapper>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
            <div>
              <p>Role</p>
              <ul>
                <li>Admin</li>
                <li>Manager</li>
                <li>User</li>
              </ul>
            </div>
          </div>
          <SingleSelect
            options={searchOptions}
            defaultValue={searchOptions[0]}
            placeholder="Search By"
          />
          <Input placeholder={""} id={"search"} value={""} />
          <Icons.Box width={32} />
          {role === EUserRoles.admin && (
            <Styled.CreateButton onClick={createUser}>
              <Icons.Plus width={32} />
            </Styled.CreateButton>
          )}
        </div>
        {allUsers.map((user) => {
          return user.id !== id ? (
            <Styled.UserCardWrapper key={user.id}>
              <Styled.UserCard onClick={goProfile(user)}>
                <div>
                  <p>{user.name}</p>
                  <p>
                    Company role:{" "}
                    {user.company_role ? user.company_role.name : "none"}
                  </p>
                </div>
                <div>
                  <p>{user.email}</p>
                  <p>Status: {user.status}</p>
                </div>
              </Styled.UserCard>
              {role === EUserRoles.admin && (
                <>
                  <Styled.ActionButton onClick={goProfile(user, true)}>
                    <Icons.Edit width={32} />
                  </Styled.ActionButton>
                  {user.role !== EUserRoles.admin && (
                    <Styled.ActionButton onClick={deleteUser(user.id)}>
                      <Icons.Bucket width={32} />
                    </Styled.ActionButton>
                  )}
                </>
              )}
            </Styled.UserCardWrapper>
          ) : (
            <></>
          );
        })}
      </ContentWrapper>
    </>
  );
};
