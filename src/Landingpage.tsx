import "./App.css";
import CourseDisplay from "./components/CourseDisplay";
import CTA from "./components/CTA";
import ExploreCourses from "./components/ExploreCourses";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import { FAQs } from "./components/ui/FAQ";
import Why from "./components/Why";

function LandingPage() {
  return (
    <div className="flex flex-col justify-center align-middle items-center dark bg-background ">
      <Hero />
      <Why />
      <ExploreCourses />

      <CourseDisplay />

      <Testimonials />
      <CTA />
      <div className="w-full md:px-44 py-10 flex flex-col  justify-center items-center align-middle text-start  ">
        <span className="text-7xl font-bold text-white text-center md:py-10  py-3">
          FAQs
        </span>
        <div className=" md:px-24 px-10 w-full text-start py-10 text-black bg-[#dedcff] rounded-xl ">
          {FAQsData.map((faq) => (
            <FAQs key={faq.Question} {...faq} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

const FAQsData = [
  {
    Question: "What courses does LearnIT offer?",
    Answer:
      "LearnIT offers comprehensive coaching for JEE, NEET, SSC, and various other competitive exams with a focus on strong fundamentals and exam-oriented preparation.",
  },
  {
    Question: "What is the duration of each course?",
    Answer:
      "Course durations vary depending on the program. We offer both long-term and short-term courses, ranging from one-year intensive programs to crash courses closer to exam dates.",
  },
  {
    Question: "What is the fee structure for LearnIT courses?",
    Answer:
      "The fees vary based on the course selected. Please contact us directly or visit our website for detailed information on the fee structure and available payment options.",
  },
  {
    Question: "Are there any scholarships available at LearnIT?",
    Answer:
      "Yes, LearnIT provides scholarships based on entrance exams and merit criteria. Eligible students can receive up to 50% off on course fees.",
  },
  {
    Question: "Does LearnIT offer online classes?",
    Answer:
      "Yes, we offer both online and offline classes to ensure students can access high-quality education from anywhere. Our online classes include live sessions, recorded lectures, and interactive study materials.",
  },
  {
    Question: "What is the batch size at LearnIT?",
    Answer:
      "LearnIT maintains small batch sizes to ensure personalized attention for each student, with a typical batch size of 20-30 students.",
  },
  {
    Question: "How are the faculty members at LearnIT selected?",
    Answer:
      "Our faculty consists of experienced educators and industry experts with a proven track record of helping students succeed in competitive exams.",
  },
  {
    Question: "How can I enroll in a course at LearnIT?",
    Answer:
      "To enroll, visit our website and complete the online registration process. Alternatively, you can contact our admissions team for guidance.",
  },
  {
    Question: "What study materials does LearnIT provide?",
    Answer:
      "LearnIT provides comprehensive study materials, including topic-wise notes, mock tests, and previous years’ Question papers to help students prepare effectively.",
  },
  {
    Question: "Is there any refund policy for course fees?",
    Answer:
      "Yes, we have a refund policy under certain conditions. Please refer to our refund policy on the website or contact our support team for more information.",
  },
  {
    Question: "Does LearnIT provide hostel facilities?",
    Answer:
      "Yes, we offer hostel facilities for outstation students with safe and comfortable accommodations near our coaching centers.",
  },
  {
    Question: "Are there any test series for enrolled students?",
    Answer:
      "Yes, LearnIT provides regular test series for all courses to track progress and help students improve their performance.",
  },
];
