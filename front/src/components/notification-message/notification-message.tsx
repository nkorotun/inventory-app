import * as Styled from "./notification-message.styles";

interface INotification {
  name?: string;
}

export const NotificationMessage = ({ name }: INotification) => {
  return (
    <Styled.Notification>There are no {name || "users"}</Styled.Notification>
  );
};
