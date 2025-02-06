import { ArrowRight, Brain, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className="relative pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-slate-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300 overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-br from-primary/20 to-primary-light/20 blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-tr from-primary/20 to-primary-light/20 blur-3xl" />
        {/* Animated dots */}
        <div className="absolute top-20 left-20 w-4 h-4 rounded-full bg-primary/30 animate-pulse" />
        <div className="absolute bottom-40 right-20 w-6 h-6 rounded-full bg-primary-light/30 animate-pulse delay-300" />
        <div className="absolute top-40 right-40 w-3 h-3 rounded-full bg-primary-dark/30 animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center space-x-4 mb-6">
            <Database className="h-12 w-12 text-primary dark:text-primary-light animate-fade-in" />
            <Brain className="h-12 w-12 text-primary-dark dark:text-primary animate-fade-in delay-100" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 animate-fade-in">
            <span>Transform Your </span>
            <TypeAnimation
              sequence={[
                'Data into Insights',
                2000,
                'Business with AI',
                2000,
                'Future with Analytics',
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="text-primary dark:text-primary-light"
              repeat={Infinity}
            />
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 animate-fade-in delay-200">
            Leverage the power of AI and data analytics to drive growth, optimize operations,
            and make data-driven decisions for your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in delay-300">
            <a 
              href="https://calendly.com/heyakshayjain/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-primary hover:bg-primary-dark dark:bg-primary-light dark:hover:bg-primary shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Book a Meeting
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <Button 
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-2 border-primary dark:border-primary-light text-primary dark:text-primary-light hover:bg-primary hover:text-white dark:hover:bg-primary-light dark:hover:text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
              onClick={() => window.location.href = '/contact'}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;