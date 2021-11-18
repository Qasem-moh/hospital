import { Route, Switch } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Triage from "./pages/Triage";
import Triages2 from "./pages/Triages2"
import MainHeader from "./components/MainHeader";
import SignIn from "./pages/SignIn";
import Intake from "./pages/Intake";
import { Dashboard } from "./pages/Dcotors";
import { RouteMiddleware } from "./pages/Routes/RoutesMiddleware";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/Triage">
            <Triage />
          </Route>
          <Route path="/Triage:idd">
            <Triages2 />
          </Route>
          <Route path="/SignIn">
            <SignIn />
          </Route>
          <Route path="/Intake">
            <Intake /> 
          </Route>
          <Route path="/Dashboard">
            <Dashboard />
          </Route>
          {/* <Route path="*">
            <h1>404</h1>
          </Route> */}
        </Switch>
      </main>
    </div>
  );
}

export default App;
