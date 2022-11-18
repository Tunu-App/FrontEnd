import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Signup from "./Pages/Signup";
import SignUpWithPhoneOrEmail from "./Pages/SignUpWithPhoneOrEmail";
import PasswordPage from "./Pages/PasswordPage";
import VerifyPhoneNumber from "./Pages/VerifyPhoneNumber";
import Login from "./Pages/Login";
import GettingStartedPage from "./Pages/GettingStartedPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path={"/getting-started"} exact>
            <GettingStartedPage />
          </Route>
          <Route path={"/login"} exact>
            <Login />
          </Route>
          <Route path={"/signup"} exact>
            <Signup />
          </Route>
          <Route path={"/signup-contact-details"} exact>
            <SignUpWithPhoneOrEmail />
          </Route>
          <Route path={"/signup-password"} exact>
            <PasswordPage />
          </Route>
          <Route path={"/signup-verify-phone"} exact>
            <VerifyPhoneNumber />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
