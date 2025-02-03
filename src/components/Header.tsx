import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <a href="/" className="text-2xl font-bold text-primary">DataAI</a>
          <nav className="hidden md:flex space-x-6">
            <a href="#services" className="text-text hover:text-primary-light transition-colors">Services</a>
            <a href="#about" className="text-text hover:text-primary-light transition-colors">About</a>
            <a href="#contact" className="text-text hover:text-primary-light transition-colors">Contact</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden md:inline-flex">
            Book Demo
          </Button>
          <Button className="hidden md:inline-flex">
            Contact Us
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;