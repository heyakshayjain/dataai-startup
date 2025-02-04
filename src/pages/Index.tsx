import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Process from "@/components/Process";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Process />
        <WhyChooseUs />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;