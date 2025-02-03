import { ChartBar, Brain, Database, Cog } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Database,
    title: "Data Engineering",
    description: "Build robust data pipelines and infrastructure to handle your data at any scale."
  },
  {
    icon: ChartBar,
    title: "Data Analytics",
    description: "Transform raw data into meaningful insights with advanced analytics solutions."
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Implement AI models that learn and improve from your data automatically."
  },
  {
    icon: Cog,
    title: "AI Automation",
    description: "Automate repetitive tasks and workflows with intelligent AI solutions."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Comprehensive data and AI solutions tailored to your business needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={service.title} className="group hover:shadow-lg transition-shadow duration-300 border border-slate-200">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors mb-4">
                  <service.icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl mb-2 text-slate-900">{service.title}</CardTitle>
                <CardDescription className="text-slate-600">{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;