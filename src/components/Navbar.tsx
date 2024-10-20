import { LibraryBig, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [open, setopen] = useState(false);

  const handleclick = () => {
    setopen(!open);
  };
  return (
    <div className="bg-background dark ">
      <div className="desktop md:flex hidden justify-between align-middle items-center md:px-16 px-3 py-8">
        <div className="logo_part flex justify-center align-middle items-center text-3xl">
          <span className="text-white">
            <LibraryBig className="size-7" />
          </span>
          <span className="text-primary">LearnIt</span>
        </div>
        <div className=" hidden  middlepart text-foreground md:flex justify-between align-middle items-center gap-5">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            to="#courses"
          >
            Courses
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            to="#about"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            to="#testimonials"
          >
            Testimonials
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            to="#faq"
          >
            FAQ
          </Link>
        </div>
      </div>

      <div className="mobileversion md:hidden flex justify-between align-middle items-center flex-col">
        <div className="flex justify-between  w-full align-middle items-center px-3 py-7  ">
          <div className="logo_part flex justify-center align-middle items-center text-3xl ">
            <span className="text-white">
              <LibraryBig className="size-7" />
            </span>
            <span className="text-primary">LearnIt</span>
          </div>
          <div className="navbutton" onClick={() => handleclick()}>
            <Menu className="text-foreground" />
          </div>
        </div>
        {open && (
          <div className=" bg-background  top-16 absolute w-full middlepart text-primary flex flex-col justify-between align-middle items-center gap-10 p-10 space-y-4 mt-4">
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              to="#courses"
            >
              Courses
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              to="#about"
            >
              About
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              to="#testimonials"
            >
              Testimonials
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              to="#faq"
            >
              FAQ
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
