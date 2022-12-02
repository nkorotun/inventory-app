import styled from "styled-components";
import { COLORS } from "../constants/colors";
import { TextField, DialogActions } from "@material-ui/core";

export const UserCardWrapper = styled.div`
  position: relative;
`;

export const BtnPosition = styled.div`
  position: absolute;
  right:10px;
`;

export const EquipmentList = styled.ul`
  list-style-type: none;
  margin: 0 0 0 5px;
  padding: 0px;
`;

export const ListMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  overflow-y: auto;
`;
export const ListItem = styled.div`
  background: ${COLORS.gray};
  padding: 20px;
  margin: 20px;
  border-radius: 15px;
`;
export const EquipmentItem = styled.div`
  margin-top: 25px;
`;
export const TicketItem = styled.div`
  margin-top: 25px;
`;
export const ListItemText = styled.p`
  font-size: 17px;
  font-weight: 500;
  margin: 5px 0;
  width: 100%;
`;
export const FlexColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FlexRowWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const TitleText = styled.span`
  font-weight: 600;
`;
export const SmallWidthWrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;
export const MenuButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

export const InputWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const DialogActionsStyle = styled(DialogActions)`
  margin-top: 20px;
  width: 100%;
`;

export const ErrorWrapper = styled.div`
  color: ${COLORS.red};
  width: 100%;
  padding-top: 3px;
  padding-bottom: 3px;
  font-size: 12px;
`;

export const DateStyle = styled(TextField)`
  max-width: 194px;
  width: 100%;
  margin: 16px;
`;
