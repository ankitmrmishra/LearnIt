import { ArrowRight, Book, PlayCircle, Users } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";
import image1 from "../assets/karsten-winegeart-v7aIztpSjxw-unsplash.jpg";
import { motion } from "framer-motion";
const Why = () => {
  const [activeTab, setActiveTab] = useState("courses");
  return (
    <div className="bg-foreground w-full h-full py-10 px-7 flex flex-col justify-center align-middle items-center">
      <div className="headingtext flex flex-col justify-center items-center align-middle gap-2">
        <span className="text-7xl font-bold text-muted opacity-50">
          Why Choose Learnit
        </span>
        <p className="text-background">
          Empowering learners with top-notch education for competitive exams and
          skill development.
        </p>
      </div>
      <div className="answer_of_why flex  md:flex-row flex-col justify-center align-middle items-center md:gap-10 gap-3 py-10 w-full ">
        {features.map((items) => (
          <Button
            variant={activeTab === items.id ? "default" : "secondary"}
            onClick={() => setActiveTab(items.id)}
            className="flex items-center space-x-2 md:w-fit w-full"
            key={items.id}
          >
            {items.icon} {items.title}
          </Button>
        ))}
      </div>
      <div className="faeturesDetails w-full flex justify-center align-middle items-center">
        {features.map((feature) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: activeTab === feature.id ? 1 : 0,
              y: activeTab === feature.id ? 0 : 20,
            }}
            transition={{ duration: 0.5 }}
            className={`${
              activeTab === feature.id ? "block md:min-w-[60rem]" : "hidden"
            }`}
          >
            <Card className={"mb-8 "} id={feature.id}>
              <div className="py-5"></div>
              <CardContent className="flex flex-col gap-4">
                <CardHeader className="text-2xl font-semibold ">
                  {feature.title}
                </CardHeader>
                <CardDescription className=" text-xl px-6 ">
                  {feature.description}
                </CardDescription>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {feature.content.map((content, index) => (
                    <div key={index} className="text-center">
                      <div className="relative w-24 h-24 mx-auto mb-2 rounded-full overflow-hidden">
                        <img
                          className=" rounded-full"
                          src={content.image}
                          alt={content.name}
                        />
                      </div>
                      <span>{content.name}</span>{" "}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      <Button
        className="w-full md:w-fit text-foreground flex justify-center align-middle items-center"
        variant={"outline"}
      >
        Enroll Now <ArrowRight />
      </Button>
    </div>
  );
};

export default Why;

const features = [
  {
    id: "courses",
    title: "Comprehensive Courses",
    description:
      "Access a wide range of courses tailored for competitive exams and skill development.",
    icon: <Book className="w-6 h-6" />,
    content: [
      {
        name: "JEE Preparation",
        image: image1,
      },
      { name: "NEET Coaching", image: image1 },
      {
        name: "UPSC Civil Services",
        image: image1,
      },
      { name: "Data Science", image: image1 },
    ],
  },
  {
    id: "faculty",
    title: "Expert Faculty",
    description: "Learn from India's top educators and industry experts.",
    icon: <Users className="w-6 h-6" />,
    content: [
      {
        name: "Dr. Amit Kumar",
        image: image1,
      },
      {
        name: "Prof. Priya Singh",
        image: image1,
      },
      {
        name: "Er. Rajesh Verma",
        image: image1,
      },
      {
        name: "Dr. Sneha Patel",
        image: image1,
      },
    ],
  },
  {
    id: "features",
    title: "Interactive Learning",
    description:
      "Engage with our cutting-edge learning tools and methodologies.",
    icon: <PlayCircle className="w-6 h-6" />,
    content: [
      { name: "Live Classes", image: image1 },
      { name: "Doubt Solving", image: image1 },
      {
        name: "Practice Tests",
        image: image1,
      },
      {
        name: "Personalized Feedback",
        image: image1,
      },
    ],
  },
];
