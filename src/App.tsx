import { CircleCheckBig } from "lucide-react";
import "./App.css";
import { Button } from "./components/ui/button";

const stats = ["100+ Courses", "Expert Lectures", "LifeTime Access"];

function App() {
  return (
    <div className="flex justify-center align-middle items-start md:items-center dark bg-background h-screen">
      <section className="herosection text-foreground py-10 px-3 text-start gap-6 md:min-h-[40rem] flex flex-col md:justify-center justify-start align-middle items-start md:items-center md:gap-2">
        <h1 className="maintext md:text-7xl text-4xl font-semibold">
          Unlock Your Potential with{" "}
          <span className="text-primary">Learnit</span>
        </h1>
        <p className="subpara text-muted-foreground md:text-xl text-lg md:w-[40rem] ">
          Discover a world of knowledge with our cutting-edge Learning
          Management System. Learn, grow, and succeed.
        </p>
        <div className="ctabuttons flex md:flex-row flex-col w-full  gap-2 py-5">
          <Button>Get Started</Button>
          <Button variant={"outline"}>Learn More</Button>
        </div>
        <div className="stats flex justify-center align-middle items-center md:gap-3 gap-1 ">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex justify-center align-middle items-center gap-1"
            >
              <CircleCheckBig className="text-primary" />
              <span className="">{stat}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
