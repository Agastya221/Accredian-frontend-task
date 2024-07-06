import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="hidden lg:block bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 px-4 md:px-44 pb-6 md:pb-10 mb-4">
          <div className="mb-4 lg:mb-0 lg:mr-16">
            <h3 className="text-2xl font-bold">accredian</h3>
            <p className="text-sm">credentials that matter</p>
          </div>
          <div className="flex flex-row items-center lg:flex-col lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 p-20 text-white font-bold py-2 px-4 rounded">
              Schedule 1-on-1 Call Now
            </button>
            <p className="text-sm pr-4 ">Speak with our Learning Advisor</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 lg:px-44">
          <div className="mb-8 lg:mb-0">
            <h4 className="text-lg font-semibold">Programs</h4>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center justify-between"><a href="#" className="hover:underline">Data Science & AI</a><span className="ml-2">+</span></li>
              <li className="flex items-center justify-between"><a href="#" className="hover:underline">Product Management</a><span className="ml-2">+</span></li>
              <li className="flex items-center justify-between"><a href="#" className="hover:underline">Business Analytics</a><span className="ml-2">+</span></li>
              <li className="flex items-center justify-between"><a href="#" className="hover:underline">Digital Transformation</a><span className="ml-2">+</span></li>
              <li className="flex items-center justify-between"><a href="#" className="hover:underline">Business Management</a><span className="ml-2">+</span></li>
              <li className="flex items-center justify-between"><a href="#" className="hover:underline">Project Management</a><span className="ml-2">+</span></li>
              <li className="flex items-center justify-between"><a href="#" className="hover:underline">Strategy & Leadership</a><span className="ml-2">+</span></li>
              <li className="flex items-center justify-between"><a href="#" className="hover:underline">Senior Management</a><span className="ml-2">+</span></li>
              <li className="flex items-center justify-between"><a href="#" className="hover:underline">Fintech</a><span className="ml-2">+</span></li>
            </ul>
          </div>
          <div className="mb-8 lg:mb-0">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="mt-4 text-[.66rem] lg:text-sm space-y-2">
              <p>Email (For Data Science Queries): <a href="mailto:admissions@accredian.com" className="hover:underline">admissions@accredian.com</a></p>
              <p>Email (For Product Management Queries): <a href="mailto:pm@accredian.com" className="hover:underline">pm@accredian.com</a></p>
              <p>Data Science Admission Helpline: <a href="tel:+919079563929" className="hover:underline">+91 9079563929 (9 AM - 7 PM)</a></p>
              <p>Product Management Admission Helpline: <a href="tel:+919625811095" className="hover:underline">+91 9625811095</a></p>
              <p>Enrolled Student Helpline: <a href="tel:+917969322507" className="hover:underline">+91 7969322507</a></p>
              <p>Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015</p>
              <h4 className="text-lg font-semibold">Follow Us</h4>
              <div className="flex space-x-4 mt-2">
                <a href="#"><FaFacebook className="h-6 w-6 text-white" /></a>
                <a href="#"><FaLinkedin className="h-6 w-6 text-white" /></a>
                <a href="#"><FaTwitter className="h-6 w-6 text-white" /></a>
                <a href="#"><FaInstagram className="h-6 w-6 text-white" /></a>
                <a href="#"><FaYoutube className="h-6 w-6 text-white" /></a>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Accredian</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Career</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Admission Policy</a></li>
              <li><a href="#" className="hover:underline">Referral Policy</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms Of Service</a></li>
              <li><a href="#" className="hover:underline">Master FAQs</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4">
          <p className="text-center text-sm lg:text-base">© 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
