import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const testimonials = [];

const Testimonials = () => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#9b87f5] to-[#7E69AB]">
            What Our Clients Say
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
            Hear from our satisfied clients about their experience working with us
          </p>
          <Link to="/submit-testimonial">
            <Button 
              className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
            >
              Submit Your Testimonial
            </Button>
          </Link>
        </motion.div>
        {testimonials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="w-16 h-16 mb-4">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <p className="text-slate-600 mb-4">{testimonial.content}</p>
                    <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center">
            <p className="text-slate-600 mb-4">Coming Soon...</p>
            <Link to="/submit-testimony">
              <Button className="bg-[#9b87f5] hover:bg-[#7E69AB]">Submit Testimony</Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
