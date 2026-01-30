import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import WhyChoose from './sections/WhyChoose';
import Portfolio from './sections/Portfolio';
import Services from './sections/Services';
import Testimonials from './sections/Testimonials';
import Skills from './sections/Skills';
import About from './sections/About';
import FAQs from './sections/FAQs';
import CTA from './sections/CTA';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <main>
        <Hero />
        <WhyChoose />
        <Portfolio />
        <Services />
        <Testimonials />
        <Skills />
        <About />
        <FAQs />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
