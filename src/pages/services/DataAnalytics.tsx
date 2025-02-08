
import { ChartBar, PieChart, LineChart, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const solutions = [
  {
    icon: PieChart,
    title: "Business Intelligence",
    description: "Transform raw data into meaningful visualizations and dashboards for better decision making."
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    description: "Forecast future trends and patterns using advanced statistical models and machine learning."
  },
  {
    icon: BarChart,
    title: "Performance Metrics",
    description: "Track and analyze key performance indicators (KPIs) to optimize business operations."
  }
];

const DataAnalytics = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-12 w-12 rounded-lg bg-primary/5 flex items-center justify-center">
                <ChartBar className="h-6 w-6 text-[#9b87f5]" />
              </div>
              <h1 className="text-4xl font-bold text-foreground">Data Analytics</h1>
            </div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-muted-foreground mb-8">
                Transform your raw data into actionable insights with our comprehensive data analytics services. 
                We help organizations make data-driven decisions with confidence using cutting-edge tools and methodologies.
              </p>
              
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-6">Why Choose Our Analytics Solutions?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {solutions.map((solution) => (
                    <Card key={solution.title} className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="h-10 w-10 rounded-lg bg-primary/5 flex items-center justify-center mb-4">
                          <solution.icon className="h-5 w-5 text-[#9b87f5]" />
                        </div>
                        <CardTitle className="text-lg mb-2">{solution.title}</CardTitle>
                        <CardDescription>{solution.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-6">Our Analytics Process</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#9b87f5] text-white flex items-center justify-center flex-shrink-0">1</div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Data Collection & Preparation</h3>
                      <p>We gather data from various sources and prepare it for analysis by cleaning, transforming, and validating the data.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#9b87f5] text-white flex items-center justify-center flex-shrink-0">2</div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Analysis & Modeling</h3>
                      <p>Our experts apply statistical methods and machine learning algorithms to uncover patterns and insights.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#9b87f5] text-white flex items-center justify-center flex-shrink-0">3</div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Visualization & Reporting</h3>
                      <p>We create interactive dashboards and detailed reports to communicate findings effectively.</p>
                    </div>
                  </div>
                </div>
              </section>

              <div className="bg-[#9b87f5]/5 p-8 rounded-lg mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Ready to Get Started?</h2>
                <p className="text-muted-foreground mb-6">
                  Let us help you unlock the power of your data. Contact us today to discuss your analytics needs.
                </p>
                <Link to="/contact">
                  <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DataAnalytics;
