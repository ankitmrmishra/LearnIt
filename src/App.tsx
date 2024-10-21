import "./App.css";

import Hero from "./components/Hero";
import Why from "./components/Why";

function App() {
  return (
    <div className="flex flex-col justify-center align-middle items-center  dark bg-background ">
      <Hero />
      <Why />
    </div>
  );
}

export default App;
