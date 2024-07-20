import { useEffect } from 'react';
import icn from '../assets/SVG.svg';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Question = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out', 
      once: true, 
      offset: 50,  
    });

    AOS.refresh(); 
  }, []);

  return (
    <section className="py-10 w-full bg-transparent text-black" data-aos="fade-up">
      <div className="container mx-auto text-center lg:h-72 px-4">
        <h2 className="text-2xl font-semibold mb-8" data-aos="fade-down" data-aos-delay="100">
          Frequently Asked <span className="text-[#1A73E8]">Questions</span>
        </h2>
        <div className="text-left flex flex-col lg:flex-row max-w-4xl mx-auto">
          <div className="flex flex-col mb-8 lg:w-1/3" data-aos="fade-right" data-aos-delay="200">
            <button className="p-4 mb-2 rounded-lg shadow-md bg-[#F1F3F4] text-[#1A73E8] border-2 border-[#1A73E8]">
              Eligibility
            </button>
            <button className="p-4 mb-2 rounded-lg shadow-md bg-white text-[#041020] border-2 border-gray-300">
              How to Use?
            </button>
            <button className="p-4 mb-2 rounded-lg shadow-md bg-white text-[#041020] border-2 border-gray-300">
              Terms & Conditions
            </button>
          </div>
          <div className="flex flex-col p-4 lg:w-2/3" data-aos="fade-left" data-aos-delay="200">
            <details open className="mb-4 group">
              <summary className="cursor-pointer text-base text-[#1A73E8] font-semibold flex items-center" data-aos="fade-up" data-aos-delay="300">
                <span>Do I need to have prior Product Management and Project Management experience to enroll in the program?</span>
                <span className="ml-auto transition-transform duration-300 transform group-open:rotate-90">›</span>
              </summary>
              <p className="mt-2 pl-4 transition-all duration-300 ease-in-out">
                No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.
              </p>
            </details>
            <details className="mb-4 group">
              <summary className="cursor-pointer text-base text-[#041020] font-semibold flex items-center" data-aos="fade-up" data-aos-delay="400">
                <span>What is the minimum system configuration required?</span>
                <span className="ml-auto transition-transform duration-300 transform group-open:rotate-90">›</span>
              </summary>
              <p className="mt-2 pl-4 opacity-0 max-h-0 transition-all duration-300 ease-in-out group-open:max-h-32 group-open:opacity-100">
                Details about the system configuration.
              </p>
            </details>
          </div>
        </div>
      </div>
      <div className="mt-16 mx-auto w-8/12 rounded-lg bg-[#1A73E8] text-white py-8 px-12" data-aos="fade-up" data-aos-delay="500">
        <div className="text-center">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="w-16 h-16 bg-white rounded-lg border-4 border-[#609CEB] flex items-center justify-center mb-4 lg:mb-0 lg:mr-4" data-aos="zoom-in" data-aos-delay="600">
              <img src={icn} alt="icon" className="w-10 h-10" />
            </div>
            <div className="flex flex-col  lg:ml-4 ">
              <h3 className="text-xl font-medium mb-2" data-aos="fade-left" data-aos-delay="700">
                Want to delve deeper into the program?
              </h3>
              <p className="mb-2 text-xs" data-aos="fade-left" data-aos-delay="800">
                Share your details to receive expert insights from our program team!
              </p>
            </div>
            <button className="bg-white text-[#1A73E8] font-semibold px-6 py-3 rounded-lg lg:ml-auto" data-aos="fade-up" data-aos-delay="900">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Question;
