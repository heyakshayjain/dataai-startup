import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO at TechCorp",
    content: "DataAI transformed our business analytics capabilities. Their machine learning solutions helped us increase efficiency by 40%.",
    image: "/placeholder.svg"
  },
  {
    name: "Michael Chen",
    role: "Head of Data Science",
    content: "The team's expertise in data engineering and AI automation has been invaluable. They delivered exactly what we needed.",
    image: "/placeholder.svg"
  },
  {
    name: "Emma Davis",
    role: "Marketing Director",
    content: "Their data analytics solutions provided us with actionable insights that directly improved our marketing ROI.",
    image: "/placeholder.svg"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Hear from organizations that have transformed their operations with our data and AI solutions
          </p>
        </div>
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
      </div>
    </section>
  );
};

export default Testimonials;