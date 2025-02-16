import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-slate-900 dark:text-white">
            DelfoAI
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-slate-600 dark:text-slate-300 hover:text-[#9b87f5] dark:hover:text-[#9b87f5] transition-colors ${
                  location.pathname === item.path ? "text-[#9b87f5]" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="relative">
              <button onClick={() => setDropdownOpen(!isDropdownOpen)} className="flex items-center text-slate-600 dark:text-slate-300 hover:text-[#9b87f5] dark:hover:text-[#9b87f5] transition-colors">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded">
                  <Link to="/services/data-engineering" className="block px-4 py-2 hover:bg-gray-100">Data Engineering</Link>
                  <Link to="/services/data-analytics" className="block px-4 py-2 hover:bg-gray-100">Data Analytics</Link>
                  <Link to="/services/machine-learning" className="block px-4 py-2 hover:bg-gray-100">Machine Learning</Link>
                  <Link to="/services/ai-automation" className="block px-4 py-2 hover:bg-gray-100">AI Automation</Link>
                </div>
              )}
            </div>
            <Button 
              onClick={() => window.open('https://cal.com/delfoai/30min', '_blank')}
              className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
            >
              Book a Meeting
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-slate-900 dark:text-white"
            >
              {menuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden"
            >
              <motion.nav
                initial={{ y: -10 }}
                animate={{ y: 0 }}
                exit={{ y: -10 }}
                className="flex flex-col py-4 space-y-4 bg-white dark:bg-gray-800 rounded shadow-lg"
              >
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={closeMenu}
                    className={`px-4 py-2 text-lg text-slate-600 dark:text-slate-300 hover:text-[#9b87f5] dark:hover:text-[#9b87f5] transition-colors ${
                      location.pathname === item.path 
                        ? "bg-slate-100 dark:bg-gray-700 text-[#9b87f5]" 
                        : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="relative">
                  <button onClick={() => setDropdownOpen(!isDropdownOpen)} className="flex items-center text-slate-600 dark:text-slate-300 hover:text-[#9b87f5] dark:hover:text-[#9b87f5] transition-colors">
                    Services <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded">
                      <Link to="/services/data-engineering" className="block px-4 py-2 hover:bg-gray-100">Data Engineering</Link>
                      <Link to="/services/data-analytics" className="block px-4 py-2 hover:bg-gray-100">Data Analytics</Link>
                      <Link to="/services/machine-learning" className="block px-4 py-2 hover:bg-gray-100">Machine Learning</Link>
                      <Link to="/services/ai-automation" className="block px-4 py-2 hover:bg-gray-100">AI Automation</Link>
                    </div>
                  )}
                </div>
                <Button 
                  onClick={() => window.open('https://cal.com/delfoai/30min', '_blank')}
                  className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
                >
                  Book a Meeting
                </Button>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
