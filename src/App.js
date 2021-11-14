import { Route, Routes } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Triage from "./pages/Triage";
import MainHeader from "./components/MainHeader";
import SignIn from "./pages/SignIn";
import Intake from "./pages/Intake";
function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/Triage" element={<Triage />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Intake" element={<Intake />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

