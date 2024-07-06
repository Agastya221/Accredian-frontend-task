import Header from './components/Header';
import Hero from './components/Hero';
import ReferralProcess from './components/ReferralProcess';
import ReferralBenefits from './components/ReferralBenefits';
import Question from './components/FAQS';
import Footer from './components/Footer';
import 'aos/dist/aos.css'; 
import AOS from 'aos';

AOS.init({
  duration: 1000,
  easing: 'ease-in-out', 
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
