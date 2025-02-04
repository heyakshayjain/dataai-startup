import { Code2, Coins, Settings, Workflow, Users } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Code2 className="w-12 h-12 text-blue-600" />,
      title: "Expertise Across Tech Stacks",
      description: "Proven experience in both open-source and enterprise-level technologies",
    },
    {
      icon: <Coins className="w-12 h-12 text-blue-600" />,
      title: "Unbeatable Pricing",
      description: "High-quality, custom solutions at competitive rates without compromising performance",
    },
    {
      icon: <Settings className="w-12 h-12 text-blue-600" />,
      title: "Tailored Solutions",
      description: "Custom solutions designed specifically for your unique business needs",
    },
    {
      icon: <Workflow className="w-12 h-12 text-blue-600" />,
      title: "Agile & Scalable Approach",
      description: "Flexible workflows that adapt as your business grows",
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Client-Centric Mindset",
      description: "Building long-term partnerships with focus on value-driven outcomes",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose Us</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Partner with us for innovative data and AI solutions that drive real business value
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg border border-slate-200 hover:border-blue-500 transition-all duration-300 animate-fade-in"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{reason.title}</h3>
              <p className="text-slate-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;