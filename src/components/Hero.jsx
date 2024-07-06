import { useState } from "react";
import referimg from "../assets/referimg.png";
import amazon from "../assets/amazon-com-logo-svgrepo-com.svg";
import google from "../assets/google-ar21.svg";
import Microsoft from "../assets/microsoft-6.svg";

const Hero = () => {
  const [activeTab, setActiveTab] = useState("Refer");

  return (
    <section className="bg-gray-100 py-12 ">
      {/* Hero content for medium and larger screens */}
      <div className="hidden lg:block w-4/6 mx-auto">
        <div className="container mx-auto text-center">
          <div className="flex justify-center py-4">
            <div
              className="space-x-8 text-black rounded-full p-3 px-20 bg-customcolor font-roboto text-lg"
              data-aos="fade-up"
            >
              {["Refer", "Benefits", "FAQs", "Support"].map((tab) => (
                <div key={tab} className="relative inline-block">
                  <a
                    href="#"
                    className={`hover:text-blue-600 ${activeTab === tab ? "text-blue-600" : ""}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </a>
                  {activeTab === tab && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-1 w-2 rounded-full bg-blue-600 mt-1"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div
            className="flex items-center justify-between mt-16 px-8 bg-white shadow-lg rounded-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="text-left w-1/2">
              <h1 className="text-black text-5xl font-bold leading-tight">
                Let’s Learn <br />
                <span>& Earn</span>
              </h1>
              <p className="text-black mt-4 text-2xl leading-relaxed">
                Get a chance to win <br /> up-to{" "}
                <span className="text-blue-600 text-3xl font-bold">Rs. 15,000</span>
              </p>
              <button className="mt-6 bg-blue-600 text-white px-8 py-2 rounded">
                Refer Now
              </button>
            </div>
            <img className="ml-8 w-3/5" src={referimg} alt="Refer and Earn" />
          </div>
        </div>
      </div>

      <div className="lg:hidden container mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl text-black font-bold mb-4">
          Unlock Dream Career
          <br />
          with Top
          <br />
          Universities
        </h1>

        <svg className="w-32 h-6 mx-auto mb-6" viewBox="0 0 120 20" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 10 Q60 -10 120 10" fill="transparent" stroke="#3b82f6" strokeWidth="2" />
</svg>


        <p className="text-lg text-black mb-8">
          Welcome to Accredian, your gateway to premier online
          <br />
          programs from India&apos;s top universities, tailored for
          <br />
          career success.
        </p>

        <div className="flex justify-center space-x-4">
          <button className="px-6 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-100 transition duration-300">
            Talk to Expert
          </button>
          <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
            Explore Courses
          </button>
          
        </div>
        <div className="container mx-auto text-center mt-8">
        <p className="text-xl text-gray-700 mb-2">Our alumni hold prominent positions in various industries.</p>
        <div className="flex justify-center items-center space-x-8">
          <img src={Microsoft} alt="Microsoft" className="h-8" />
          <img src={google} alt="Google" className="h-8" />
          <img src={amazon} alt="Amazon" className="h-28" />
        </div>
      </div>
      </div>
    </section>
  );
};

export default Hero;
