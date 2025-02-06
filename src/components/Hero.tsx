import { ArrowRight, Brain, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className="pt-24 pb-12 md:pt-32 md:pb-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center space-x-4 mb-6">
            <Database className="h-12 w-12 text-blue-600 dark:text-blue-400 animate-fade-in" />
            <Brain className="h-12 w-12 text-blue-800 dark:text-blue-600 animate-fade-in delay-100" />
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
              className="text-blue-600 dark:text-blue-400"
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
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 dark:from-blue-500 dark:to-blue-700 dark:hover:from-blue-600 dark:hover:to-blue-800 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Book a Meeting
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <Button 
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
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