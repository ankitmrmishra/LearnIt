import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Link, To } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Courses = [
  {
    course: "JEE",
    link: "/JEE", // Updated to include leading slash
    content: "JEE courses to help you excel in engineering entrance exams.",
  },
  {
    course: "NEET",
    link: "/NEET", // Updated to include leading slash
    content: "NEET courses designed for aspiring medical professionals.",
  },
  {
    course: "School",
    link: "/School", // Updated to include leading slash
    content:
      "School courses tailored to build a strong foundation in academics.",
  },
];

const ExploreCourses = () => {
  return (
    <div className="flex flex-col justify-center align-middle items-center gap-3 p-3 w-full md:px-36">
      <span className="text-7xl  text-primary font-bold">
        Checkout our Courses
      </span>
      <p className="text-white md:text-xl">
        Join thousands of students achieving their dreams. Start your journey to
        success today!
      </p>
      <div className="flex md:flex-row flex-col justify-center align-middle items-center gap-7 w-full">
        {Courses.map((course, index) => (
          <CourseCardTab key={index} {...course} />
        ))}
      </div>
    </div>
  );
};

interface CourseCardTabProps {
  course: string;
  link: To;
  content: string;
}

export const CourseCardTab: React.FC<CourseCardTabProps> = ({
  course,
  link,
  content,
}) => {
  return (
    <div className="w-full">
      <Card className="md:w-96 w-full md:h-full flex flex-col justify-between align-middle items-start">
        <CardHeader>
          <CardTitle className="text-3xl">{course}</CardTitle>
        </CardHeader>
        <CardContent>{content}</CardContent>
        <CardFooter>
          <Link
            to={link}
            className="flex text-lg justify-center items-center align-middle text-primary"
          >
            {course} {/* Display course name instead of the link */}
            <ArrowRight />
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ExploreCourses;
