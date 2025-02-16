import { ArrowRight, Brain, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypeAnimation } from 'react-type-animation';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-slate-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background Graphics */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-br from-primary/20 to-primary-light/20 blur-3xl" />
          <div className="absolute -bottom-1/2 -left-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-tr from-primary/20 to-primary-light/20 blur-3xl" />
          {/* Animated dots */}
          <div className="absolute top-20 left-20 w-4 h-4 rounded-full bg-primary/30 animate-pulse" />
          <div className="absolute bottom-40 right-20 w-6 h-6 rounded-full bg-primary-light/30 animate-pulse delay-300" />
          <div className="absolute top-40 right-40 w-3 h-3 rounded-full bg-primary-dark/30 animate-pulse delay-700" />
        </div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="flex justify-center space-x-4 mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Database className="h-12 w-12 text-primary dark:text-primary-light" />
            </motion.div>
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Brain className="h-12 w-12 text-primary-dark dark:text-primary" />
            </motion.div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
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
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Leverage the power of AI and data analytics to drive growth, optimize operations,
            and make data-driven decisions for your business.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link 
              to="/contact"
              className="inline-block px-8 py-4 bg-transparent border-2 border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <motion.span
                className="inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.span>
            </Link>
            
            <Button 
              onClick={() => window.open('https://cal.com/delfoai/30min', '_blank')}
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <motion.span
                className="inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book a Meeting
              </motion.span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;