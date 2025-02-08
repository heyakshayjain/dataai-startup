import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
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

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-2xl font-bold text-slate-900 dark:text-white">DalfoAI</Link>
          <nav className={`md:flex items-center space-x-6 ${menuOpen ? "block" : "hidden"} md:block`}>
            <Link to="/about" className="text-slate-600 dark:text-slate-300 hover:text-[#9b87f5] transition-colors">About</Link>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-slate-600 dark:text-slate-300 hover:text-[#9b87f5]">Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4">
                      <Link to="/services/data-engineering" className="block p-3 hover:bg-slate-100 rounded-md">
                        <div className="text-sm font-medium text-slate-900">Data Engineering</div>
                        <div className="text-sm text-slate-500">Build robust data pipelines and infrastructure</div>
                      </Link>
                      <Link to="/services/data-analytics" className="block p-3 hover:bg-slate-100 rounded-md">
                        <div className="text-sm font-medium text-slate-900">Data Analytics</div>
                        <div className="text-sm text-slate-500">Transform raw data into meaningful insights</div>
                      </Link>
                      <Link to="/services/machine-learning" className="block p-3 hover:bg-slate-100 rounded-md">
                        <div className="text-sm font-medium text-slate-900">Machine Learning</div>
                        <div className="text-sm text-slate-500">Implement AI models that learn and improve</div>
                      </Link>
                      <Link to="/services/ai-automation" className="block p-3 hover:bg-slate-100 rounded-md">
                        <div className="text-sm font-medium text-slate-900">AI Automation</div>
                        <div className="text-sm text-slate-500">Automate tasks with intelligent solutions</div>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

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
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
