import { Route, Routes } from "react-router-dom";
import "./App.css";

import JEE from "./JEE"; // Import JEE component
import LandingPage from "./Landingpage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />{" "}
      <Route path="/JEE" element={<JEE />} />
    </Routes>
  );
}

export default App;
