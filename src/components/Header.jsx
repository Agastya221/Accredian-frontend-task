
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect, useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <header className="bg-white  flex flex-col sticky top-0 z-10">
      {/* Mobile and Tablet Header */}
      <div className="md:hidden sticky top-0 z-10">
        <div className="w-full flex justify-between items-center p-4 bg-white shadow-md sticky top-0">
          <div className="flex items-center space-x-2">
            <div
              className="text-xl font-bold text-blue-600"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              accredian
              <span className="text-xs pl-1 text-gray-700 block mt-[-4px]">
                credentials that matter
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 sm:block"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              Explore &gt;
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity duration-300 ${
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsMenuOpen(false)}
        ></div> {/* Mobile Menu */}
        <nav
          className={`fixed top-0 right-0 h-full w-64 bg-white p-4 space-y-2 shadow-lg transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-600 focus:outline-none self-end"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <a
            href="#refer"
            className="text-black hover:text-blue-600 px-4 py-2 rounded transition duration-300 block w-full text-left"
          >
            Refer & Earn
          </a>
          <a
            href="#benefits"
            className="text-black hover:text-blue-600 px-4 py-2 rounded transition duration-300 block w-full text-left"
          >
            Benefits
          </a>
          <a
            href="#faq"
            className="text-black hover:text-blue-600 px-4 py-2 rounded transition duration-300 block w-full text-left"
          >
            FAQs
          </a>
          <a
            href="#support"
            className="text-black hover:text-blue-600 px-4 py-2 rounded transition duration-300 block w-full text-left"
          >
            Support
          </a>
          <button className="text-black bg-gray-100 px-4 py-2 rounded hover:bg-gray-200 transition duration-300 block w-full text-left">
            Login
          </button>

Jaaved, [07-07-2024 00:02]
<button className="border border-blue-600 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 block w-full text-left">
            Try for free
          </button>
        </nav>
      </div>

      {/* Desktop Header */}
      <div className="hidden lg:block">
        <div
          className="w-full flex justify-center items-center text-black px-8 py-3 bg-blue-100 text-sm sticky top-0 z-10"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <span className="mr-4">
            Navigate your ideal career path with tailored expert advice
          </span>
          <a
            href="#contact-expert"
            className="text-blue-600 font-medium hover:underline"
          >
            Contact Expert
          </a>
        </div>
      </div>

      {/* Main Header */}
      <div className="hidden md:flex justify-between items-center p-6 bg-white shadow-md sticky top-0 z-10">
        <div className="flex items-center space-x-6">
          <div
            className="text-2xl font-bold text-blue-600"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            accredian
            <br />
            <span className="text-[10px] text-gray-700 block mt-[-10px]">
              credentials that matter
            </span>
          </div>
          <button
            className="border bg-blue-600 text-white border-gray-300 rounded px-4 py-2 hover:bg-blue-700 transition duration-300"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Courses ▼
          </button>
        </div>
        <nav
          className="flex text-black items-center space-x-4"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <a
            href="#refer"
            className="hover:text-blue-600 font-medium transition duration-300"
          >
            Refer & Earn
          </a>
          <a
            href="#benefits"
            className="hover:text-blue-600 font-medium transition duration-300"
          >
            Benefits
          </a>
          <a
            href="#faq"
            className="hover:text-blue-600 font-medium transition duration-300"
          >
            FAQs
          </a>
          <a
            href="#support"
            className="hover:text-blue-600 font-medium transition duration-300"
          >
            Support
          </a>
          <button className="text-black bg-gray-100 px-4 py-2 rounded hover:bg-gray-200 transition duration-300">
            Login
          </button>
          <button className="ml-2 border border-blue-600 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
            Try for free
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;