import "./App.css";
import CourseDisplay from "./components/CourseDisplay";
import CTA from "./components/CTA";
import ExploreCourses from "./components/ExploreCourses";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
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
    </div>
  );
}

export default LandingPage;
