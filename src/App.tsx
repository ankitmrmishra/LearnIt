import "./App.css";
import CourseDisplay from "./components/CourseDisplay";

import Hero from "./components/Hero";
import Why from "./components/Why";

function App() {
  return (
    <div className="flex flex-col justify-center align-middle items-center  dark bg-background ">
      <Hero />
      <Why />
      <CourseDisplay />
    </div>
  );
}

export default App;
