import { useState, useEffect } from "react";
import down from "../assets/chevron-up.svg fill.png";
import 'aos/dist/aos.css';
import AOS from 'aos';

// Initialize AOS
AOS.init({
  duration: 1000, // Duration of animations
  easing: 'ease-in-out', // Easing function for animations
  once: true, // Whether animation should happen only once
});

const ReferralBenefits = () => {
  const [enrolled, setEnrolled] = useState(false);

  const handleToggle = () => {
    setEnrolled(!enrolled);
  };

  useEffect(() => {
    AOS.refresh(); // Refresh AOS to make sure it picks up any changes
  }, []);

  return (
    <section
      className="hidden lg:block py-16  bg-[#f0f4fc] text-[#48535C]"
      data-aos="fade-up" // Add AOS animation
      data-aos-duration="1000"
    >
      <div className="flex justify-center items-center mb-4">
        <h2
          className="text-3xl font-bold mb-8"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          What Are The{" "}
          <span className="text-[#1A73E8]">Referral Benefits?</span>
        </h2>
      </div>
      <div className="container flex flex-col">
        <div className="flex justify-end pr-[200px] mb-4">
          <label className="mr-2 pl-4 text-lg" data-aos="fade-right" data-aos-delay="200">
            Enrolled
          </label>
          <label className="inline-flex items-center cursor-pointer" data-aos="fade-left" data-aos-delay="200">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={enrolled}
              onChange={handleToggle}
            />
            <div className="relative w-7 h-4 bg-blue-200 rounded-full peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-white-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
        <div className=" flex justify-center ">
          {/* Sidebar */}
          <div
            className=" hidden md:block h-[520px] bg-white shadow-lg"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <h3 className="w-[270px] pl-4 text-lg font-bold mb-4 bg-[#1A73E8] text-white py-2 rounded-t-lg">
              ALL PROGRAMS
            </h3>
            <ul className="overflow-y-auto">
              <li className="py-4 pl-4 pr-4 font-medium">
                <a href="#" className="flex justify-between">
                  PRODUCT MANAGEMENT <span>&#8250;</span>
                </a>
              </li>
              <li className="py-4 pl-4 pr-4 font-medium border-t border-gray-300">
                <a href="#" className="flex justify-between text-[#48535C]">
                  STRATEGY & LEADERSHIP <span>&#8250;</span>
                </a>
              </li>
              <li className="py-4 pl-4 pr-4 font-medium border-t border-gray-300">
                <a href="#" className="flex justify-between text-[#48535C]">
                  BUSINESS MANAGEMENT <span>&#8250;</span>
                </a>
              </li>
              <li className="py-4 pl-4 pr-4 font-medium border-t border-gray-300">
                <a href="#" className="flex justify-between text-[#48535C]">
                  FINTECH <span>&#8250;</span>
                </a>
              </li>
              <li className="py-4 pl-4 pr-4 font-medium border-t border-gray-300">
                <a href="#" className="flex justify-between text-[#48535C]">
                  SENIOR MANAGEMENT <span>&#8250;</span>
                </a>
              </li>
              <li className="py-4 pl-4 pr-4 font-medium border-t border-gray-300">
                <a href="#" className="flex justify-between text-[#48535C]">
                  DATA SCIENCE <span>&#8250;</span>
                </a>
              </li>
              <li className="py-4 pl-4 pr-4 font-medium border-t border-gray-300">
                <a href="#" className="flex justify-between text-[#48535C]">
                  DIGITAL TRANSFORMATION <span>&#8250;</span>
                </a>
              </li>
              <li className="py-4 pl-4 pr-4 font-medium border-t border-gray-300">
                <a href="#" className="flex justify-between text-[#48535C]">
                  BUSINESS ANALYTICS <span>&#8250;</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Main Content */}
          <div
            className="pl-8 rounded-lg"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <div className="overflow-x-auto rounded-t-lg">
              <table className="min-w-[321px] h-[503px] text-[#48535C] bg-white">
                <thead className="bg-[#AFCEF7] text-[#1350A0]">
                  <tr>
                    <th className="px-4 py-2 pl-4 border-b border-r">Programs</th>
                    <th className="px-4 py-2 border-b border-r">Referrer Bonus</th>
                    <th className="px-4 py-2 border-b">Referee Bonus</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-r px-4 py-2">
                      Professional Certificate Program in Product Management
                    </td>
                    <td className="border-b border-r px-4 py-2">₹ 7,000</td>
                    <td className="border-b px-4 py-2">₹ 9,000</td>
                  </tr>
                  <tr>
                    <td className="border-b border-r px-4 py-2">
                      PG Certificate Program in Strategic Product Management
                    </td>
                    <td className="border-b border-r px-4 py-2">₹ 9,000</td>
                    <td className="border-b px-4 py-2">₹ 11,000</td>
                  </tr>
                  <tr>
                    <td className="border-b border-r px-4 py-2">
                      Executive Program in Data Driven Product Management
                    </td>
                    <td className="border-b border-r px-4 py-2">₹ 10,000</td>
                    <td className="border-b px-4 py-2">₹ 10,000</td>
                  </tr>
                  <tr>
                    <td className="border-b border-r px-4 py-2">
                      Executive Program in Product Management and Digital Transformation
                    </td>
                    <td className="border-b border-r px-4 py-2">₹ 10,000</td>
                    <td className="border-b px-4 py-2">₹ 10,000</td>
                  </tr>
                  <tr>
                    <td className="border-b border-r px-4 py-2">
                      Executive Program in Product Management
                    </td>
                    <td className="border-b border-r px-4 py-2">₹ 10,000</td>
                    <td className="border-b px-4 py-2">₹ 10,000</td>
                  </tr>
                  <tr>
                    <td className="border-b border-r px-4 py-2">
                      Advanced Certification in Product Management
                    </td>
                    <td className="border-b border-r px-4 py-2">₹ 10,000</td>
                    <td className="border-b px-4 py-2">₹ 10,000</td>
                  </tr>
                  <tr>
                    <td className="border-b border-r px-4 py-2">
                      Executive Program in Product Management and Project Management
                    </td>
                    <td className="border-b border-r px-4 py-2">₹ 10,000</td>
                    <td className="border-b px-4 py-2">₹ 10,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            className="flex flex-row items-center m-2 mr-[200px] p-2 font-SourceSansPro rounded-lg font-bold border border-[#B6B6B6] text-[#B6B6B6] hover:bg-gray-100 hover:text-gray-300"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Show more
            <span className="ml-2">
              <img src={down} alt="down" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReferralBenefits;