import { CourseCardTab } from "./components/ExploreCourses";

const JEE = () => {
  return (
    <div className="bg-background dark text-foreground p-2">
      <div className="mainTextArea ">
        <h1 className="text-4xl leading-tight">JEE Online Coaching</h1>
        <p className="text-muted-foreground py-4">
          Our JEE coaching programs are expertly designed to navigate the
          complexity of JEE concepts. The program balances its focus on both
          in-depth understanding and challenging problem-solving, empowering you
          with confidence to ace the JEE Main and Advanced exams.
        </p>
      </div>
      <div className="smallCTA bg-primary w-full h-20 rounded-xl text-2xl text-center p-2 mb-4 font-semibold text-background">
        JEE is Round the Corner Join The Crash course fast!!
      </div>
      <div className="coursecarddetail flex flex-col justify-center align-middle items-center gap-4">
        <h1 className="text-3xl leading-tight text-start font-semibold">
          Online Coaching For JEE
        </h1>
        <div className="flex md:flex-row flex-col justify-center align-middle items-center gap-7 w-full">
          {Courses.map((course, index) => (
            <CourseCardTab key={index} {...course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JEE;

const Courses = [
  {
    course: "11",
    link: "/11", // Updated to include leading slash
    content: "JEE courses to help you excel in engineering entrance exams.",
  },
  {
    course: "12",
    link: "/12", // Updated to include leading slash
    content: "NEET courses designed for aspiring medical professionals.",
  },
  {
    course: "12plus",
    link: "/12plus", // Updated to include leading slash
    content:
      "School courses tailored to build a strong foundation in academics.",
  },
];
