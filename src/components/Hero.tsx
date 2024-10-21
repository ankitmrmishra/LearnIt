import { CircleCheckBig } from "lucide-react";
import { Button } from "./ui/button";
const stats = ["100+ Courses", "Expert Lectures", "LifeTime Access"];

const Hero = () => {
  return (
    <div>
      <section className="herosection md:p-32 p-5 px-7 text-foreground h-full md:max-h-[50rem] max-h-[40rem] overflow-clip md:text-center text-start gap-6  flex flex-col  justify-start align-middle items-start md:items-center md:gap-2">
        <h1 className="maintext md:text-7xl text-4xl font-semibold">
          Unlock Your Potential with{" "}
          <span className="text-primary">Learnit</span>
        </h1>
        <p className="subpara text-muted-foreground md:text-xl text-lg md:w-[40rem] ">
          Discover a world of knowledge with our cutting-edge Learning
          Management System. Learn, grow, and succeed.
        </p>
        <div className="ctabuttons flex md:flex-row flex-col w-full   justify-center items-center align-middle  gap-2 py-5">
          <Button className="w-full md:w-fit">Get Started</Button>
          <Button className="w-full md:w-fit" variant={"outline"}>
            Learn More
          </Button>
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

        <div className="rounded-[38px] border-8 border-primary mt-10">
          <img
            className="rounded-[30px]"
            style={{
              perspective: "1000px",
            }}
            src="/src/assets/WhatsApp Image 2024-10-21 at 02.58.15_6886f7a1.jpg"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
