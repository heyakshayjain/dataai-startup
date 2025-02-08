
import { ChartBar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DataAnalytics = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-12 w-12 rounded-lg bg-primary/5 flex items-center justify-center">
                <ChartBar className="h-6 w-6 text-[#9b87f5]" />
              </div>
              <h1 className="text-4xl font-bold text-foreground">Data Analytics</h1>
            </div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                Transform your raw data into actionable insights with our comprehensive data analytics services. 
                We help organizations make data-driven decisions with confidence.
              </p>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Our Analytics Solutions</h2>
              <ul className="space-y-4 text-muted-foreground">
                <li>Business Intelligence Dashboards</li>
                <li>Predictive Analytics</li>
                <li>Customer Behavior Analysis</li>
                <li>Performance Metrics Tracking</li>
                <li>Data Visualization</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Benefits</h2>
              <p className="text-muted-foreground mb-6">
                Our analytics solutions help you understand trends, identify opportunities, and make informed 
                decisions that drive business growth and efficiency.
              </p>

              <div className="mt-8">
                <Link to="/contact">
                  <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DataAnalytics;
