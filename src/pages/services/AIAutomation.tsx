
import { Cog } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AIAutomation = () => {
  return (
    <div className="min-h-screen pt-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center">
              <Cog className="h-6 w-6 text-[#9b87f5]" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900">AI Automation</h1>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-lg text-slate-600 mb-6">
              Transform your business operations with intelligent automation solutions that combine AI and robotics process automation to streamline workflows.
            </p>
            
            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">Automation Solutions</h2>
            <ul className="space-y-4 text-slate-600">
              <li>Workflow Automation</li>
              <li>Intelligent Document Processing</li>
              <li>Chatbots and Virtual Assistants</li>
              <li>Process Mining</li>
              <li>Quality Assurance Automation</li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">Benefits of AI Automation</h2>
            <p className="text-slate-600 mb-6">
              Reduce manual effort, minimize errors, and increase productivity with our intelligent automation solutions designed for your specific needs.
            </p>

            <div className="mt-8">
              <Link to="/contact">
                <Button className="bg-[#9b87f5] hover:bg-[#7E69AB]">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAutomation;
