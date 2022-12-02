import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MainPage } from "./pages/main";
import PrivateRoute from "./components/PrivateRouter/privateRouter";
import { Auth } from "./pages/auth";
import { ROUTES } from "./constants/routes";
import { Provider } from "react-redux";
import { persistOr, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { PopUp } from "./components/pop-up";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistOr}>
          <PopUp />
          <Router>
            <PrivateRoute />
            <Switch>
              <Route path={ROUTES.enter} exact component={Auth} />
              <Route path={ROUTES.main} component={MainPage} />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
