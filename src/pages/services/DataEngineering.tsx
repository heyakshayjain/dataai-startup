
import { Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DataEngineering = () => {
  return (
    <div className="min-h-screen pt-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center">
              <Database className="h-6 w-6 text-[#9b87f5]" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900">Data Engineering</h1>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-lg text-slate-600 mb-6">
              Our data engineering services help organizations build robust, scalable, and efficient data infrastructure that forms the backbone of their data-driven operations.
            </p>
            
            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">What We Offer</h2>
            <ul className="space-y-4 text-slate-600">
              <li>Data Pipeline Development</li>
              <li>ETL Process Implementation</li>
              <li>Data Warehouse Design</li>
              <li>Real-time Data Processing</li>
              <li>Data Quality Management</li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">Why Choose Our Data Engineering Services</h2>
            <p className="text-slate-600 mb-6">
              We combine technical expertise with industry best practices to deliver scalable solutions that grow with your business. Our team ensures your data infrastructure is reliable, efficient, and secure.
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

export default DataEngineering;
