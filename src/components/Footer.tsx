import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">DalphoAI</h3>
            <p className="text-slate-300">
              Empowering businesses with advanced data and AI solutions for better decision making.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-slate-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-slate-300 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/blog" className="text-slate-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-slate-300">Data Engineering</li>
              <li className="text-slate-300">AI Solutions</li>
              <li className="text-slate-300">Machine Learning</li>
              <li className="text-slate-300">Data Analytics</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} DalphoAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;