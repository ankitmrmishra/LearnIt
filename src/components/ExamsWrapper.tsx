import { CourseCardTab } from "./ExploreCourses";
import KnowledgeSVG from "../assets/Svgs/undraw_road_to_knowledge_m8s0.svg";
import { Feature, FeaturesSection } from "./ui/Features";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Student1 from "../assets/Testimonial/Cheerful Boy in Cityscape Illustration.jpeg";
import Student2 from "../assets/Testimonial/Contemplative Young Person with Vintage Attire.jpeg";
import Student3 from "../assets/Testimonial/Contemplative Young Woman with Glasses.jpeg";
import Student4 from "../assets/Testimonial/Serenity in the City.jpeg";
import Student5 from "../assets/Testimonial/Serious Young Person in Checkered Shirt.jpeg";
import Student6 from "../assets/Testimonial/Stylized Schoolboy Character.jpeg";

import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { FAQs } from "./ui/FAQ";

interface Courses {
  course: string;
  link: string;
  content: string;
}
interface FAQData {
  Question: string;
  Answer: string;
}

interface ExamProps {
  title: string;
  Subtitle: string;
  small_CTA_Tagline: string;
  Exam: string;
  Courses: Courses[];
  features: Feature[];
  Faq: FAQData[];
}
const ExamsComponent = ({
  title,
  Subtitle,
  small_CTA_Tagline,
  Exam,
  Courses,
  features,
  Faq,
}: ExamProps) => {
  return (
    <div className="bg-background dark text-foreground p-2 flex flex-col justify-center items-center align-middle py-14">
      <div className="mainTextArea md:px-48 text-center ">
        <h1 className="md:text-7xl text-5xl leading-tight font-bold  bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-white">
          {title}
        </h1>
        <p className="text-muted-foreground py-4">{Subtitle}</p>
      </div>
      <div className="smallCTA  bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 md:w-[60%] w-full max-h-max min-h-44 rounded-xl text-2xl text-center p-2 mb-4 font-semibold text-background relative flex md:flex-row flex-col justify-center align-middle items-center md:gap-20 overflow-clip ">
        <span className=" bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 font-bold">
          {" "}
          {small_CTA_Tagline}
        </span>
        <div className="">
          <img
            src={KnowledgeSVG}
            alt=""
            className="object-contain absolute top-0 right-0 hidden md:block "
          />
        </div>
      </div>
      <div className="coursecarddetail flex flex-col justify-center align-middle items-center gap-4">
        <h1 className="text-3xl leading-tight text-start font-semibold">
          Online Coaching For {Exam}
        </h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 ">
          {Courses.map((course, index) => (
            <CourseCardTab key={index} {...course} />
          ))}
        </div>
      </div>
      <FeaturesSection examName={Exam} features={features} />
      <TestimonialCarousel />
      <div className="w-full md:px-44 py-10 flex flex-col  justify-center items-center align-middle text-start  ">
        <span className="text-7xl font-bold text-white text-center md:py-10  py-3">
          FAQs
        </span>
        <div className=" md:px-24 px-10 w-full text-start py-10 text-black bg-[#dedcff] rounded-xl ">
          {Faq.map((faq) => (
            <FAQs key={faq.Question} {...faq} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExamsComponent;

const testimonials = [
  {
    name: "Aarav Patel",
    rank: "AIR 17",
    quote: "The structured approach and mock tests were crucial to my success.",
    image: Student1,
  },
  {
    name: "Priya Singh",
    rank: "AIR 52",
    quote:
      "The faculty's guidance helped me tackle even the toughest problems.",
    image: Student2,
  },
  {
    name: "Rahul Sharma",
    rank: "AIR 108",
    quote: "The study material was comprehensive and well-organized.",
    image: Student4,
  },
  {
    name: "Ananya Gupta",
    rank: "AIR 235",
    quote: "Regular practice sessions boosted my confidence significantly.",
    image: Student3,
  },
  {
    name: "Vikram Reddy",
    rank: "AIR 471",
    quote: "The personalized attention helped me improve my weak areas.",
    image: Student5,
  },
  {
    name: "Ankit Mishra",
    rank: "AIR 471",
    quote: "The personalized attention helped me improve my weak areas.",
    image: Student6,
  },
];

export function TestimonialCarousel() {
  return (
    <Carousel
      opts={{
        align: "center",
      }}
      className="w-full max-w-5xl mx-auto"
    >
      <h2 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white py-4">
        Success Stories
      </h2>
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
          >
            <Card className="bg-primary/5">
              <CardContent className="flex flex-col items-center justify-between p-6 h-full">
                <Avatar className="w-16 h-16 mb-4">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <blockquote className="text-sm text-center mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="text-center">
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-primary font-medium">
                    {testimonial.rank}
                  </p>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="right-1/2 -bottom-7 absolute">
        <CarouselPrevious className="" />
        <CarouselNext />
      </div>
    </Carousel>
  );
}
