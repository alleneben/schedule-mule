import Nav from "./layouts/Nav";
import Footer from "./layouts/Footer";
import Hero from "./layouts/Hero";
import Features from "./layouts/Features";
import Testimonials from "./layouts/Testimonials";
import CTA from "./layouts/CTA";


function App() {

  return (
    <div className="body-font font-poppins">
      <Nav />
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
