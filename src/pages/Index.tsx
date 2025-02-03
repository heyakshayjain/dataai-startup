import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
      </main>
    </div>
  );
};

export default Index;