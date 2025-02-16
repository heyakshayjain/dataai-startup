import { Award, Users, Handshake, Trophy, Heart, Scale3D } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Award className="h-8 w-8 text-[#9b87f5]" />,
      title: "Expertise",
      description: "Our team brings years of experience in data engineering and AI solutions."
    },
    {
      icon: <Users className="h-8 w-8 text-[#9b87f5]" />,
      title: "Client-Focused",
      description: "We prioritize understanding your unique business needs and goals."
    },
    {
      icon: <Handshake className="h-8 w-8 text-[#9b87f5]" />,
      title: "Partnership",
      description: "We work as an extension of your team, ensuring seamless collaboration."
    },
    {
      icon: <Trophy className="h-8 w-8 text-[#9b87f5]" />,
      title: "Results-Driven",
      description: "Our solutions are designed to deliver measurable business impact."
    },
    {
      icon: <Heart className="h-8 w-8 text-[#9b87f5]" />,
      title: "Quality",
      description: "We maintain the highest standards in all our deliverables."
    },
    {
      icon: <Scale3D className="h-8 w-8 text-[#9b87f5]" />,
      title: "Scalability",
      description: "Our solutions grow with your business needs."
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#9b87f5] to-[#7E69AB]">
            Why Choose Us
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Partner with us for innovative data and AI solutions that drive real business value
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 hover:border-[#9b87f5] dark:hover:border-[#9b87f5] transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                {reason.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;