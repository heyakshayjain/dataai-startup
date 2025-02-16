import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <FAQ />
        <Link 
          to="/contact" 
          className="inline-block px-6 py-3 mb-8 text-white bg-[#9b87f5] hover:bg-[#7E69AB] rounded-md transition-colors duration-300"
        >
          Contact Us
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default Index;