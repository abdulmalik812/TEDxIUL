import Hero from '../components/Hero';
import Countdown from '../components/Countdown';
import Tickets from '../components/Tickets';
import About from '../components/About';
import AboutTed from '../components/AboutTed';
import Theme from '../components/Theme';
import Schedule from '../components/Schedule';
import Speakers from '../components/Speakers';
import Sponsors from '../components/Sponsors';
import FAQ from '../components/FAQ';
import Venue from '../components/Venue';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Countdown />
      <Tickets />
      <About />
      <AboutTed />
      <Theme />
      <Schedule />
      <Speakers />
      <Sponsors />
      <FAQ />
      <Venue />
      <Contact />
      <Footer />
    </>
  );
}
