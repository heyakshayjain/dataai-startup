import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

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
        <a href="contact.html" className="text-blue-500 hover:underline">
          Contact Us
        </a>
      </main>
      <Footer />
    </div>
  );
};

export default Index;