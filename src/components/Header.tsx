import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-2xl font-bold text-slate-900 dark:text-white">DalphoAI</Link>
          <nav className="hidden md:flex space-x-6">
            <Link to="/about" className="text-slate-600 dark:text-slate-300 hover:text-[#9b87f5] transition-colors">About</Link>
            <a href="#services" className="text-slate-600 dark:text-slate-300 hover:text-[#9b87f5] transition-colors">Services</a>
            <Link to="/blog" className="text-slate-600 dark:text-slate-300 hover:text-[#9b87f5] transition-colors">Blog</Link>
            <Link to="/contact" className="text-slate-600 dark:text-slate-300 hover:text-[#9b87f5] transition-colors">Contact</Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/contact">
            <Button className="hidden md:inline-flex bg-[#9b87f5] hover:bg-[#7E69AB]">
              Contact Us
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;