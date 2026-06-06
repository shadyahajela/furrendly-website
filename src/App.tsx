import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import HowWeGroom from './components/HowWeGroom';
import TickerStrip from './components/TickerStrip';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <main>
        <Hero />
        <AboutUs />
        <HowWeGroom />
        <TickerStrip />
        <Testimonials />
        <Faq />
        <Footer />
      </main>
    </>
  );
}
