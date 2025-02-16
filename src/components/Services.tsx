import { ChartBar, Brain, Database, Cog } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#9b87f5] to-[#7E69AB]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Comprehensive data and AI solutions tailored to your business needs
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              variants={item}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="group hover:shadow-lg transition-shadow duration-300 h-full">
                <CardHeader>
                  <motion.div 
                    className="h-12 w-12 rounded-lg bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="h-6 w-6 text-[#9b87f5]" />
                  </motion.div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to={service.link}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        variant="outline" 
                        className="w-full mt-4 text-[#9b87f5] border-[#9b87f5] hover:bg-[#9b87f5] hover:text-white"
                      >
                        Learn More
                      </Button>
                    </motion.div>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
