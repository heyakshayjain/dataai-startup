import { Check, FileSearch, FileText, HandshakeIcon, Code, TestTube2, Headphones } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: <FileSearch className="w-12 h-12 text-blue-600" />,
      title: "Free Initial Consultation",
      description: "Start with a FREE consultation to discuss your project goals",
    },
    {
      icon: <FileText className="w-12 h-12 text-blue-600" />,
      title: "Requirement Gathering & Refinement",
      description: "Detailed collection and refinement of project requirements",
    },
    {
      icon: <Check className="w-12 h-12 text-blue-600" />,
      title: "Proposal Preparation",
      description: "Custom proposal outlining the perfect solution for you",
    },
    {
      icon: <HandshakeIcon className="w-12 h-12 text-blue-600" />,
      title: "Agreement Signing",
      description: "Formalize our partnership with a clear agreement",
    },
    {
      icon: <Code className="w-12 h-12 text-blue-600" />,
      title: "Development & Implementation",
      description: "Expert development and seamless integration",
    },
    {
      icon: <TestTube2 className="w-12 h-12 text-blue-600" />,
      title: "Testing & Optimization",
      description: "Thorough testing and performance optimization",
    },
    {
      icon: <Headphones className="w-12 h-12 text-blue-600" />,
      title: "Final Delivery & Support",
      description: "Solution delivery with ongoing support",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Working Process</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Start with a <span className="text-blue-600 font-semibold">FREE consultation</span> and let us guide you through our proven process
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;