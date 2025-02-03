import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-2xl font-bold text-primary">DataAI</Link>
          <nav className="hidden md:flex space-x-6">
            <Link to="/about" className="text-text hover:text-primary-light transition-colors">About</Link>
            <Link to="/blog" className="text-text hover:text-primary-light transition-colors">Blog</Link>
            <Link to="/contact" className="text-text hover:text-primary-light transition-colors">Contact</Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden md:inline-flex">
            Book Demo
          </Button>
          <Link to="/contact">
            <Button className="hidden md:inline-flex">
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