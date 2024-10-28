import { CourseCardTab } from "./components/ExploreCourses";
import KnowledgeSVG from "./assets/Svgs/undraw_road_to_knowledge_m8s0.svg";
import { FeaturesSectionDemo } from "./components/ui/Features";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import Student1 from "./assets/Testimonial/Cheerful Boy in Cityscape Illustration.jpeg";
import Student2 from "./assets/Testimonial/Contemplative Young Person with Vintage Attire.jpeg";
import Student3 from "./assets/Testimonial/Contemplative Young Woman with Glasses.jpeg";
import Student4 from "./assets/Testimonial/Serenity in the City.jpeg";
import Student5 from "./assets/Testimonial/Serious Young Person in Checkered Shirt.jpeg";
import Student6 from "./assets/Testimonial/Stylized Schoolboy Character.jpeg";

import { Card, CardContent } from "./components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/ui/carousel";
import { FAQs } from "./components/ui/FAQ";
const JEE = () => {
  return (
    <div className="bg-background dark text-foreground p-2 flex flex-col justify-center items-center align-middle py-14">
      <div className="mainTextArea md:px-48 text-center ">
        <h1 className="text-7xl leading-tight font-bold  bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-white">
          JEE Online Coaching
        </h1>
        <p className="text-muted-foreground py-4">
          Our JEE coaching programs are expertly designed to navigate the
          complexity of JEE concepts. The program balances its focus on both
          in-depth understanding and challenging problem-solving, empowering you
          with confidence to ace the JEE Main and Advanced exams.
        </p>
      </div>
      <div className="smallCTA  bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 md:w-[60%] w-full max-h-max min-h-44 rounded-xl text-2xl text-center p-2 mb-4 font-semibold text-background relative flex md:flex-row flex-col justify-center align-middle items-center md:gap-20 overflow-clip ">
        <span className=" bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 font-bold">
          {" "}
          JEE is Round the Corner Join The Crash course fast!!
        </span>
        <div className="">
          <img
            src={KnowledgeSVG}
            alt=""
            className="object-contain absolute top-0 right-0  "
          />
        </div>
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
      <FeaturesSectionDemo />
      <TestimonialCarousel />
      <div className="w-full md:px-44 py-10 flex flex-col  justify-center items-center align-middle text-start  ">
        <span className="text-7xl font-bold text-white text-center md:py-10  py-3">
          FAQs
        </span>
        <div className=" md:px-24 px-10 w-full text-start py-10 text-black bg-[#dedcff] rounded-xl ">
          {JEEfaqdata.map((faq) => (
            <FAQs key={faq.Question} {...faq} />
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
    course: "12+",
    link: "/12plus", // Updated to include leading slash
    content:
      "School courses tailored to build a strong foundation in academics.",
  },
];

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

const JEEfaqdata = [
  {
    Question: "What is the JEE program offered by LearnIT?",
    Answer:
      "LearnIT offers a structured JEE coaching program covering both JEE Main and Advanced with a focus on fundamental concepts, problem-solving skills, and exam strategies.",
  },
  {
    Question: "How long is the JEE preparation course at LearnIT?",
    Answer:
      "The JEE course duration varies. We offer a 2-year program for Class 11 students, a 1-year program for Class 12 students, and a crash course for those seeking intensive preparation closer to the exam.",
  },
  {
    Question: "What is the admission process for the JEE course at LearnIT?",
    Answer:
      "Admission to the JEE program requires either a qualifying entrance exam or a direct admission based on previous academic performance. Contact us for specific details on entrance exams and eligibility.",
  },
  {
    Question: "What study materials are provided for JEE preparation?",
    Answer:
      "LearnIT provides detailed study materials, including topic-wise notes, practice questions, mock tests, and previous years’ JEE question papers to aid in effective preparation.",
  },
  {
    Question: "Are there mock tests available for JEE students?",
    Answer:
      "Yes, regular mock tests are conducted to help students assess their preparation, identify strengths and weaknesses, and improve exam-taking skills under timed conditions.",
  },
  {
    Question:
      "How experienced are the faculty members teaching the JEE program?",
    Answer:
      "Our JEE faculty comprises highly qualified and experienced educators who specialize in JEE coaching. They have a successful track record of guiding students to top ranks.",
  },
  {
    Question: "Does LearnIT provide online classes for JEE preparation?",
    Answer:
      "Yes, LearnIT offers both online and offline classes for JEE preparation. Online classes include live interactive sessions, recorded lectures, and access to digital study materials.",
  },
  {
    Question: "What is the batch size for the JEE program?",
    Answer:
      "To ensure individual attention, LearnIT maintains small batch sizes, with typically 20-30 students per batch for JEE preparation.",
  },
  {
    Question: "Is there a scholarship program available for JEE aspirants?",
    Answer:
      "Yes, LearnIT offers scholarships for JEE aspirants based on performance in our entrance tests or academic achievements. Eligible students can receive significant fee waivers.",
  },
  {
    Question: "How does LearnIT track the progress of JEE students?",
    Answer:
      "LearnIT conducts regular assessments, mock tests, and progress reviews to monitor each student’s performance and provide personalized feedback for improvement.",
  },
  {
    Question: "Does LearnIT offer guidance on JEE counseling and admissions?",
    Answer:
      "Yes, LearnIT provides guidance and support during the JEE counseling process to help students make informed decisions regarding college and course selection.",
  },
];
