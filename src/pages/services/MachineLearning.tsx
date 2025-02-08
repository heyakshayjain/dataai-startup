
import { Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MachineLearning = () => {
  return (
    <div className="min-h-screen pt-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center">
              <Brain className="h-6 w-6 text-[#9b87f5]" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900">Machine Learning</h1>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-lg text-slate-600 mb-6">
              Leverage the power of machine learning to automate processes, gain insights, and create intelligent solutions that adapt and improve over time.
            </p>
            
            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">Our ML Solutions</h2>
            <ul className="space-y-4 text-slate-600">
              <li>Custom ML Model Development</li>
              <li>Natural Language Processing</li>
              <li>Computer Vision Solutions</li>
              <li>Recommendation Systems</li>
              <li>Anomaly Detection</li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">Why Choose Our ML Services</h2>
            <p className="text-slate-600 mb-6">
              Our team of ML experts develops custom solutions that address your specific business challenges, ensuring optimal performance and scalability.
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

export default MachineLearning;
