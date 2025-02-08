
import { Database, Server, Network, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const solutions = [
  {
    icon: Server,
    title: "Data Infrastructure",
    description: "Build scalable and reliable data infrastructure using modern cloud technologies."
  },
  {
    icon: Network,
    title: "Data Pipeline Development",
    description: "Create efficient ETL/ELT pipelines for seamless data processing and integration."
  },
  {
    icon: Shield,
    title: "Data Governance",
    description: "Implement robust data governance frameworks to ensure data quality and security."
  }
];

const DataEngineering = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-12 w-12 rounded-lg bg-primary/5 flex items-center justify-center">
                <Database className="h-6 w-6 text-[#9b87f5]" />
              </div>
              <h1 className="text-4xl font-bold text-foreground">Data Engineering</h1>
            </div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-muted-foreground mb-8">
                Build robust and scalable data infrastructure with our comprehensive data engineering services. 
                We help organizations design and implement efficient data pipelines and storage solutions.
              </p>
              
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-6">Our Engineering Solutions</h2>
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
                <h2 className="text-2xl font-semibold text-foreground mb-6">Engineering Process</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#9b87f5] text-white flex items-center justify-center flex-shrink-0">1</div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Requirements Analysis</h3>
                      <p>We work closely with stakeholders to understand data needs and establish requirements.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#9b87f5] text-white flex items-center justify-center flex-shrink-0">2</div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Architecture Design</h3>
                      <p>Our experts design scalable data architectures that meet your current and future needs.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#9b87f5] text-white flex items-center justify-center flex-shrink-0">3</div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Implementation & Testing</h3>
                      <p>We build and rigorously test data pipelines to ensure reliability and performance.</p>
                    </div>
                  </div>
                </div>
              </section>

              <div className="bg-[#9b87f5]/5 p-8 rounded-lg mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Ready to Transform Your Data Infrastructure?</h2>
                <p className="text-muted-foreground mb-6">
                  Contact us to discuss how we can help you build a robust data engineering solution.
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

export default DataEngineering;
