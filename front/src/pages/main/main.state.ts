import { useDispatch } from "react-redux";
import { reset } from "../../redux/reducers/user";

export const useMainState = () => {
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(reset());
  };

  return {
    logOut,
  };
};
