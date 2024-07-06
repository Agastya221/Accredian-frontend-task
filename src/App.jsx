import Header from './components/Header';
import Hero from './components/Hero';
import ReferralProcess from './components/ReferralProcess';
import ReferralBenefits from './components/ReferralBenefits';
import Question from './components/FAQS';
import Footer from './components/Footer';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';

AOS.init({
  duration: 1000, // Duration of animations
  easing: 'ease-in-out', // Easing function for animations
  once: true, // Whether animation should happen only once
});

const App = () => {
  return (
    <div className="scroll-snap-container">
      <Header />
      <Hero />
      <ReferralProcess />
      <ReferralBenefits />
      <Question />
      <Footer />
    </div>
  );
};

export default App;
