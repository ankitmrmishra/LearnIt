import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Navbar from "./components/Navbar.tsx";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Footer from "./components/Footer.tsx";

createRoot(document.getElementById("root")!).render(
  <RecoilRoot>
    <BrowserRouter>
      <Navbar />
      <App />
      <Footer />
    </BrowserRouter>
  </RecoilRoot>
);
