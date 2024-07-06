import { useState } from 'react';
import backgroundImage from '../assets/file.png'; 
import ReferralForm from './PopupModel.jsx';
import 'aos/dist/aos.css';
import AOS from 'aos';

// Initialize AOS
AOS.init({
  duration: 1000, 
  easing: 'ease-in-out', 
  once: true, 
});

const ReferralProcess = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <section
      id="referralprocess"  // Add an id for scroll navigation
      className="hidden lg:block py-16 bg-[#f0f4fc]  items-center scroll-snap-start min-h-screen"  // Ensure full viewport height
      data-aos="fade-up"  // Add scroll animation
      data-aos-duration="1000"
    >
      <h2
        className="text-3xl flex justify-center text-black font-bold mb-8"
        data-aos="fade-down"
        data-aos-delay="200"
      >
        How Do I Refer?
      </h2>
      <div
        className="relative flex justify-center mb-8"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full max-w-6xl rounded-lg mb-3"
        />
        <button
          onClick={openModal}
          className="absolute    bottom-4 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          Refer Now
        </button>
      </div>
      <ReferralForm modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </section>
  );
};

export default ReferralProcess;