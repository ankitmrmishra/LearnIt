import { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { cn } from "../lib/utils";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <div className="flex flex-col justify-center align-middle items-center gap-32 ">
      <div className="heading flex flex-col p-3 text-center">
        <span className="text-7xl font-bold text-foreground opacity-50 ">
          Our Success Stories
        </span>
        <span className="subpara text-muted-foreground md:text-xl text-lg md:w-[40rem] ">
          This is the story of Few Among Thousands
        </span>
      </div>
      <div className="md:grid grid-cols-3 gap-3 relative overflow-hidden h-[50rem] flex justify-start align-middle items-center  ">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background z-10" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background z-10" />

        <div>
          <TestimonialTab
            initial="0%"
            animate="-100%"
            stories={successStoriesData}
          />
          <TestimonialTab
            initial="0%"
            animate="-100%"
            stories={successStoriesData}
          />
          <TestimonialTab
            className="md:hidden "
            initial="0%"
            animate="-100%"
            stories={successStoriesData}
          />
        </div>
        <div className="-mt-32 hidden md:block">
          <TestimonialTab
            initial="-100%"
            animate="0%"
            stories={successStoriesData}
          />
          <TestimonialTab
            initial="-100%"
            animate="0%"
            stories={successStoriesData}
          />
        </div>
        <div className="hidden md:block">
          <TestimonialTab
            initial="0%"
            animate="-100%"
            stories={successStoriesData}
          />
          <TestimonialTab
            initial="0%"
            animate="-100%"
            stories={successStoriesData}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

interface SuccesStoriesProps {
  id: number;
  name: string;
  exam: string;
  rank?: number;
  year: number;
  institute: string;
  course: string;
  testimonial: string;
  image: string;
  percentile?: number;
}
interface SuccessStoriesdetailProps {
  stories: SuccesStoriesProps[];
  className?: ReactNode;
  initial: string;
  animate: string;
}

const TestimonialTab: React.FC<SuccessStoriesdetailProps> = ({
  stories,
  className,
  initial,
  animate,
}) => {
  return (
    <motion.div
      initial={{ y: initial }}
      animate={{ y: animate }}
      transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      className={cn(className, "flex flex-col gap-2")}
    >
      {stories.map((stories) => (
        <div key={stories.id} className="w-[20rem]">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl flex justify-between align-middle items-center ">
                <span className="">{stories.name}</span>
                <span className="text-sm text-primary">{stories.exam}</span>
              </CardTitle>
              <CardDescription className="flex flex-col text-red-400 ">
                <span>
                  {stories.rank ? "AIR " : "Percentile "}
                  {stories.rank || stories.percentile}, {stories.year}
                </span>
                <span>{stories.institute}</span>
                <span>{stories.course}</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <span>{stories.testimonial}</span>
            </CardContent>
          </Card>
        </div>
      ))}
    </motion.div>
  );
};

const successStoriesData = [
  {
    id: 1,
    name: "Aarav Sharma",
    exam: "JEE Advanced",
    rank: 15,
    year: 2023,
    institute: "IIT Bombay",
    course: "B.Tech in Computer Science",
    testimonial:
      "The structured approach and mock tests provided by the institute were instrumental in my success. The faculty's guidance helped me tackle even the toughest problems with confidence.",
    image: "https://example.com/images/aarav-sharma.jpg",
  },
  {
    id: 2,
    name: "Priya Patel",
    exam: "NEET",
    rank: 28,
    year: 2023,
    institute: "AIIMS Delhi",
    course: "MBBS",
    testimonial:
      "The biology and chemistry modules were exceptionally well-designed. Regular doubt clearing sessions and personalized mentoring played a crucial role in my NEET preparation.",
    image: "https://example.com/images/priya-patel.jpg",
  },
  {
    id: 3,
    name: "Rahul Verma",
    exam: "UPSC CSE",
    rank: 42,
    year: 2022,
    institute: "Indian Administrative Service",
    course: "IAS",
    testimonial:
      "The comprehensive coverage of current affairs and in-depth analysis of UPSC previous year questions gave me an edge. The mock interview sessions boosted my confidence for the personality test.",
    image: "https://example.com/images/rahul-verma.jpg",
  },
];
