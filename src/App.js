import { React, useState, useEffect } from "react";

import { Route, Switch } from "react-router-dom";

import Welcome from "./pages/Welcome";
// import Triage from "./pages/Triage(unused)";
// import Triages2 from "./pages/Triages";
import MainHeader from "./components/MainHeader";
import SignIn from "./pages/SignIn";
import Intake from "./pages/Intake";
import { Dashboard } from "./pages/Dcotors";
// import { RouteMiddleware } from "./pages/Routes/RoutesMiddleware";
import Triages from "./pages/Triages";
import RiseLoader from "react-spinners/RiseLoader";
import "./App.css"
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="as">
          {" "}
          <RiseLoader size={80} color={"#CE6591"} loading={loading} />
        </div>
      ) : (
        <div>
          <MainHeader />
          <main>
            <Switch>
              <Route path="/welcome">
                <Welcome />
              </Route>
              <Route path="/Triage">
                <Triages />
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
      )}
    </div>
  );
}

export default App;
