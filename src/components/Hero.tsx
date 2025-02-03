import { ArrowRight, Brain, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="pt-24 pb-12 md:pt-32 md:pb-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center space-x-4 mb-6">
            <Database className="h-12 w-12 text-blue-600 animate-fade-in" />
            <Brain className="h-12 w-12 text-blue-800 animate-fade-in delay-100" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 animate-fade-in">
            Transform Your Data into
            <span className="text-blue-600"> Actionable Insights</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 animate-fade-in delay-200">
            Leverage the power of AI and data analytics to drive growth, optimize operations,
            and make data-driven decisions for your business.
          </p>
          <div className="flex justify-center animate-fade-in delay-300">
            <Link to="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 group">
                Book a Meeting
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;