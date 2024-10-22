import { ArrowRight, BookOpen, Trophy, Users } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const CTA = () => {
  return (
    <div className="  w-full flex justify-center align-middle items-center md:py-52 py-20 ">
      <div className="md:w-[70rem] w-80 bg-gradient-to-br from-primary-foreground to-primary-foreground rounded-2xl md:p-24 p-4 flex flex-col justify-center align-middle items-start    ">
        <span className="md:text-7xl text-3xl text-primary font-semibold">
          Unlock Your Potential!
        </span>
        <p className="text-white md:text-xl">
          Join thousands of students achieving their dreams. Start your journey
          to success today!
        </p>

        <div className="flex flex-col md:flex-row gap-5 py-5 text-white w-full">
          <Input
            className="md:w-96 w-full"
            placeholder="Enter Your Email and Connect with us"
          />
          <Button
            className="flex justify-center align-middle items-center"
            variant={"outline"}
          >
            Get Started <ArrowRight className="size-5" />
          </Button>
        </div>
        <div className="flex justify-start align-middle items-start gap-4 text-foreground md:flex-row flex-col   ">
          <div className="flex items-center ">
            <Trophy className="mr-2 h-4 w-4 text-foreground" />
            Top-ranked courses
          </div>
          <div className="flex items-center">
            <Users className="mr-2 h-4 w-4 text-foreground" />
            Expert instructors
          </div>
          <div className="flex items-center">
            <BookOpen className="mr-2 h-4 w-4 text-foreground" />
            Comprehensive study material
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
