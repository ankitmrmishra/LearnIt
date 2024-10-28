import ExamsComponent from "./components/ExamsWrapper";

const NEET = () => {
  return (
    <div>
      <ExamsComponent
        title={"NEET Online Coaching"}
        Subtitle={
          " Our NEET coaching programs are expertly designed to navigate the complexity of NEET concepts. The program balances its focus both in-depth understanding and challenging problem-solving, empowering you with confidence to ace the NEET Exam."
        }
        small_CTA_Tagline={
          " NEET is Round the Corner Join The Crash course fast!!"
        }
        Exam={" NEET"}
        Courses={Courses}
        features={neetFeatures}
        Faq={NEETfaqdata}
      />
    </div>
  );
};

const Courses = [
  {
    course: "11",
    link: "/11", // Updated to include leading slash
    content: "NEET courses to help you excel in medical entrance exams.",
  },
  {
    course: "12",
    link: "/12", // Updated to include leading slash
    content: "NEET courses designed for aspiring medical professionals.",
  },
  {
    course: "12+",
    link: "/12plus", // Updated to include leading slash
    content: "Best way to crack medical exam for Droppers",
  },
];

export default NEET;

const neetFeatures = [
  {
    title: "Top Medical Faculty",
    description:
      "Learn from experienced instructors specializing in NEET coaching.",
    icon: "UserCheck",
  },
  {
    title: "Detailed Study Material",
    description:
      "Access extensive resources covering NEET syllabus comprehensively.",
    icon: "Book",
  },
  {
    title: "Practice Tests",
    description:
      "Regular practice exams to prepare you for the real NEET experience.",
    icon: "ClipboardList",
  },
  {
    title: "24/7 Doubt Resolution",
    description: "Get instant support for your doubts, anytime you need it.",
    icon: "MessageCircle",
  },
  {
    title: "Performance Tracking",
    description: "Track your progress and get insights to improve your scores.",
    icon: "BarChart2",
  },
  {
    title: "National Recognition",
    description: "Trusted by top students across India preparing for NEET.",
    icon: "Award",
  },
];

const NEETfaqdata = [
  {
    Question: "What is the NEET program offered by LearnIT?",
    Answer:
      "LearnIT provides a comprehensive NEET coaching program that emphasizes core concepts in Biology, Chemistry, and Physics, along with effective exam strategies and problem-solving skills.",
  },
  {
    Question: "How long is the NEET preparation course at LearnIT?",
    Answer:
      "The NEET course duration varies. We offer a 2-year program for Class 11 students, a 1-year program for Class 12 students, and a crash course for those needing intensive preparation closer to the exam.",
  },
  {
    Question: "What is the admission process for the NEET course at LearnIT?",
    Answer:
      "Admission to the NEET program can be obtained through a qualifying entrance exam or direct admission based on prior academic performance. For specific details on entrance exams and eligibility, please contact us.",
  },
  {
    Question: "What study materials are provided for NEET preparation?",
    Answer:
      "LearnIT provides extensive study materials, including detailed topic-wise notes, practice questions, mock tests, and previous years' NEET question papers to facilitate effective preparation.",
  },
  {
    Question: "Are there mock tests available for NEET students?",
    Answer:
      "Yes, we conduct regular mock tests to help students evaluate their preparation, identify strengths and weaknesses, and improve their exam-taking skills under timed conditions.",
  },
  {
    Question:
      "How experienced are the faculty members teaching the NEET program?",
    Answer:
      "Our NEET faculty consists of highly qualified and experienced educators who specialize in NEET coaching, with a proven track record of helping students achieve top ranks.",
  },
  {
    Question: "Does LearnIT provide online classes for NEET preparation?",
    Answer:
      "Yes, LearnIT offers both online and offline classes for NEET preparation. Online classes include live interactive sessions, recorded lectures, and access to digital study materials.",
  },
  {
    Question: "What is the batch size for the NEET program?",
    Answer:
      "To ensure personalized attention, LearnIT maintains small batch sizes, typically with 20-30 students per batch for NEET preparation.",
  },
  {
    Question: "Is there a scholarship program available for NEET aspirants?",
    Answer:
      "Yes, LearnIT offers scholarships for NEET aspirants based on performance in our entrance tests or academic achievements, allowing eligible students to receive significant fee waivers.",
  },
  {
    Question: "How does LearnIT track the progress of NEET students?",
    Answer:
      "LearnIT conducts regular assessments, mock tests, and progress reviews to monitor each student’s performance and provide personalized feedback for improvement.",
  },
  {
    Question: "Does LearnIT offer guidance on NEET counseling and admissions?",
    Answer:
      "Yes, LearnIT provides guidance and support during the NEET counseling process to help students make informed decisions regarding college and course selection.",
  },
];
