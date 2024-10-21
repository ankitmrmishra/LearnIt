import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image1 from "../assets/image.png";
import { ArrowRight, Star, Users } from "lucide-react";
import { Button } from "./ui/button";

export default function CourseDisplay() {
  return (
    <div className="p-10 flex flex-col justify-center align-middle items-center gap-3">
      <div className="headingtext flex flex-col justify-center items-center align-middle gap-2">
        <span className="text-7xl font-bold text-foreground opacity-50">
          Our Top Selling Courses
        </span>
        <p className="text-muted-foreground">
          Master Competitive Exams & Unlock Your Potential with Expert-Led
          Courses in JEE, NEET, UPSC, and More!
        </p>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 md:p-10 gap-5 ">
        {courses.map((course) => (
          <Card
            className={
              course.id > 3
                ? "md:min-w-[25rem] flex flex-col justify-between align-middle"
                : "md:min-w-[25rem] flex flex-col justify-between align-middle "
            }
          >
            {" "}
            <img src={course.image} />
            <CardHeader>
              <CardTitle>{course.name}</CardTitle>
              <CardDescription>{course.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3 ">
              <span className="text-orange-500 font-medium">
                {course.instructor}
              </span>
              <div className="flex justify-between items-center align-middle">
                <span className="text-sm flex justify-center align-middle items-center gap-1">
                  {course.rating}
                  <Star className="text-orange-300 size-4" />
                </span>
                <span className="text-sm flex justify-center align-middle items-center gap-1">
                  {course.students_enrolled}
                  <Users className="text-blue-500 size-4" />
                </span>
              </div>
              <div className="flex flex-col">
                {course.features.map((features, index) => (
                  <li key={index}>{features}</li>
                ))}
              </div>
              <div className="flex justify-between items-center align-middle mt-2">
                <span className="bg-green-500/80 p-1  rounded-lg">
                  {course.duration}
                </span>
                <span className="text-primary">{course.price}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="py-5">
        <Button className="">
          Enroll For More <ArrowRight />
        </Button>
      </div>
    </div>
  );
}

const courses = [
  {
    id: 1,
    name: "Complete JEE Main & Advanced Preparation",
    category: "Engineering",
    description:
      "Comprehensive course covering Physics, Chemistry, and Mathematics for JEE Main & Advanced with detailed video lectures, practice tests, and mentorship.",
    duration: "12 months",
    price: "₹50,000",
    image: Image1,
    instructor: "Dr. A. Sharma",
    rating: 4.8,
    students_enrolled: 5000,
    features: [
      "500+ hours of video lectures",
      "Mock tests & past paper discussions",
      "Live doubt clearing sessions",
    ],
  },
  {
    id: 2,
    name: "NEET 2024 Crash Course",
    category: "Medical",
    description:
      "An intensive crash course for NEET aspirants, focused on quick revision of key concepts, mock tests, and question-solving strategies.",
    duration: "6 months",
    price: "₹35,000",
    image: Image1,
    instructor: "Dr. R. Verma",
    rating: 4.9,
    students_enrolled: 3000,
    features: [
      "300+ hours of revision content",
      "Topic-wise mock tests",
      "Regular live Q&A sessions",
    ],
  },
  {
    id: 3,
    name: "Class 12 CBSE Board Preparation",
    category: "School",
    description:
      "Detailed course for Class 12 students covering Physics, Chemistry, Mathematics, and Biology based on the CBSE curriculum with a focus on board exams.",
    duration: "10 months",
    price: "₹40,000",
    image: Image1,
    instructor: "Prof. K. Singh",
    rating: 4.7,
    students_enrolled: 2500,
    features: [
      "Live and recorded classes",
      "CBSE sample papers & tests",
      "Board exam tips and strategies",
    ],
  },
  {
    id: 4,
    name: "UPSC Civil Services Foundation Course",
    category: "Government Exams",
    description:
      "Foundation course for UPSC aspirants, covering prelims, mains, and interview preparation with detailed material for GS, CSAT, and optional subjects.",
    duration: "18 months",
    price: "₹60,000",
    image: Image1,
    instructor: "Mr. P. Chaturvedi",
    rating: 4.9,
    students_enrolled: 1200,
    features: [
      "Detailed GS & CSAT syllabus coverage",
      "Mains answer writing practice",
      "Interview preparation and mentoring",
    ],
  },
  {
    id: 5,
    name: "CAT 2024 Comprehensive Course",
    category: "Management",
    description:
      "Complete course for CAT preparation, including quantitative aptitude, logical reasoning, data interpretation, and verbal ability with mock tests and analysis.",
    duration: "8 months",
    price: "₹45,000",
    image: Image1,
    instructor: "Ms. S. Nair",
    rating: 4.8,
    students_enrolled: 2200,
    features: [
      "500+ hours of learning material",
      "Full-length mock tests with analysis",
      "Personalized performance reviews",
    ],
  },
  {
    id: 6,
    name: "Join LearnIt Premium",
    category: "Membership",
    description:
      "Unlock unlimited access to all our premium courses, live mentoring sessions, and exclusive study materials. Boost your learning potential and achieve your career goals faster!",
    duration: "Annual subscription",
    price: "₹56,999/year",

    instructor: "Team LearnIt",
    rating: 4.9,
    students_enrolled: 50000,
    features: [
      "Access to 1000+ premium courses",
      "Weekly live Q&A sessions with experts",
      "Personalized learning path and progress tracking",
    ],
  },
];
