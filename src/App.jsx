import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import SplashScreen from "./Pages/SplashScreen";
import Signup from "./Pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path={"/"} exact>
            <SplashScreen />
          </Route>
          <Route path={"/signup"} exact>
            <Signup />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
