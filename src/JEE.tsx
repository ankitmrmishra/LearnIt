import ExamsComponent from "./components/ExamsWrapper";

const JEE = () => {
  return (
    <div>
      <ExamsComponent
        title={"JEE Online Coaching"}
        Subtitle={
          "Our JEE coaching programs are expertly designed to navigate the complexity of JEE concepts. The program balances its focus on both in-depth understanding and challenging problem-solving, empowering you with confidence to ace the JEE Main and Advanced exams."
        }
        small_CTA_Tagline={
          "JEE is Round the Corner! Join The Crash course fast!!"
        }
        Exam={"JEE"}
        Courses={Courses}
        features={features}
        Faq={JEEfaqdata}
      />
    </div>
  );
};

const Courses = [
  {
    course: "11",
    link: "/11",
    content: "JEE courses to help you excel in engineering entrance exams.",
  },
  {
    course: "12",
    link: "/12",
    content: "NEET courses designed for aspiring medical professionals.",
  },
  {
    course: "12+",
    link: "/12plus",
    content:
      "School courses tailored to build a strong foundation in academics.",
  },
];

const features = [
  {
    title: "Experienced Faculty",
    description:
      "Our faculty comprises experts with years of experience in JEE coaching.",
    icon: "UserCheck",
  },
  {
    title: "Comprehensive Material",
    description:
      "Access to high-quality study material covering all important JEE topics.",
    icon: "Book",
  },
  {
    title: "Mock Tests",
    description:
      "Regular mock tests to track progress and identify improvement areas.",
    icon: "ClipboardList",
  },
  {
    title: "Real-Time Doubt Clearing",
    description:
      "Get immediate help on doubts with our real-time chat support.",
    icon: "MessageCircle",
  },
  {
    title: "Performance Analytics",
    description:
      "In-depth analysis of your performance for targeted improvement.",
    icon: "BarChart2",
  },
  {
    title: "Award-Winning Platform",
    description: "Recognized as a leading platform for online JEE preparation.",
    icon: "Award",
  },
];

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
      "To ensure individual attention, LearnIT maintains small batch sizes, typically 20-30 students per batch for JEE preparation.",
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

export default JEE;
