import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useDispatch, useSelector } from "react-redux";
import { closePopup } from "../../redux/reducers/user";
import { closePopupEquipment } from "../../redux/reducers/equipment";
import { RootState, useAppSelector } from "../../redux/store";

export const PopUp = () => {
  const dispatch = useDispatch();
  let isErorrCatched:boolean | undefined;
  let catchedErrorMessage:string | undefined;
  const { isError, isCreated, error } = useSelector(
    (state: RootState) => state.user
  );

  const isErorrEquip = useAppSelector((state) => state.equipment.isError);
  const erorrMessageEquip = useAppSelector(
    (state) => state.equipment.errorMessage
  );
  const closeSnackBar = () => {
    dispatch(closePopup());
    dispatch(closePopupEquipment())
  };
  isErorrCatched = isError || isErorrEquip;
  catchedErrorMessage = error.message || erorrMessageEquip.message 

 
  return (
    <>
      <Snackbar
        autoHideDuration={1500}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={isErorrCatched || isCreated}
        onClose={closeSnackBar}
      >
        <Alert
          severity={
            (isErorrCatched ) ? "error" : "success"
          }
        >
          { (isErorrCatched )  ? (catchedErrorMessage) : "Successfully created!"}
        </Alert>
      </Snackbar>
    </>
  );
};
