
import { ChartBar, Brain, Database, Cog } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Database,
    title: "Data Engineering",
    description: "Build robust data pipelines and infrastructure to handle your data at any scale.",
    link: "/services/data-engineering"
  },
  {
    icon: ChartBar,
    title: "Data Analytics",
    description: "Transform raw data into meaningful insights with advanced analytics solutions.",
    link: "/services/data-analytics"
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Implement AI models that learn and improve from your data automatically.",
    link: "/services/machine-learning"
  },
  {
    icon: Cog,
    title: "AI Automation",
    description: "Automate repetitive tasks and workflows with intelligent AI solutions.",
    link: "/services/ai-automation"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive data and AI solutions tailored to your business needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={service.title} className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors mb-4">
                  <service.icon className="h-6 w-6 text-[#9b87f5]" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link to={service.link}>
                  <Button variant="outline" className="w-full mt-4 text-[#9b87f5] border-[#9b87f5] hover:bg-[#9b87f5] hover:text-white">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
