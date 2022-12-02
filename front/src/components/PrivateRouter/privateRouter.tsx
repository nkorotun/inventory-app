import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { RootState} from '../../redux/store';

const PrivateRoute = () => {
  const isSignedIn = useSelector((state: RootState) => state.user.isLogin);


  return (
    <Route
      render={() =>
        isSignedIn  ? (
          <Redirect
            to={{
              pathname: ROUTES.main,
            }}
          />
        ) : (
          <Redirect
            to={{
              pathname: ROUTES.enter,
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
