
import { Cog, Workflow, Bot, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const solutions = [
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Automate repetitive tasks and streamline business processes."
  },
  {
    icon: Bot,
    title: "Intelligent Chatbots",
    description: "Deploy AI-powered chatbots for customer service and support."
  },
  {
    icon: Zap,
    title: "Process Optimization",
    description: "Optimize operations with intelligent automation solutions."
  }
];

const AIAutomation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-12 w-12 rounded-lg bg-primary/5 flex items-center justify-center">
                <Cog className="h-6 w-6 text-[#9b87f5]" />
              </div>
              <h1 className="text-4xl font-bold text-foreground">AI Automation</h1>
            </div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-muted-foreground mb-8">
                Transform your business operations with intelligent automation solutions. 
                We help organizations streamline processes and reduce manual work through AI-powered automation.
              </p>
              
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-6">Automation Solutions</h2>
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
                <h2 className="text-2xl font-semibold text-foreground mb-6">Implementation Process</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#9b87f5] text-white flex items-center justify-center flex-shrink-0">1</div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Process Analysis</h3>
                      <p>We analyze your current processes to identify automation opportunities.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#9b87f5] text-white flex items-center justify-center flex-shrink-0">2</div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Solution Design</h3>
                      <p>Our team designs custom automation solutions tailored to your needs.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#9b87f5] text-white flex items-center justify-center flex-shrink-0">3</div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Implementation & Training</h3>
                      <p>We implement the solution and train your team on the new automated processes.</p>
                    </div>
                  </div>
                </div>
              </section>

              <div className="bg-[#9b87f5]/5 p-8 rounded-lg mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Ready to Automate Your Business?</h2>
                <p className="text-muted-foreground mb-6">
                  Contact us to discover how AI automation can transform your operations.
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

export default AIAutomation;
