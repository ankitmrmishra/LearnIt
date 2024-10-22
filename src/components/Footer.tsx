import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="mb-6 text-lg font-semibold uppercase">
              Quick Links
            </h2>
            <ul className="space-y-2">
              {["Home", "About Us", "Courses", "Success Stories", "Blog"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-lg font-semibold uppercase">
              Our Courses
            </h2>
            <ul className="space-y-2">
              {[
                "JEE Preparation",
                "NEET Coaching",
                "UPSC Training",
                "Bank Exams",
                "SSC Preparation",
              ].map((course) => (
                <li key={course}>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-lg font-semibold uppercase">Contact Us</h2>
            <ul className="space-y-2">
              <li>123 Education Street, Learning City, 12345</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Email: info@eduplatform.com</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-lg font-semibold uppercase">
              Subscribe to Our Newsletter
            </h2>
            <p className="mb-4">
              Stay updated with our latest courses and educational tips!
            </p>
            <form className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white border-gray-700 focus:border-primary"
              />
              <Button
                type="submit"
                className="bg-primary hover:bg-primary-dark transition-colors duration-300"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <hr className="my-8 border-gray-800" />
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <p className="mb-4 sm:mb-0">
            &copy; 2023 EduPlatform. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {[
              { icon: Facebook, label: "Facebook" },
              { icon: Twitter, label: "Twitter" },
              { icon: Instagram, label: "Instagram" },
              { icon: Linkedin, label: "LinkedIn" },
              { icon: Youtube, label: "YouTube" },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label={label}
              >
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
