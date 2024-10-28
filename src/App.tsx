import { Route, Routes } from "react-router-dom";
import "./App.css";

import JEE from "./JEE"; // Import JEE component
import LandingPage from "./Landingpage";
import NEET from "./NEET";
import FoundationCourse from "./Droppers";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />{" "}
      <Route path="/JEE" element={<JEE />} />
      <Route path="/NEET" element={<NEET />} />
      <Route path="/School" element={<FoundationCourse />} />
    </Routes>
  );
}

export default App;
