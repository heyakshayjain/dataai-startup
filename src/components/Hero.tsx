import { ArrowRight, Brain, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center space-x-4 mb-6">
            <Database className="h-12 w-12 text-primary animate-fade-in" />
            <Brain className="h-12 w-12 text-primary-light animate-fade-in delay-100" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 animate-fade-in">
            Transform Your Data into
            <span className="text-primary-light"> Actionable Insights</span>
          </h1>
          <p className="text-lg md:text-xl text-text/80 mb-8 animate-fade-in delay-200">
            Leverage the power of AI and data analytics to drive growth, optimize operations,
            and make data-driven decisions for your business.
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 animate-fade-in delay-300">
            <Link to="/contact">
              <Button size="lg" className="group">
                Book a Meeting
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;