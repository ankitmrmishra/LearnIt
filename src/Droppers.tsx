import ExamsComponent from "./components/ExamsWrapper";

const FoundationCourse = () => {
  return (
    <div>
      <ExamsComponent
        title={"Foundation Online Coaching"}
        Subtitle={
          " Our Foundation coaching programs are expertly designed to navigate the complexity from basics and making your fundation strong. The program balances its focus both in-depth understanding and challenging problem-solving, empowering you with confidence to ace the NEET Exam."
        }
        small_CTA_Tagline={
          " Join the FOUNDATION Batch and the best among your peers!!"
        }
        Exam={" Foundation"}
        Courses={foundationCourses}
        features={foundationFeatures}
        Faq={Foundationfaqdata}
      />
    </div>
  );
};

const foundationCourses = [
  {
    course: "6",
    link: "/foundation/6",
    content:
      "Foundation courses for Class 6 to build strong fundamentals in science and math.",
  },
  {
    course: "7",
    link: "/foundation/7",
    content:
      "Foundation courses for Class 7, focusing on core concepts in preparation for higher studies.",
  },
  {
    course: "8",
    link: "/foundation/8",
    content:
      "Advanced foundation courses for Class 8, enhancing problem-solving and analytical skills.",
  },
  {
    course: "9",
    link: "/foundation/9",
    content:
      "Foundation courses for Class 9, covering important topics for competitive exams like JEE and NEET.",
  },
  {
    course: "10",
    link: "/foundation/10",
    content:
      "Class 10 foundation course aimed at solidifying concepts and preparing for future competitive exams.",
  },
];

export default FoundationCourse;
const foundationFeatures = [
  {
    title: "Expert Tutors",
    description: "Our instructors are experts in foundational education.",
    icon: "UserCheck",
  },
  {
    title: "Structured Curriculum",
    description:
      "Comprehensive content designed to build strong academic foundations.",
    icon: "Book",
  },
  {
    title: "Regular Assessments",
    description: "Frequent assessments to ensure concept clarity and growth.",
    icon: "ClipboardList",
  },
  {
    title: "Interactive Learning",
    description:
      "Engaging sessions that encourage participation and curiosity.",
    icon: "Monitor",
  },
  {
    title: "Progress Analytics",
    description:
      "Personalized performance insights to track your academic growth.",
    icon: "BarChart2",
  },
  {
    title: "Award-Winning Program",
    description:
      "Awarded for excellence in foundational education and student success.",
    icon: "Award",
  },
];

const Foundationfaqdata = [
  {
    Question: "What is the Foundation program offered by LearnIT?",
    Answer:
      "LearnIT's Foundation program is designed to build a strong conceptual base in Mathematics and Science for students in Class 6 to 10, preparing them for competitive exams in the future.",
  },
  {
    Question: "How long is the Foundation preparation course at LearnIT?",
    Answer:
      "The Foundation program typically spans one academic year, with classes designed to complement school curricula while introducing advanced concepts and problem-solving techniques.",
  },
  {
    Question:
      "What is the admission process for the Foundation course at LearnIT?",
    Answer:
      "Admission to the Foundation program is based on a simple application process. Interested students can contact us for more details on eligibility and requirements.",
  },
  {
    Question: "What study materials are provided for Foundation preparation?",
    Answer:
      "LearnIT provides comprehensive study materials, including interactive notes, practice worksheets, quizzes, and mock tests to reinforce learning and ensure thorough preparation.",
  },
  {
    Question: "Are there mock tests available for Foundation students?",
    Answer:
      "Yes, we conduct periodic mock tests to assess students' understanding and readiness, helping them develop effective exam strategies and time management skills.",
  },
  {
    Question:
      "How experienced are the faculty members teaching the Foundation program?",
    Answer:
      "Our Foundation faculty comprises qualified educators with extensive experience in teaching younger students, focusing on engaging and effective learning methods.",
  },
  {
    Question: "Does LearnIT provide online classes for Foundation preparation?",
    Answer:
      "Yes, LearnIT offers both online and offline classes for the Foundation program, including live interactive sessions, recorded lectures, and access to digital study materials.",
  },
  {
    Question: "What is the batch size for the Foundation program?",
    Answer:
      "To ensure personalized attention, LearnIT maintains small batch sizes, typically with 20-30 students per batch for Foundation preparation.",
  },
  {
    Question:
      "Is there a scholarship program available for Foundation aspirants?",
    Answer:
      "Yes, LearnIT offers scholarships for eligible students based on their performance in our entrance tests or academic achievements.",
  },
  {
    Question: "How does LearnIT track the progress of Foundation students?",
    Answer:
      "LearnIT conducts regular assessments and progress reviews to monitor each student's performance, providing personalized feedback and support for improvement.",
  },
  {
    Question:
      "Does LearnIT offer guidance on future academic paths for Foundation students?",
    Answer:
      "Yes, LearnIT provides guidance on future academic options and competitive exam preparations, helping students plan their educational journeys effectively.",
  },
];
