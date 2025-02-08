
import { Brain, Cpu, Code, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const solutions = [
  {
    icon: Cpu,
    title: "Custom ML Models",
    description: "Develop tailored machine learning models for your specific business needs."
  },
  {
    icon: Code,
    title: "Natural Language Processing",
    description: "Implement NLP solutions for text analysis, sentiment analysis, and more."
  },
  {
    icon: Bot,
    title: "Computer Vision",
    description: "Create advanced image and video analysis solutions using deep learning."
  }
];

const MachineLearning = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-12 w-12 rounded-lg bg-primary/5 flex items-center justify-center">
                <Brain className="h-6 w-6 text-[#9b87f5]" />
              </div>
              <h1 className="text-4xl font-bold text-foreground">Machine Learning</h1>
            </div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-muted-foreground mb-8">
                Harness the power of artificial intelligence with our machine learning solutions. 
                We develop custom ML models that help businesses automate processes and gain deeper insights.
              </p>
              
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-6">ML Solutions</h2>
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
                <h2 className="text-2xl font-semibold text-foreground mb-6">Development Process</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#9b87f5] text-white flex items-center justify-center flex-shrink-0">1</div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Problem Definition</h3>
                      <p>We work with you to clearly define the problem and determine the best ML approach.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#9b87f5] text-white flex items-center justify-center flex-shrink-0">2</div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Data Preparation</h3>
                      <p>Our team prepares and preprocesses your data for optimal model training.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#9b87f5] text-white flex items-center justify-center flex-shrink-0">3</div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Model Development</h3>
                      <p>We develop and fine-tune ML models to achieve the best possible performance.</p>
                    </div>
                  </div>
                </div>
              </section>

              <div className="bg-[#9b87f5]/5 p-8 rounded-lg mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Ready to Implement ML Solutions?</h2>
                <p className="text-muted-foreground mb-6">
                  Contact us to discuss how machine learning can transform your business operations.
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

export default MachineLearning;
